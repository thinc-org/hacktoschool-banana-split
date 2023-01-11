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
        boxShadow: "inset 0px -1px 0px #E0E0E0"
      }}
    >
      <Title order={3}>GlobalTalk</Title>
      <Box sx={{ width: 90, paddingLeft: "20px" }}>
        {/* <NavLink
          label="Home"
          component="a"
          href="/conference/Lobby"
          target="_self"
          style={{ textAlign: "center" }}
        /> */}

        <Link href="/">Home</Link>
      </Box>
      <Box sx={{ width: 90 }}>
        <Link href="/conference/Lobby">Conference</Link>
      </Box>
      <Box sx={{ width: 90 }}>
        <Link href="/auth">Login</Link>
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
