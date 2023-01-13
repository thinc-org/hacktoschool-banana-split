import { Title } from "@mantine/core";
import { useRouter } from "next/router";
import Chat from "module/Chat";

export default function ChatPage2() {
  console.log("test");
  const router = useRouter();
  const { roomId, studentId } = router.query;
  if (!roomId || !studentId) return <Title order={1}>Loading...</Title>;
  return <Chat roomId={String(roomId + "with" + String(studentId))} />;
}
