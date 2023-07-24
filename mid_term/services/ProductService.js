const productRepository = require("../repositories/ProductRepository");

const getProducts = (page, limit, videoId) => {
  return productRepository.getProducts(page, limit, videoId);
};

const createProduct = (title, price, url, videoId) => {
  return productRepository.createProduct(title, price, url, videoId);
};

module.exports = {
  getProducts,
  createProduct,
};
