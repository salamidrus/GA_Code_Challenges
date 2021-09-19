const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const bearerToken = req.header("Authorization");
  try {
    const token = bearerToken.replace("Bearer ", "");
    const decoded = jwt.verify(token, "passwordKita");
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "failed",
      message: error.message || "Unauthorized, invalid token!",
    });
  }
};
