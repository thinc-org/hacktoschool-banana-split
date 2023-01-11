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
  videoElement: any,
  videosWrapper: any,
  userVideoStream: any,
  videoElementWraper: any
) {
  videoElement.style.width = "270px";
  videoElementWraper.style.width = "270px";
  videoElementWraper.style.borderRadius = "15px";
  videoElementWraper.style.height = "180px";
  videoElementWraper.style.display = "block";
  videoElementWraper.style.overflow = "hidden";
  // videoElementWraper.style.border = "1px solid #777";
  videoElementWraper.style.marginLeft = "auto";
  videoElementWraper.style.marginRight = "auto";
  videoElement.srcObject = userVideoStream;
  videoElement.autoplay = true;
  videoElementWraper.appendChild(videoElement);
  videosWrapper.current?.appendChild(videoElementWraper);
}
interface ConferenceProps {
  roomId: string;
}
export default function Conference(props: ConferenceProps) {
  const { roomId } = props;
  console.log("id", roomId);
  const peers: any = {};
  const streams: any = {};
  const videos: any = {};

  const video = useRef<any>(null);
  const socket = useSocket(socketURL);

  useEffect(() => {
    if (socket) {
      import("peerjs").then(({ default: Peer }) => {
        const peer = new Peer();
        peer.on("open", (id) => {
          console.log("join", roomId);
          socket.emit("join-room", roomId, id);
        });

        navigator.mediaDevices
          .getUserMedia({
            video: true,
            audio: true
          })
          .then((stream) => {
            video.current.srcObject = stream;
            peer.on("call", (call) => {
              call.answer(stream);
              const videoElementWraper = document.createElement("div");
              const videoElement = document.createElement("video");
              call.on("stream", (userVideoStream: any) => {
                addVideo(
                  videoElement,
                  videosWrapper,
                  userVideoStream,
                  videoElementWraper
                );
                peers[userVideoStream.id] = call;
                videos[userVideoStream.id] = videoElementWraper;

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
                  videoElement,
                  videosWrapper,
                  userVideoStream,
                  videoElementWraper
                );
              });
              call.on("close", () => {
                // console.log("close");
                videoElementWraper.remove();
              });
              peers[userId] = call;
              videos[userId] = videoElementWraper;
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
          { maxWidth: 1270, cols: 3, spacing: "xs" },
          { maxWidth: 1000, cols: 2, spacing: "xs" },
          { maxWidth: 700, cols: 1, spacing: "xs" }
        ]}
        ref={videosWrapper}
        sx={{ alignItems: "center", padding: "50px" }}
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
          borderRadius: "15px"
          // border: "1px solid #000"
        }}
      >
        <video ref={video} style={{ width: "270px" }} autoPlay muted />
      </div>
    </>
  );
}
