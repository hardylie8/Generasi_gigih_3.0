const express = require("express");
const router = express.Router();
const videoController = require("../controllers/VideoController");

router.get("/", videoController.getVideo);
router.get("/:id", videoController.getVideoById);
router.post("/", videoController.createVideo);
router.patch("/:id", videoController.updateVideo);
router.delete("/:id", videoController.deleteVideo);

module.exports = router;
