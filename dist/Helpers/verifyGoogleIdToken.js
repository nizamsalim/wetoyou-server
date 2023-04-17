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
const firebase_admin_1 = require("firebase-admin");
function verifyGoogleIdToken(idToken) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, firebase_admin_1.auth)().verifyIdToken(idToken);
            const parsedData = _decodeNameAndReg(result.name);
            parsedData.email = result.email;
            resolve(parsedData);
        }
        catch (error) {
            reject(null);
        }
    }));
}
exports.default = verifyGoogleIdToken;
const _decodeNameAndReg = (inputName) => {
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
