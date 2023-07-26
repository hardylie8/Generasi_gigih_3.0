const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(403)
      .send({ message: "A token is required for authentication", data: {} });
  }
  try {
    const decoded = jwt.verify(token?.split(" ")[1], secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({ message: "Invalid Token", data: {} });
  }
  return next();
};

module.exports = verifyToken;
