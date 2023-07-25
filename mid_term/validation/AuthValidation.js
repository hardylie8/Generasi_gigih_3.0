const { body } = require("express-validator");
const validate = (method) => {
  const validationRule = [
    body("email").isEmail().withMessage("email is not valid"),
    body("password")
      .isStrongPassword()
      .withMessage(
        "the password must contain 8 characters, 1 lower case letter, 1 upper case letter, 1 number and 1 symbol"
      ),
  ];
  method === "register" &&
    validationRule.push(
      body("username")
        .isLength({ min: 4 })
        .withMessage("username Must be at least 4 chars long")
    );
  return validationRule;
};
module.exports = { validate };
