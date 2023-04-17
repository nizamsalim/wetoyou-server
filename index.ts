import express from "express";
const app = express();
import cors from "cors";
import AuthRouter from "./Routers/AuthRouter";
import MasterConfig from "./Config/MasterConfig";

// handles all configurations
MasterConfig();

app.use(cors());
app.use(express.json());

app.use("/auth", AuthRouter);

app.listen(5000, () => {
  console.log("server on 5000");
});
