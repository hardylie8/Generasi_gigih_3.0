const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController");
const handleValidationErrors = require("../middleware/handleValidationError");
const commentValidation = require("../validation/CommentValidation");
const paginationValidation = require("../validation/PaginationValidation");
const authGuard = require("../middleware/authGuard");
router.get(
  "/",
  paginationValidation,
  handleValidationErrors,
  commentController.getComment
);

router.post(
  "/",
  authGuard,
  commentValidation.validate("addNewComment"),
  handleValidationErrors,
  commentController.createComment
);

module.exports = router;
