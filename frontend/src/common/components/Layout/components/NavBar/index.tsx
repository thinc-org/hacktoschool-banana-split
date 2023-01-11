import { ActionIcon, Box, Image, Loader, NavLink, Title } from "@mantine/core";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";
import { useState } from "react";
import Link from "next/link";
import BodyText from "common/components/BodyText";
import { useAuth } from "common/contexts/AuthContext";

export default function NavBar() {
  const [expand, setExpand] = useState(1);
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1200px)");
  const xsScreen = useMediaQuery("(max-width:700px)");

  const { user, isReady, isAuthenticated } = useAuth();
  return (
    <div
      className={classes.NavBarLayout}
      style={{
        padding: smallScreen
          ? xsScreen
            ? "0px 10px"
            : "0px 50px"
          : "0px 150px"
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
          backgroundColor: "rgba(244, 244, 242,0.85",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
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
            left: "50%",
            transform: "translate(-50%,0%)"
          }}
        >
          <Title order={4}>GlobalTalk</Title>
        </div>
      )}
      <Box
        sx={{
          display: smallScreen ? "none" : "flex",
          width: 80,
          marginLeft: "20px"
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
      {!isReady && (
        <Loader sx={{ marginLeft: "auto" }} color="cyan" size="sm" />
      )}
      {isAuthenticated && (
        <>
          {/* <Title order={6} sx={{ marginLeft: "auto" }}>{user.name}</Title> */}
          <Title order={6} sx={{ marginLeft: "auto" }}>
            {user.role}
          </Title>
          <Box
            sx={{
              display: "flex",
              width: 90
            }}
          >
            <NavLink
              label="Sign Out"
              style={{ textAlign: "center" }}
              onClick={() => {
                localStorage.removeItem("token");
                location.href = "/";
              }}
            ></NavLink>
          </Box>
        </>
      )}
      {isReady && !isAuthenticated && (
        <Link
          href={`/auth`}
          style={{
            // textDecoration: "none",
            color: "black",
            marginLeft: "auto"
          }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Login or Signup
          </BodyText>
        </Link>
      )}
    </div>
  );
}
