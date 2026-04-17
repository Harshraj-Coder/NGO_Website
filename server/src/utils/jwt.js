const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  return jwt.sign(
    {
      username: user.Username,
      role: user.Role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};