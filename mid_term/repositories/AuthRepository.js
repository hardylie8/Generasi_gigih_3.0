const User = require("../models/User");
const createUser = (username, email, password) => {
  const newUser = new User({
    username: username,
    email: email,
    password: password,
  });
  return newUser.save();
};

const getUserByEmail = (email) => {
  return User.findOne({ email: email });
};

module.exports = { createUser, getUserByEmail };
