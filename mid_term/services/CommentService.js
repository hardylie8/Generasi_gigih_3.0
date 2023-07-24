const commentRepository = require("../repositories/CommentRepository");

const createComment = (username, videoId, message) => {
  return commentRepository.createComment(username, videoId, message);
};

const getComments = (page, limit, videoId) => {
  return commentRepository.getComments(page, limit, videoId);
};

module.exports = {
  getComments,
  createComment,
};
