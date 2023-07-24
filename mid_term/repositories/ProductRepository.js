const Product = require("../models/Product");

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

const createProduct = (title, price, url, videoId) => {
  const newProduct = new Product({
    title: title,
    price: price,
    url: url,
    videoId: videoId,
  });
  return newProduct.save();
};

module.exports = {
  getProducts,
  createProduct,
};
