const { body } = require("express-validator");
const validate = (method) => {
  switch (method) {
    case "addNewProduct": {
      return [
        body("title")
          .isLength({ min: 4 })
          .withMessage("title Must be at least 4 chars long"),
        body("videoId")
          .isLength({ min: 4 })
          .withMessage("videoId Must be at least 4 chars long"),
        body("price").isInt({ min: 1 }).withMessage("price Must be at least 1"),
        body("url").isURL().withMessage("url Must be a valid url"),
      ];
    }
  }
};
module.exports = { validate };
