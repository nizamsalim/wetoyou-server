import { Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { ForbiddenError, UnauthorisedError } from "../Constants/Errors";
import { config } from "dotenv";
config();

export default function VerifyAuthToken(
  req: Request,
  res: Response,
  next: Function
) {
  const authToken = req.headers["auth-token"];
  if (!authToken) return res.json(401).json(UnauthorisedError);

  try {
    const payload: JwtPayload = verify(
      authToken as string,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    req._id = payload._id;
  } catch (error) {
    return res.json(403).json(ForbiddenError);
  }

  next();
}

declare global {
  namespace Express {
    export interface Request {
      _id: string;
    }
  }
}
