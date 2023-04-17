import connectDatabase from "./databaseConfig";
import firebaseConfig from "./firebaseConfig";
import { config } from "dotenv";

export default async function MasterConfig() {
  config();
  await connectDatabase(process.env.DB_URI as string);
  firebaseConfig(process.env.FIREBASE_SECRET as string);
}
