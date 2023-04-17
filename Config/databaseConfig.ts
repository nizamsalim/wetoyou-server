import { connect, set } from "mongoose";

export default function connectDatabase(uri: string): Promise<boolean> {
  set("strictQuery", true);
  return new Promise((resolve, reject) => {
    connect(uri, (err) => {
      if (err) {
        reject(false);
      } else {
        console.log("db connected");
        resolve(true);
      }
    });
  });
}
