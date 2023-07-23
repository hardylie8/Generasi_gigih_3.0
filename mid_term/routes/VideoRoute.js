const express = require("express");
const router = express.Router();
const videoController = require("../controllers/VideoController");
const handleValidationErrors = require("../middleware/handleValidationError");
const videoValidation = require("../validation/VideoValidation");

router.get("/", videoController.getVideo);
router.get("/:id", videoController.getVideoById);
router.post(
  "/",
  videoValidation.validate("addNewVideo"),
  handleValidationErrors,
  videoController.createVideo
);
router.patch(
  "/:id",
  videoValidation.validate("PatchVideo"),
  handleValidationErrors,
  videoController.updateVideo
);
router.delete("/:id", videoController.deleteVideo);

module.exports = router;
