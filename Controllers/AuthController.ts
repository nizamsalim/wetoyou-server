import { Response, Request } from "express";
import {
  InternalServerError,
  InvalidInputError,
  InvalidPhoneError,
  UnauthorisedError,
} from "../Constants/Errors";
import verifyGoogleIdToken from "../Helpers/verifyGoogleIdToken";
import User from "../Models/UserModel";
import { Document } from "mongoose";
import { generateAuthToken } from "../Helpers/generateAuthToken";

export const authenticateWithGoogle = async (req: Request, res: Response) => {
  try {
    const emailToken = req.headers["email-token"] as string;
    if (!emailToken) return res.status(401).json(UnauthorisedError);

    verifyGoogleIdToken(emailToken)
      .then(
        async (
          resp: { name: string; regNum: string; email: string } | null
        ) => {
          let user: Document;
          user = (await User.findOne({ email: resp?.email })) as Document;
          if (!user) {
            user = (await User.create({
              name: resp!.name,
              regNum: resp!.regNum,
              email: resp!.email,
            })) as Document;
          }

          const authToken = generateAuthToken({ _id: user._id });

          res.json({
            success: true,
            authToken,
            user,
          });
        }
      )
      .catch((err) => {
        return res.status(500).json(InternalServerError);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError);
  }
};

function _validatePhone(phoneInput: string) {
  const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  return re.test(phoneInput);
}

export const updatePhone = async (req: Request, res: Response) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json(InvalidInputError);
    if (!_validatePhone(phone)) return res.status(400).json(InvalidPhoneError);

    await User.findByIdAndUpdate(req._id, {
      $set: {
        phone: phone,
      },
    });
    res.end();
  } catch (error) {
    return res.status(500).json(InternalServerError);
  }
};
