const Comment = require("../models/Comment");

const getComments = (page, limit, videoId) => {
  return Comment.paginate(
    { videoId: videoId },
    {
      sort: "-createdAt",
      populate: ["videoId", "userId"],
      lean: true,
      page: page,
      limit: limit,
    }
  );
};

const createComment = (userId, videoId, message) => {
  const newComment = new Comment({
    userId: userId,
    videoId: videoId,
    message: message,
  });
  return newComment.save();
};

module.exports = {
  getComments,
  createComment,
};
