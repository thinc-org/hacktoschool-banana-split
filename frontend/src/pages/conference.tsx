import { baseURL } from "common/const";
import { createRef, useEffect, useRef, useState } from "react";
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
interface videoProps {
  id: any;
  stream: any;
}
export default function Conference() {
  const [videos, setVideos] = useState<videoProps[]>([]);

  const setVideoToDiv = () => {
    console.log("set");
    if (videosWrapper.current) {
      videosWrapper.current.innerHTML = "";
      videos.forEach((video: any) => {
        const videoElement = document.createElement("video");
        videoElement.srcObject = video.stream;
        videoElement.autoplay = true;
        videoElement.muted = true;
        videosWrapper.current?.appendChild(videoElement);
      });
    }
  };

  const addVideo = (id: any, stream: any) => {
    setVideos((current: any) => [...current, { id: id, stream: stream }]);
  };

  useEffect(() => {
    setVideoToDiv();
  }, [videos]);

  const socket = useSocket(`http://${baseURL}:8000/`);

  useEffect(() => {
    const roomId = "c4f0ecbf-6ae5-4edd-b84d-d16f1d821496";

    const id = 20;
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

              call.on("stream", (userVideoStream: any) => {
                addVideo(userVideoStream.id, userVideoStream);
                // if (video.current) {
                //   console.log("video");
                //   video.current.srcObject = userVideoStream;
                // }
              });
            });

            socket.on("user-connected", (userId: any) => {
              console.log("videoa", videos);
              console.log("new user connected: " + userId);
              const call = peer.call(userId, stream);
              call.on("stream", (userVideoStream: any) => {
                addVideo(userId, userVideoStream);
              });
              call.on("close", () => {
                // video.current?.remove();
              });
            });

            socket.on("user-disconnected", (userId: any) => {
              console.log("User disconnected: " + userId);
              let newVideos = [...videos];
              newVideos = newVideos.filter((video: any) => video.id !== userId);
              setVideos(newVideos);
            });
          });
      });
    }
  }, [socket]);

  const videosWrapper = useRef<HTMLDivElement>(null);
  console.log(videos);

  return (
    <>
      <div ref={videosWrapper}></div>
      <button
        onClick={() => {
          setVideoToDiv();
          console.log(videos);
        }}
      >
        show videos
      </button>
    </>
  );
}
