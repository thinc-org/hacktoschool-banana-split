import { Title } from "@mantine/core";
import BodyText from "common/components/BodyText";
import { memo } from "react";

export interface MessageProps {
  username: string;
  message: string;
}
function Message(props: MessageProps) {
  const { username, message } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        border: "0.5px solid #bbb",
        borderRadius: "10px",
        padding: "20px",
        gap: "10px"
      }}
    >
      <Title order={4}>{username}</Title>
      <div style={{ paddingLeft: "20px" }}>
        <BodyText>{message}</BodyText>
      </div>
    </div>
  );
}
export default memo(Message);
