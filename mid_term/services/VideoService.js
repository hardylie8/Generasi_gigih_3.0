const Video = require("../models/Video");

const createVideo = (req) => {
  const newVideo = new Video({
    title: req.body.title,
    thumbnailUrl: req.body.thumbnailUrl,
    embeddedComponent: req.body.embeddedComponent,
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

const updateVideo = (req) => {
  const updatedVideo = Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return updatedVideo;
};

const getVideoById = (req) => {
  const id = req.params.id;
  return Video.findById(id).lean();
};

const deleteVideo = (req) => {
  const id = req.params.id;
  return Video.findByIdAndDelete(id);
};

module.exports = {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
