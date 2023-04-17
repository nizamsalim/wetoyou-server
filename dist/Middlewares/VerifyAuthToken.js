"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const Errors_1 = require("../Constants/Errors");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function VerifyAuthToken(req, res, next) {
    const authToken = req.headers["auth-token"];
    if (!authToken)
        return res.json(401).json(Errors_1.UnauthorisedError);
    try {
        const payload = (0, jsonwebtoken_1.verify)(authToken, process.env.JWT_SECRET);
        req._id = payload._id;
    }
    catch (error) {
        return res.json(403).json(Errors_1.ForbiddenError);
    }
    next();
}
exports.default = VerifyAuthToken;
