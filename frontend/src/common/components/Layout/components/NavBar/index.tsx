import { ActionIcon, Box, Image, NavLink, Title } from "@mantine/core";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";
import { useState } from "react";

export default function NavBar() {
  const [expand, setExpand] = useState(1);
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1400px)");
  return (
    <div className={classes.NavBarLayout}>
      <div
        style={{
          display: expand ? "none" : "flex",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "88px",
          backgroundColor: "#F4F4F2",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "5",
        }}
      >
        <Box
          sx={{
            width: 90,
            marginLeft: "20px",
          }}
        >
          <NavLink
            label="Home"
            component="a"
            href="/"
            style={{
              textAlign: "center",
            }}
          ></NavLink>
          <NavLink label="Textbook" style={{ textAlign: "center" }}></NavLink>
          <NavLink label="Statistics" style={{ textAlign: "center" }}></NavLink>
        </Box>
      </div>
      <ActionIcon style={{ display: smallScreen ? "flex" : "none" }}>
        <AiOutlineMenu
          color="black"
          size={25}
          style={{ display: expand ? "flex" : "none" }}
          onClick={() => setExpand(expand ? 0 : 1)}
        ></AiOutlineMenu>
        <AiOutlineClose
          color="black"
          size={25}
          style={{ display: !expand ? "flex" : "none" }}
          onClick={() => setExpand(1)}
        />
      </ActionIcon>
      <div>
        <Title order={3}>GlobalTalk</Title>
      </div>
      <Box
        sx={{
          display: smallScreen ? "none" : "flex",
          width: 90,
          marginLeft: "20px",
        }}
      >
        <NavLink
          label="Home"
          component="a"
          href="/"
          target="_blank"
          style={{
            textAlign: "center",
          }}
        ></NavLink>
      </Box>
      <Box sx={{ display: smallScreen ? "none" : "flex", width: 90 }}>
        <NavLink label="Textbook" style={{ textAlign: "center" }}></NavLink>
      </Box>
      <Box sx={{ display: smallScreen ? "none" : "flex", width: 90 }}>
        <NavLink label="Statistics" style={{ textAlign: "center" }}></NavLink>
      </Box>
      {/* <Box
        sx={{
          display: smallScreen ? "none" : "flex",
          width: 120,
        }}
      >
        <NavLink
          label="Games"
          childrenOffset={28}
          style={{ textAlign: "center" }}
        >
          <NavLink label="test1" />
          <NavLink label="test2" />
        </NavLink>
      </Box> */}
      <></>
      <Box
        sx={{
          display: "flex",
          width: 90,
          marginLeft: "auto",
          marginRight: "100px",
        }}
      >
        <NavLink label="Sign Out" style={{ textAlign: "center" }}></NavLink>
      </Box>
    </div>
  );
}
