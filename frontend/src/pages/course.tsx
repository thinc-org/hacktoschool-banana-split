import { Title } from "@mantine/core";
import { BsBook } from "react-icons/bs";
export default function () {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          width: "100vw",
          height: "100%",
          minHeight: "100vh",
          flexDirection: "column",
          backgroundColor: "#F6F5F4",
          paddingTop: "40px"
        }}
      >
        <div
          style={{
            display: "flex",
            height: "84px",
            width: "70%",
            background: "#FFFFFF",
            flexDirection: "row",
            alignItems: "center",
            padding: "22px",
            gap: "12px",
            borderRadius: "14px"
          }}
        >
          <BsBook fontSize={40} />
          <Title order={4}>Course</Title>
        </div>
        <div>test</div>
      </div>
    </>
  );
}
