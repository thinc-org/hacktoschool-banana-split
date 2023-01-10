import { io } from "socket.io-client";
import { memo, useEffect, useRef, useState } from "react";
import { baseURL } from "common/const";

function addVideoStream(video: any, stream: any) {
  video.current.srcObject = stream;
  video.current.addEventListener("loadedmetadata", () => {});
}
function connectToNewUser(userId: any, stream: any, peer: any, video: any) {
  const call = peer.call(userId, stream);
  // const video = document.createElement("video");
  call.on("stream", (userVideoStream: any) => {
    addVideoStream(video, userVideoStream);
  });
  call.on("close", () => {
    video.remove();
  });
}
function testConference() {
  const [userId, setUserId] = useState("");

  const videos = useRef<HTMLVideoElement>(null);
  const videos2 = useRef<HTMLVideoElement>(null);
  const videosContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (userId == "") {
      const roomId = "c4f0ecbf-6ae5-4edd-b84d-d16f1d821496";
      const socket = io(`http://${baseURL}:8000/`);
      import("peerjs").then(({ default: Peer }) => {
        const peer = new Peer();
        peer.on("open", (id) => {
          socket.emit("join-room", roomId, id);
          setUserId(id);
        });

        navigator.mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((stream) => {
            peer.on("call", (call) => {
              call.answer(stream);
            });
            socket.on("user-connected", (userId) => {
              console.log(socket);
              console.log("new user connected: " + userId);
              connectToNewUser(userId, stream, peer, videos2);
            });
            socket.on("user-disconnected", (userId) => {
              console.log("User disconnected: " + userId);
            });
            addVideoStream(videos, stream);
          });
      });
    }
  }, []);
  return (
    <>
      <div ref={videosContainer}>
        <video ref={videos} autoPlay></video>
        <video ref={videos2} autoPlay></video>
      </div>
    </>
  );
}
export default memo(testConference);
