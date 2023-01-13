import { chatSocketURL } from "common/const";
import { useEffect, useState } from "react";
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
export default function ChatPage() {
  const socket = useSocket(`${chatSocketURL}`);

  const roomId = "Lobby";
  const username = "test";

  useEffect(() => {
    if (socket) {
      socket.emit("join-room", roomId, username);
    }
  }, [socket]);
  return <div></div>;
}
