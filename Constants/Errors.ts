export const InternalServerError = {
  success: false,
  error: {
    code: "server",
    message: "Internal server error.",
    statusCode: 500,
  },
};

export const InvalidInputError = {
  success: false,
  error: {
    statusCode: 400,
    code: "val/inv-inp",
    message: "Invalid input",
  },
};

export const InvalidPhoneError = {
  success: false,
  error: {
    statusCode: 400,
    code: "val/inv-ph",
    message: "Phone is invalid",
  },
};

export const UnauthorisedError = {
  success: false,
  error: {
    statusCode: 401,
    code: "val/em-un",
    message: "Unauthorisd request",
  },
};
export const ForbiddenError = {
  success: false,
  error: {
    statusCode: 403,
    code: "val/fbd-tkn",
    message: "Forbidden",
  },
};

export const UserExistsError = {
  success: false,
  error: {
    code: "auth/em-ex",
    message: "Email already exists",
    statusCode: 400,
  },
};

export const OtpExpiredError = {
  success: false,
  error: {
    code: "auth/otp-exp",
    message: "OTP expired",
    statusCode: 400,
  },
};

export const IncorrectOtpError = {
  success: false,
  error: {
    code: "auth/otp-inc",
    message: "Incorrect OTP",
    statusCode: 400,
  },
};

export const UserDoesNotExistError = {
  success: false,
  error: {
    code: "auth/em-nf",
    message: "User does not exist",
    statusCode: 404,
  },
};

export const IncorrectPasswordError = {
  success: false,
  error: {
    code: "auth/pwd-inc",
    message: "Password is incorrect",
    statusCode: 400,
  },
};
