const videoRepository = require("../repositories/VideoRepository");

const createVideo = (title, thumbnailUrl, embeddedComponent) => {
  return videoRepository.createVideo(title, thumbnailUrl, embeddedComponent);
};

const getVideos = (page, limit) => {
  return videoRepository.getVideos(page, limit);
};

const updateVideo = async (id, title, thumbnailUrl, embeddedComponent) => {
  const videoExists = await videoService.getVideoById(id);
  if (!videoExists) {
    throw new Error("Data not found");
  }
  const updateVideo = {};
  title && Object.assign(updateVideo, { title: tile });
  thumbnailUrl && Object.assign(updateVideo, { thumbnailUrl: thumbnailUrl });
  embeddedComponent &&
    Object.assign(updateVideo, { embeddedComponent: embeddedComponent });
  return videoRepository.updateVideo(id, updateVideo);
};

const getVideoById = async (id) => {
  const videoExists = await videoService.getVideoById(id);
  if (!videoExists) {
    throw new Error("Data not found");
  }
  return videoRepository.getVideoById(id);
};

const deleteVideo = async (id) => {
  const videoExists = await videoService.getVideoById(id);
  if (!videoExists) {
    throw new Error("Data not found");
  }
  return videoRepository.deleteVideo(id);
};

module.exports = {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
