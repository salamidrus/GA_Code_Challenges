module.exports = async (req, res, next) => {
  try {
    if (req.user.role != "admin") throw new Error("Cuma Admin yang boleh");

    next();
  } catch (error) {
    return res.status(401).json({
      status: "failed",
      message: error.message || "Unauthorized, invalid token!",
    });
  }
};
