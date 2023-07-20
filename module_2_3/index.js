const express = require("express");
const playlistRoute = require("./routes/PlaylistRoute");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/playlist", playlistRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
