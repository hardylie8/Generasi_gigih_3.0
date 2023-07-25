const Video = require("../models/Video");

const createVideo = (title, thumbnailUrl, embeddedComponent) => {
  const newVideo = new Video({
    title: title,
    thumbnailUrl: thumbnailUrl,
    embeddedComponent: embeddedComponent,
  });
  return newVideo.save();
};

const getVideos = (page, limit) => {
  return Video.paginate(
    {},
    {
      lean: true,
      page: page,
      limit: limit,
    }
  );
};

const updateVideo = (id, updatedVideo) => {
  const video = Video.findByIdAndUpdate(id, updatedVideo, {
    new: true,
  });
  return video;
};

const getVideoById = (id) => {
  return Video.findById(id).lean();
};

const deleteVideo = (id) => {
  return Video.findByIdAndDelete(id);
};

module.exports = {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
