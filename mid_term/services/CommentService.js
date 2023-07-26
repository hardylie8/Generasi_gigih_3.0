const commentRepository = require("../repositories/CommentRepository");
const videoRepository = require("../repositories/VideoRepository");

const createComment = async (userId, videoId, message) => {
  const videoExists = await videoRepository.getVideoById(videoId);
  if (!videoExists) {
    throw new Error("Data not found");
  }
  return commentRepository.createComment(userId, videoId, message);
};

const getComments = (page, limit, videoId) => {
  return commentRepository.getComments(page, limit, videoId);
};

module.exports = {
  getComments,
  createComment,
};
