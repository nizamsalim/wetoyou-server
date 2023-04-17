"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const requiredString = {
    type: String,
    required: true,
};
const userSchema = new mongoose_1.Schema({
    name: requiredString,
    regNum: requiredString,
    email: requiredString,
    phone: String,
});
exports.default = (0, mongoose_1.model)("users", userSchema);
