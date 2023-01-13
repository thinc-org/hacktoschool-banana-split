import { ActionIcon, TextInput } from "@mantine/core";
import axios from "axios";
import { baseApiURL } from "common/const";
import { useState } from "react";
import { TbSend } from "react-icons/tb";

interface InputMessageProps {
  show: boolean;
  sendMessage: Function;
  roomId: string;
  authorId: string;
}
export default function InputMessage(props: InputMessageProps) {
  const { show, sendMessage, roomId, authorId } = props;
  const [message, setMessage] = useState("");
  async function handleNewStatus() {
    if (message == "") return;
    await sendMessage(message);
    setMessage("");
    try {
      const res = await axios.post(`${baseApiURL}/message`, {
        roomId: Number(roomId),
        authorId: Number(authorId),
        content: message
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleNewStatus();
      }}
      style={{ display: "flex", width: "100%" }}
    >
      <TextInput
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        placeholder="add text"
        radius="lg"
        style={{
          display: show ? "block" : "none",
          height: "33px",
          width: "100%"
        }}
        sx={{
          ".mantine-TextInput-label": {
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "155%",
            color: "black"
          },
          ".mantine-TextInput-input": {
            // fontWeight: 600,
            // fontSize: "12px",
            // lineHeight: "155%",
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0)",

            width: "100%",
            height: "30px"
          },
          ".mantine-TextInput-root": {
            color: "black"
          },
          "	.mantine-TextInput-wrapper": {
            width: "100%"
          }
        }}
        rightSection={
          <ActionIcon
            onClick={handleNewStatus}
            size="lg"
            radius="md"
            style={{
              // display: status == "JOINED" ? "flex" : "none",
              marginBottom: "4px",
              marginTop: "5px",
              marginRight: "5px",
              color: "black"
            }}
          >
            <TbSend size={20} />
          </ActionIcon>
        }
      />
    </form>
  );
}
