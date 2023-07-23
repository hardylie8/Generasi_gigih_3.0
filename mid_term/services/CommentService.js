const Comment = require("../models/Comment");

const createComment = (req) => {
  const newComment = new Comment({
    username: req.body.username,
    videoId: req.body.videoId,
    message: req.body.message,
  });
  return newComment.save();
};

const getComments = () => {
  return Comment.find().populate("videoId");
};

module.exports = {
  getComments,
  createComment,
};
