import { Schema, model } from "mongoose";

const requiredString = {
  type: String,
  required: true,
};

const userSchema = new Schema({
  name: requiredString,
  regNum: requiredString,
  email: requiredString,
  phone: String,
});

export default model("users", userSchema);
