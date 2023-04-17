import { auth } from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/auth";

export default function verifyGoogleIdToken(idToken: string): Promise<{
  name: string;
  regNum: string;
  email: string;
} | null> {
  return new Promise(async (resolve, reject) => {
    try {
      const result: DecodedIdToken = await auth().verifyIdToken(idToken);
      const parsedData = _decodeNameAndReg(result.name);
      parsedData.email = result.email as string;
      resolve(parsedData);
    } catch (error) {
      reject(null);
    }
  });
}

const _decodeNameAndReg = (
  inputName: string
): {
  name: string;
  regNum: string;
  email: string;
} => {
  const result = {
    name: "",
    regNum: "",
    email: "",
  };
  result.regNum = inputName.slice(-9);
  const len = inputName.length - 10;
  result.name = inputName.slice(0, len);

  const br = result.regNum.slice(2, 5);

  return result;
};
