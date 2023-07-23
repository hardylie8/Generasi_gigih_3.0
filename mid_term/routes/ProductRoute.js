const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const handleValidationErrors = require("../middleware/handleValidationError");
const productValidation = require("../validation/ProductValidation");

router.get("/:videoId", productController.getProduct);
router.post(
  "/",
  productValidation.validate("addNewProduct"),
  handleValidationErrors,
  productController.createProduct
);

module.exports = router;
