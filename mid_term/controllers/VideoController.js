const videoService = require("../services/VideoService");

const getVideo = async (req, res) => {
  try {
    const videos = await videoService.getVideos();
    res.status(200).send({
      message: "data has been successfully retrieved ",
      data: videos,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const getVideoById = async (req, res) => {
  try {
    const video = await videoService.getVideoById(req);
    res.status(200).send({
      message: "data has been successfully retrieved ",
      data: video,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const createVideo = async (req, res) => {
  try {
    const newVideo = await videoService.createVideo(req);
    res.status(201).send({
      message: "data has been successfully created ",
      data: newVideo,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const updateVideo = async (req, res) => {
  try {
    const updateVideo = await videoService.updateVideo(req);
    res.status(200).send({
      message: "data has been successfully updated ",
      data: updateVideo,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const deleteVideo = await videoService.deleteVideo(req);
    res.status(200).send({
      message: "data has been successfully deleted ",
      data: deleteVideo,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {
  getVideo,
  createVideo,
  updateVideo,
  getVideoById,
  deleteVideo,
};