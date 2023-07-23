const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'AnotherModel',
    //   },
    username: {
      type: String,
      required: [true, "must provide username"],
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: [true, "must provide username"],
    },
    message: {
      type: String,
      required: [true, "must provide username"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
