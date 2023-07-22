const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
    },
    thumbnailUrl: {
      type: String,
      required: [true, "must provide thumbnailUrl"],
      trim: true,
    },
    embeddedComponent: {
      type: String,
      required: [true, "must provide embeddedComponent"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", VideoSchema);
