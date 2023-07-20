const { body, query, validationResult } = require("express-validator");
const playlist = require("../models/Playlist");

const validate = (method) => {
  switch (method) {
    case "addNewSong": {
      return [
        body("title")
          .isLength({ min: 4 })
          .withMessage("title Must be at least 4 chars long"),
        body("artist")
          .isArray({ min: 1 })
          .withMessage("Must have at least 1 artist and in array format"),
        body("url").isURL().withMessage("Must be a valid url"),
      ];
    }
    case "getAllSong": {
      return [
        query("sort")
          .optional()
          .isIn(["play_count"])
          .withMessage("play count can only sorted by play count"),
        query("order")
          .optional()
          .isIn(["asc", "desc"])
          .withMessage("can only in asc or desc"),
      ];
    }
    case "playSong": {
      return [body("status").isIn(playlist.status)];
    }
  }
};

const validationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));
  return res.status(422).json({
    code: 422,
    message: "Validation Failed",
    data: extractedErrors,
  });
};

module.exports = { validate, validationHandler };
