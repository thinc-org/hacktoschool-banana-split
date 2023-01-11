import { Title } from "@mantine/core";
import Conference from "module/Conference";
import { useRouter } from "next/router";

export default function ConferenceRoomVoiceCall() {
  const router = useRouter();
  const { roomId } = router.query;
  if (!roomId) return <Title order={1}>Loading...</Title>;
  return <Conference roomId={String(roomId)} useVideo={false} />;
}
