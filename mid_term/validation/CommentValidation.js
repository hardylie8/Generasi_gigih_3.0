const { body } = require("express-validator");
const validate = (method) => {
  switch (method) {
    case "addNewComment": {
      return [
        body("username")
          .isLength({ min: 4 })
          .withMessage("username Must be at least 4 chars long"),
        body("videoId")
          .isLength({ min: 4 })
          .withMessage("videoId Must be at least 4 chars long"),
        body("message")
          .isLength({ min: 4 })
          .withMessage("message Must be at least 4 chars long"),
      ];
    }
  }
};
module.exports = { validate };
