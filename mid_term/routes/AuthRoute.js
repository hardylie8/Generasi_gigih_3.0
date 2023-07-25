const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");
const handleValidationErrors = require("../middleware/handleValidationError");
const authValidation = require("../validation/AuthValidation");

router.post(
  "/login",
  authValidation.validate("login"),
  handleValidationErrors,
  authController.login
);

router.post(
  "/register",
  authValidation.validate("register"),
  handleValidationErrors,
  authController.register
);

module.exports = router;
