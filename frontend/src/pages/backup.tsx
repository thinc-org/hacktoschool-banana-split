import { SimpleGrid } from "@mantine/core";
import { socketURL } from "common/const";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

function useSocket(url: string) {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, []);

  return socket;
}
function addVideo(
  videoElementWraper: any,
  videoElement: any,
  videosWrapper: any,
  userVideoStream: any
) {
  console.log("addVideo", userVideoStream.id);
  videoElementWraper.style.width = "270px";
  videoElementWraper.style.height = "180px";
  videoElementWraper.style.display = "block";
  videoElementWraper.style.overflow = "hidden";
  videoElementWraper.style.objectFit = "cover";
  videoElementWraper.style.position = "fixed";
  videoElementWraper.style.bottom = "20px";
  videoElementWraper.style.right = "20px";
  videoElementWraper.style.border = "1px solid #000";
  videoElement.srcObject = userVideoStream;
  videoElement.autoplay = true;

  videoElementWraper.appendChild(videoElement);
  videosWrapper.current.appendChild(videoElementWraper);
}
export default function Conference() {
  const peers: any = {};
  const streams: any = {};
  const videos: any = {};

  const video = useRef<any>(null);
  const socket = useSocket(socketURL);

  useEffect(() => {
    const roomId = "c4f0ecbf-6ae5-4edd-b84d-d16f1d821496";

    if (socket) {
      import("peerjs").then(({ default: Peer }) => {
        const peer = new Peer();
        peer.on("open", (id) => {
          socket.emit("join-room", roomId, id);
        });

        navigator.mediaDevices
          .getUserMedia({
            video: true,
            audio: false
          })
          .then((stream) => {
            video.current.srcObject = stream;
            peer.on("call", (call) => {
              call.answer(stream);

              const videoElementWraper = document.createElement("div");
              const videoElement = document.createElement("video");
              call.on("stream", (userVideoStream: any) => {
                addVideo(
                  videoElementWraper,
                  videoElement,
                  videosWrapper,
                  userVideoStream
                );
                peers[userVideoStream.id] = call;
                videos[userVideoStream.id] = videoElement;

                // console.log("peer: (stream)", userVideoStream.id);
              });
            });

            socket.on("user-connected", (userId: any) => {
              socket.emit("userid-of-stream", peer.id, stream.id);

              console.log("new user connected: " + userId);
              const call = peer.call(userId, stream);

              const videoElementWraper = document.createElement("div");
              const videoElement = document.createElement("video");
              call.on("stream", (userVideoStream: any) => {
                addVideo(
                  videoElementWraper,
                  videoElement,
                  videosWrapper,
                  userVideoStream
                );
              });
              call.on("close", () => {
                // console.log("close");
                videoElement.remove();
              });

              peers[userId] = call;
              videos[userId] = videoElement;
              // console.log("peer: (userId)", userId);
            });

            socket.on("user-disconnected", (userId: any) => {
              // console.log("User disconnected: " + userId);
              // console.log("peer", peers);
              // console.log("streams", streams);
              if (peers[userId]) peers[userId].close();
              else {
                let check = false;
                for (let key in streams) {
                  console.log(key, userId, key === userId);
                  if (key === userId) {
                    for (let callId in peers) {
                      console.log(
                        "inner ",
                        streams[key],
                        callId,
                        streams[key] === callId
                      );
                      if (streams[key] == callId) {
                        console.log("found");
                        if (peers[callId]) {
                          peers[callId].close();
                          videos[callId].remove();
                          delete peers[callId];
                          delete videos[callId];
                        }
                        check = true;
                        break;
                      }
                    }
                    if (check) break;
                  }
                }
              }
            });

            socket.on("userid-of-stream", (userId: any, streamId: any) => {
              // console.log("userid-of-stream: " + userId + " " + streamId);
              streams[userId] = streamId;
            });
          });
      });
    }
  }, [socket]);

  const videosWrapper = useRef<any>(null);

  return (
    <>
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" }
        ]}
        ref={videosWrapper}
      ></SimpleGrid>
      <div
        style={{
          width: "270px",
          height: "180px",
          display: "block",
          overflow: "hidden",
          objectFit: "cover",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          border: "1px solid #000"
        }}
      >
        <video ref={video} style={{ width: "270px" }} autoPlay />
      </div>
    </>
  );
}
