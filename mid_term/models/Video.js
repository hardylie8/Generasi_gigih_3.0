const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
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

VideoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Video", VideoSchema);
