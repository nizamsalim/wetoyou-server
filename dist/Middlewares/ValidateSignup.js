"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = require("../Constants/Errors");
const validateSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone } = req.body;
    const emailToken = req.headers["email-token"];
    if (!phone)
        return res.status(400).json(Errors_1.InvalidInputError);
    if (!validatePhone(phone))
        return res.status(400).json(Errors_1.InvalidPhoneError);
    if (!emailToken)
        return res.status(401).json(Errors_1.UnauthorisedError);
    function validatePhone(phoneInput) {
        const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        return re.test(phoneInput);
    }
    next();
});
exports.default = validateSignup;
