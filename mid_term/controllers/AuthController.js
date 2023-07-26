const authService = require("../services/AuthService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await authService.login(email, password);
    res.status(200).send({
      message: "login success ",
      data: newUser,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await authService.register(username, email, password);
    res.status(200).send({
      message: "register success ",
      data: newUser,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

module.exports = { login, register };
