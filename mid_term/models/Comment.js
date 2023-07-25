const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // username: {
    //   type: String,
    //   required: [true, "must provide username"],
    // },
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

CommentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Comment", CommentSchema);
