const PlaylistService = require("../services/PlaylistService");

const getAllSongs = (req, res) => {
  try {
    const { sort, order } = req.query;
    const song = PlaylistService.getAllSongs(sort, order);
    res.status(201).json({
      code: 201,
      message: "Customer has been successfully retrieved",
      data: song,
    });
  } catch (e) {
    res.status(500).json({
      code: 500,
      message: e.message,
      data: {},
    });
  }
};

const addNewSong = (req, res) => {
  try {
    const { title, artist, url } = req.body;
    const playlist = PlaylistService.addNewSong(title, artist, url);
    res.status(201).json({
      code: 201,
      message: "Song has been added successfully",
      data: playlist,
    });
  } catch (e) {
    res.status(500).json({
      code: 500,
      message: e.message,
      data: {},
    });
  }
};

const playSong = (req, res) => {
  try {
    const { status } = req.body;
    const id = req.params.id;
    const playlist = PlaylistService.playSong(id, status);
    res.status(201).json({
      code: 201,
      message: "Song status has been changed successfully",
      data: playlist,
    });
  } catch (e) {
    res.status(500).json({
      code: 500,
      message: e.message,
      data: {},
    });
  }
};

module.exports = { getAllSongs, addNewSong, playSong };
