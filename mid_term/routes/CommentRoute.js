const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController");

router.get("/", commentController.getComment);
router.post("/", commentController.createComment);

module.exports = router;
