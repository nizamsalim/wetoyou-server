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
exports.updatePhone = exports.authenticateWithGoogle = void 0;
const Errors_1 = require("../Constants/Errors");
const verifyGoogleIdToken_1 = __importDefault(require("../Helpers/verifyGoogleIdToken"));
const UserModel_1 = __importDefault(require("../Models/UserModel"));
const generateAuthToken_1 = require("../Helpers/generateAuthToken");
const authenticateWithGoogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailToken = req.headers["email-token"];
        if (!emailToken)
            return res.status(401).json(Errors_1.UnauthorisedError);
        (0, verifyGoogleIdToken_1.default)(emailToken)
            .then((resp) => __awaiter(void 0, void 0, void 0, function* () {
            let user;
            user = (yield UserModel_1.default.findOne({ email: resp === null || resp === void 0 ? void 0 : resp.email }));
            if (!user) {
                user = (yield UserModel_1.default.create({
                    name: resp.name,
                    regNum: resp.regNum,
                    email: resp.email,
                }));
            }
            const authToken = (0, generateAuthToken_1.generateAuthToken)({ _id: user._id });
            res.json({
                success: true,
                authToken,
                user,
            });
        }))
            .catch((err) => {
            return res.status(500).json(Errors_1.InternalServerError);
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(Errors_1.InternalServerError);
    }
});
exports.authenticateWithGoogle = authenticateWithGoogle;
function _validatePhone(phoneInput) {
    const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    return re.test(phoneInput);
}
const updatePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone } = req.body;
        if (!phone)
            return res.status(400).json(Errors_1.InvalidInputError);
        if (!_validatePhone(phone))
            return res.status(400).json(Errors_1.InvalidPhoneError);
        yield UserModel_1.default.findByIdAndUpdate(req._id, {
            $set: {
                phone: phone,
            },
        });
        res.end();
    }
    catch (error) {
        return res.status(500).json(Errors_1.InternalServerError);
    }
});
exports.updatePhone = updatePhone;
