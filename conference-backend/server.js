const express = require("express");
var cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

const server = require("http").Server(app);
server.cors = "*";
const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
});
const { v4: uuidV4 } = require("uuid");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.redirect(`/${uuidV4()}`);
  res.send("Hello");
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  // console.log("try connect");
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

console.log("server start on port 8000");
server.listen(8000);
