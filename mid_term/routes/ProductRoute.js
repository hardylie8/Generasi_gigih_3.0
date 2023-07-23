const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.get("/:videoId", productController.getProduct);
router.post("/", productController.createProduct);

module.exports = router;
