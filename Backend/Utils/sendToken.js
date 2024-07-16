/*const jwt = require("jsonwebtoken");

const signToken = (id) => {
  // return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    return jwt.sign({ id: id }, 'fjkljfdklakfdjfdndfjkdfkdlfdaj;fld', {
    // expiresIn: process.env.JWT_EXPIRES_IN,
    expiresIn: process.env.JWT_5d,
  });
};

exports.createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      // Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      Date.now() + process.env.JWT_COOKIE_5 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
    cookieOptions.sameSite = "none";
  }
  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;
  user.passwordChangedAt = undefined;

  res.status(statusCode).json({
    status: "success",
    user,
  });
};
*/// JWT_EXPIRES_IN = 5d //// JWT_SECRET_KEY = fjkljfdklakfdjfdndfjkdfkdlfdaj;fld



//JWT_SECRET_KEY = fjkljfdklakfdjfdndfjkdfkdlfdaj;fld

// JWT_EXPIRES_IN = "5d";

// JWT_COOKIE_EXPIRES_IN = 5

// const jwt = require("jsonwebtoken");

// const signToken = (id) => {
//   return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
// };

// exports.createSendToken = (user, statusCode, res) => {
//   const token = signToken(user._id);
//   const cookieOptions = {
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };
//   if (process.env.NODE_ENV === "production") {
//     cookieOptions.secure = true;
//     cookieOptions.sameSite = "none";
//   }
//   res.cookie("jwt", token, cookieOptions);

//   user.password = undefined;
//   user.passwordChangedAt = undefined;

//   res.status(statusCode).json({
//     status: "success",
//     user,
//   });
// };



// sendToken.js
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN, // This assumes that process.env.JWT_EXPIRES_IN is a string like '5d'
  });
};

exports.createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() +
        process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
    cookieOptions.sameSite = "none";
  }
  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;
  user.passwordChangedAt = undefined;

  res.status(statusCode).json({
    status: "success",
    user,
  });
};
