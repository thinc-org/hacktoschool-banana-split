import { Box, NavLink, Title } from "@mantine/core";
import BodyText from "common/components/BodyText";
import Link from "next/link";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        height: "88px",
        width: "100%",
        backgroundColor: "#F6F5F4",
        flexDirection: "row",

        // justifyContent: "center",
        paddingLeft: "200px",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Title order={3}>GlobalTalk</Title>
      <Box sx={{ width: 90, paddingLeft: "20px" }}>
        <NavLink
          label="Home"
          component="a"
          href="/home"
          target="_blank"
          style={{ textAlign: "center" }}
        ></NavLink>
      </Box>
      <Box sx={{ width: 90 }}>
        <NavLink label="Textbook" style={{ textAlign: "center" }}></NavLink>
      </Box>
      <Box sx={{ width: 90 }}>
        <NavLink label="Statistics" style={{ textAlign: "center" }}></NavLink>
      </Box>
      <Box sx={{ width: 90 }}>
        <NavLink
          label="Games"
          childrenOffset={28}
          style={{ textAlign: "center" }}
        >
          <NavLink label="test1" />
          <NavLink label="test2" />
        </NavLink>
      </Box>
    </div>
  );
}
