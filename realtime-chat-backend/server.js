const express = require("express");
var cors = require("cors");
const app = express();
const { v4: uuidV4 } = require("uuid");

app.use(
  cors({
    origin: "*"
  })
);

const server = require("http").Server(app);
server.cors = "*";
const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
});

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
  console.log("try connect");
  socket.on("join-room", (roomId, username) => {
    console.log(username, " connect");
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", username);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", username);
    });
    socket.on("send-chat-message", (username, message) => {
      console.log("send-chat-message", username, message);
      socket.to(roomId).emit("send-chat-message", username, message);
    });
  });
});

console.log("server start on port 9000");
server.listen(9000);
