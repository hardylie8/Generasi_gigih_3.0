const playlist = require("../models/Playlist");

const getAllSongs = (sort, order) => {
  return playlist.getAllSongs(sort, order);
};

const addNewSong = (title, artist, url) => {
  return playlist.addSong(title, artist, url);
};

const playSong = (id, updatedStatus) => {
  song = playlist.getSong(id);
  if (!song) {
    throw new Error("Song Not found.");
  }
  if (song.status === updatedStatus) {
    throw new Error("Cannot update same Status. ");
  }
  if (playlist.status[updatedStatus]) {
    updatedStatus === "playing" && playlist.updatePlayCount(id);
    return playlist.playSong(id, updatedStatus);
  } else {
    throw new Error("Status Not found.");
  }
};

module.exports = { getAllSongs, addNewSong, playSong };
