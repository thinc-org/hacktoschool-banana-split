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
export default function Conference() {
  const peers: any = {};
  const streams: any = {};
  const videos: any = {};
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
            peer.on("call", (call) => {
              call.answer(stream);

              const videoElement = document.createElement("video");
              call.on("stream", (userVideoStream: any) => {
                videoElement.srcObject = userVideoStream;
                videoElement.autoplay = true;
                // videoElement.muted = true;
                videosWrapper.current?.appendChild(videoElement);
                peers[userVideoStream.id] = call;
                videos[userVideoStream.id] = videoElement;

                console.log("peer: (stream)", userVideoStream.id);
              });
            });

            socket.on("user-connected", (userId: any) => {
              socket.emit("userid-of-stream", peer.id, stream.id);

              console.log("new user connected: " + userId);
              const call = peer.call(userId, stream);

              const videoElement = document.createElement("video");
              call.on("stream", (userVideoStream: any) => {
                videoElement.srcObject = userVideoStream;
                videoElement.autoplay = true;
                // videoElement.muted = true;
              });
              call.on("close", () => {
                console.log("close");
                videoElement.remove();
              });
              videosWrapper.current?.appendChild(videoElement);
              peers[userId] = call;
              videos[userId] = videoElement;
              console.log("peer: (userId)", userId);
            });

            socket.on("user-disconnected", (userId: any) => {
              console.log("User disconnected: " + userId);
              console.log("peer", peers);
              console.log("streams", streams);
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
              console.log("userid-of-stream: " + userId + " " + streamId);
              streams[userId] = streamId;
            });
          });
      });
    }
  }, [socket]);

  const videosWrapper = useRef<HTMLDivElement>(null);
  console.log(streams);

  return (
    <>
      <div ref={videosWrapper}></div>
    </>
  );
}
