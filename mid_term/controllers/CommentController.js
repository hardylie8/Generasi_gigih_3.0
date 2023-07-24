const commentService = require("../services/CommentService");

const getComment = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const videoId = req.query.videoId;
    const comments = await commentService.getComments(page, limit, videoId);
    res.status(200).send({
      message: "data has been successfully retrieved ",
      data: comments,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const createComment = async (req, res) => {
  try {
    const newComment = await commentService.createComment(req);
    res.status(201).send({
      message: "data has been successfully created ",
      data: newComment,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

module.exports = {
  getComment,
  createComment,
};
