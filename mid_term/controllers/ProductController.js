const productService = require("../services/ProductService");

const getProduct = async (req, res) => {
  try {
    const products = await productService.getProducts(req);
    res.status(200).send({
      message: "data has been successfully retrieved ",
      data: products,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req);
    res.status(201).send({
      message: "data has been successfully created ",
      data: newProduct,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {
  getProduct,
  createProduct,
};
