const { body } = require("express-validator");
const validate = (method) => {
  switch (method) {
    case "addNewVideo": {
      return [
        body("title")
          .isLength({ min: 4 })
          .withMessage("title Must be at least 4 chars long"),
        body("thumbnailUrl")
          .isURL()
          .withMessage("thumbnailUrl Must be a valid url"),
        body("embeddedComponent")
          .matches(
            /^(<iframe.*?src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})".*?><\/iframe>)$/
          )
          .withMessage(
            "Embedded Component must be a valid youtube embedded component"
          ),
      ];
    }
    case "PatchVideo": {
      return [
        body("title")
          .optional()
          .isLength({ min: 4 })
          .withMessage("title Must be at least 4 chars long"),
        body("thumbnailUrl")
          .optional()
          .isURL()
          .withMessage("thumbnailUrl Must be a valid url"),
        body("embeddedComponent")
          .optional()
          .isLength({ min: 4 })
          .withMessage("price Must be at least 1")
          .matches(
            /^(<iframe.*?src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})".*?><\/iframe>)$/
          )
          .withMessage(
            "Embedded Component must be a valid youtube embedded component"
          ),
      ];
    }
  }
};
module.exports = { validate };
