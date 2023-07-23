const Product = require("../models/Product");

const createProduct = (req) => {
  const newProduct = new Product({
    title: req.body.title,
    price: req.body.price,
    url: req.body.url,
    videoId: req.body.videoId,
  });
  return newProduct.save();
};

const getProducts = (req) => {
  const videoId = req.params.videoId;
  return Product.find({ videoId: videoId }).populate("videoId");
};

module.exports = {
  getProducts,
  createProduct,
};
