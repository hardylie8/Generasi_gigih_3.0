const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
    },
    price: {
      type: Number,
      required: [true, "must provide price"],
      min: 0,
    },
    url: {
      type: String,
      isUrl: true,
      required: [true, "must provide url"],
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: [true, "must provide username"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
