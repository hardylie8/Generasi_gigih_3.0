const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/AuthRepository");
const secretKey = process.env.SECRET_KEY;

const login = async (email, password) => {
  const user = await authRepository.getUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    throw new Error("Invalid password.");
  }
  const payload = { id: user.id, email: user.email, username: user.username };
  const token = jwt.sign(payload, secretKey, {
    expiresIn: "1h",
  });
  return { token };
};

const register = async (username, email, password) => {
  const newUser = await authRepository.createUser(username, email, password);
  const payload = {
    id: newUser.id,
    email: newUser.email,
    username: newUser.username,
  };
  const token = jwt.sign(payload, secretKey, {
    expiresIn: "1h",
  });

  return { token };
};

module.exports = { login, register };
