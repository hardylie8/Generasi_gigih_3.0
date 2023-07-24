const Comment = require("../models/Comment");

const createComment = (req) => {
  const newComment = new Comment({
    username: req.body.username,
    videoId: req.body.videoId,
    message: req.body.message,
  });
  return newComment.save();
};

const getComments = (page, limit, videoId) => {
  return Comment.paginate(
    { videoId: videoId },
    {
      sort: "-createdAt",
      populate: "videoId",
      lean: true,
      page: page,
      limit: limit,
    }
  );
};

module.exports = {
  getComments,
  createComment,
};
