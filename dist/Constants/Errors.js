"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectPasswordError = exports.UserDoesNotExistError = exports.IncorrectOtpError = exports.OtpExpiredError = exports.UserExistsError = exports.ForbiddenError = exports.UnauthorisedError = exports.InvalidPhoneError = exports.InvalidInputError = exports.InternalServerError = void 0;
exports.InternalServerError = {
    success: false,
    error: {
        code: "server",
        message: "Internal server error.",
        statusCode: 500,
    },
};
exports.InvalidInputError = {
    success: false,
    error: {
        statusCode: 400,
        code: "val/inv-inp",
        message: "Invalid input",
    },
};
exports.InvalidPhoneError = {
    success: false,
    error: {
        statusCode: 400,
        code: "val/inv-ph",
        message: "Phone is invalid",
    },
};
exports.UnauthorisedError = {
    success: false,
    error: {
        statusCode: 401,
        code: "val/em-un",
        message: "Unauthorisd request",
    },
};
exports.ForbiddenError = {
    success: false,
    error: {
        statusCode: 403,
        code: "val/fbd-tkn",
        message: "Forbidden",
    },
};
exports.UserExistsError = {
    success: false,
    error: {
        code: "auth/em-ex",
        message: "Email already exists",
        statusCode: 400,
    },
};
exports.OtpExpiredError = {
    success: false,
    error: {
        code: "auth/otp-exp",
        message: "OTP expired",
        statusCode: 400,
    },
};
exports.IncorrectOtpError = {
    success: false,
    error: {
        code: "auth/otp-inc",
        message: "Incorrect OTP",
        statusCode: 400,
    },
};
exports.UserDoesNotExistError = {
    success: false,
    error: {
        code: "auth/em-nf",
        message: "User does not exist",
        statusCode: 404,
    },
};
exports.IncorrectPasswordError = {
    success: false,
    error: {
        code: "auth/pwd-inc",
        message: "Password is incorrect",
        statusCode: 400,
    },
};
