"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../Controllers/AuthController");
const VerifyAuthToken_1 = __importDefault(require("../Middlewares/VerifyAuthToken"));
const router = (0, express_1.Router)();
router.post("/authenticate/google", AuthController_1.authenticateWithGoogle);
// @protected routes
router.post("/updatephone", VerifyAuthToken_1.default, AuthController_1.updatePhone);
exports.default = router;
