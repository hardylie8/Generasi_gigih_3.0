const express = require("express");
const router = express.Router();

const playlistController = require("../controller/PlaylistController");
const playlistValidation = require("../validation/PlaylistValidation");

router.get(
  "/",
  playlistValidation.validate("getAllSong"),
  playlistValidation.validationHandler,
  playlistController.getAllSongs
);

router.post(
  "/",
  playlistValidation.validate("addNewSong"),
  playlistValidation.validationHandler,
  playlistController.addNewSong
);

router.post(
  "/:id",
  playlistValidation.validate("playSong"),
  playlistValidation.validationHandler,
  playlistController.playSong
);

module.exports = router;
