const commentService = require("../services/CommentService");

const getComment = async (req, res) => {
  try {
    const comments = await commentService.getComments();
    res.status(200).send({
      message: "data has been successfully retrieved ",
      data: comments,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const createComment = async (req, res) => {
  try {
    const newComment = await commentService.createComment(req);
    res.status(200).send({
      message: "data has been successfully created ",
      data: newComment,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {
  getComment,
  createComment,
};
