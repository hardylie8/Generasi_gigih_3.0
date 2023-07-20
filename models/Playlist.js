const { v4: uuidv4 } = require("uuid");
let songs = [
  {
    songId: 1,
    uuid: uuidv4(),
    artist: ["John Doe", "John Doe 2"],
    url: "Google.com",
    play_count: 10,
    status: "playing",
  },
];

const status = {
  queued: "queued",
  playing: "playing",
};

const getAllSongs = (sort, order) => {
  if (sort === "play_count") {
    if (order === "asc") {
      return songs.sort((a, b) => a.play_count - b.play_count);
    } else {
      return songs.sort((a, b) => b.play_count - a.play_count);
    }
  }
  return songs;
};

const getSong = (songId) => {
  return songs.find((c) => c.songId == songId);
};

const addSong = (title, artist, url) => {
  let newSong = {
    songId: generateSongId(),
    uuid: uuidv4(),
    title: title,
    artist: artist,
    url: url,
    play_count: 0,
    status: status.queued,
  };
  songs.push(newSong);
  return newSong;
};

const generateSongId = () => {
  const max = songs.reduce(function (prev, current) {
    return prev.y > current.y ? prev : current;
  });
  return max.songId + 1;
};

const playSong = (songId, updatedStatus) => {
  songs.map((song) => {
    if (song.songId == songId) {
      song.status = updatedStatus;
    } else {
      song.status = status.queued;
    }
  });
  return songs;
};

const updatePlayCount = (songId) => {
  songs.map((song) => {
    if (song.songId == songId) {
      song.play_count++;
    }
  });
};

module.exports = {
  getAllSongs,
  getSong,
  addSong,
  status,
  playSong,
  updatePlayCount,
};
