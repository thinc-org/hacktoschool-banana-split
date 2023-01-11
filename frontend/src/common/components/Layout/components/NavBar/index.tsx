import { ActionIcon, Box, Image, NavLink, Title } from "@mantine/core";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";
import { useState } from "react";
import Link from "next/link";
import BodyText from "common/components/BodyText";

export default function NavBar() {
  const [expand, setExpand] = useState(1);
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1200px)");
  const xsScreen = useMediaQuery("(max-width:700px)");
  return (
    <div
      className={classes.NavBarLayout}
      style={{
        padding: smallScreen
          ? xsScreen
            ? "0px 10px"
            : "0px 50px"
          : "0px 150px",
      }}
    >
      <div
        style={{
          display: expand ? "none" : "flex",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "88px",
          backgroundColor: "#F4F4F2",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          href={`/`}
          onClick={() => setExpand(1)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Home
          </BodyText>
        </Link>
        <Link
          href={`/course`}
          onClick={() => setExpand(1)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Course
          </BodyText>
        </Link>
        <Link
          href={`/conference/Lobby`}
          onClick={() => setExpand(1)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Conference
          </BodyText>
        </Link>
      </div>
      <ActionIcon
        style={{ display: smallScreen ? "flex" : "none", marginLeft: "10px" }}
      >
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
      {!smallScreen && (
        <div>
          <Title order={3}>GlobalTalk</Title>
        </div>
      )}
      {smallScreen && (
        <div
          style={{
            position: "absolute",
            left: "52.5%",
            transform: "translate(-50%,0%)",
          }}
        >
          <Title order={4}>GlobalTalk</Title>
        </div>
      )}
      <Box
        sx={{
          display: smallScreen ? "none" : "flex",
          width: 80,
          marginLeft: "20px",
        }}
      >
        <Link href={`/`} style={{ textDecoration: "none", color: "black" }}>
          <BodyText size="14px" color="#7B7B7B">
            Home
          </BodyText>
        </Link>
      </Box>
      <Box sx={{ display: smallScreen ? "none" : "flex", width: 80 }}>
        <Link
          href={`/course`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="12px" color="#7B7B7B">
            Course
          </BodyText>
        </Link>
      </Box>
      <Box sx={{ display: smallScreen ? "none" : "flex", width: 80 }}>
        <Link
          href={`/conference/Lobby`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Conference
          </BodyText>
        </Link>
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
        }}
      >
        <NavLink label="Sign Out" style={{ textAlign: "center" }}></NavLink>
      </Box>
    </div>
  );
}
