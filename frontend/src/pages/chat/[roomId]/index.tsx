import { Title } from "@mantine/core";
import { useRouter } from "next/router";
import Chat from "module/Chat";

export default function ChatPage() {
  const router = useRouter();
  const { roomId } = router.query;
  if (!roomId) return <Title order={1}>Loading...</Title>;
  return <Chat roomId={String(roomId)} />;
}
