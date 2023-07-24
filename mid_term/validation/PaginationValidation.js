const { query } = require("express-validator");
const paginationValidation = [
  query("limit").optional().isInt(),
  query("page").optional().isInt(),
];
module.exports = paginationValidation;
