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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = require("../Constants/Errors");
const UserModel_1 = __importDefault(require("../Models/UserModel"));
const validateSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, regNum } = req.body;
    const emailToken = req.headers["email-token"];
    if (!name || !email || !password || !regNum)
        return res.status(400).json(Errors_1.InvalidInputError);
    if (!emailToken)
        return res.status(401).json(Errors_1.UnauthorisedError);
    // validation checks
    const emailExists = yield UserModel_1.default.findOne({ regNum: regNum.toUpperCase() });
    const emailIsValid = validateEmail(email);
    const regNumIsValid = validateRegistrationNumber(regNum);
    const passwordIsValid = password.length >= 6 ? true : false;
    // const emailIsVerified = verifyEmailToken(email, emailToken, res);
    function validateEmail(emailInput) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const instituteRegex = /(.ac.in|.edu.in)$/;
        return (re.test(emailInput.toLowerCase()) &&
            instituteRegex.test(emailInput.toLowerCase()));
    }
    function validateRegistrationNumber(regNum) {
        const re = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
        return re.test(regNum);
    }
    if (emailExists) {
        return res.status(400).json({
            success: false,
            error: {
                statusCode: 400,
                code: "val/em-ex",
                message: "Email already exists",
            },
        });
    }
    if (!regNumIsValid) {
        return res.status(400).json({
            success: false,
            error: {
                statusCode: 400,
                code: "val/rn-inv",
                message: "Registration number is invalid",
            },
        });
    }
    if (!emailIsValid) {
        return res.status(400).json({
            success: false,
            error: {
                statusCode: 400,
                code: "val/em-inv",
                message: "Email is invalid",
            },
        });
    }
    if (!passwordIsValid) {
        return res.status(400).json({
            success: false,
            error: {
                statusCode: 400,
                code: "val/pwd-len",
                message: "Password should be atleast 6 characters long",
            },
        });
    }
    // if (!emailIsVerified) {
    //   return res.status(401).json({
    //     success: false,
    //     error: {
    //       statusCode: 401,
    //       code: "auth/em-nv",
    //       message: "Email is not verified",
    //     },
    //   });
    // }
    next();
});
exports.default = validateSignup;
