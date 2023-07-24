const videoService = require("../services/VideoService");

const getVideo = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const videos = await videoService.getVideos(page, limit);
    res.status(200).send({
      message: "data has been successfully retrieved ",
      data: videos,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const getVideoById = async (req, res) => {
  try {
    const id = req.params.id;
    const video = await videoService.getVideoById(id);
    res.status(200).send({
      message: "data has been successfully retrieved ",
      data: video,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const createVideo = async (req, res) => {
  try {
    const { title, thumbnailUrl, embeddedComponent } = req.body;
    const newVideo = await videoService.createVideo(
      title,
      thumbnailUrl,
      embeddedComponent
    );
    res.status(201).send({
      message: "data has been successfully created ",
      data: newVideo,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const updateVideo = async (req, res) => {
  try {
    const { title, thumbnailUrl, embeddedComponent } = req.body;
    const id = req.params.id;
    const updateVideo = await videoService.updateVideo(
      id,
      title,
      thumbnailUrl,
      embeddedComponent
    );
    res.status(200).send({
      message: "data has been successfully updated ",
      data: updateVideo,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteVideo = await videoService.deleteVideo(id);
    res.status(200).send({
      message: "data has been successfully deleted ",
      data: deleteVideo,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

module.exports = {
  getVideo,
  createVideo,
  updateVideo,
  getVideoById,
  deleteVideo,
};
