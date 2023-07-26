require("dotenv").config();
module.exports = {
  modelBaseDirectory: "models", // model directory name
  models: "**/*.js", // model matcher
  data: "seeders", // data directory name
  db: process.env.DATABASE_URL, // db connection url
};
