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

const getProducts = (page, limit, videoId) => {
  return Product.paginate(
    { videoId: videoId },
    {
      populate: "videoId",
      lean: true,
      page: page,
      limit: limit,
    }
  );
};

module.exports = {
  getProducts,
  createProduct,
};
