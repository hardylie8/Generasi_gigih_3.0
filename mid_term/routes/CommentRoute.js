const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController");
const handleValidationErrors = require("../middleware/handleValidationError");
const commentValidation = require("../validation/CommentValidation");

router.get("/", commentController.getComment);
router.post(
  "/",
  commentValidation.validate("addNewComment"),
  handleValidationErrors,
  commentController.createComment
);

module.exports = router;
