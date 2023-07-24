const Comment = require("../models/Comment");

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

const createComment = (username, videoId, message) => {
  const newComment = new Comment({
    username: username,
    videoId: videoId,
    message: message,
  });
  return newComment.save();
};

module.exports = {
  getComments,
  createComment,
};
