import { Box, Image, NavLink } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
export default function Footer() {
  const smallScreen = useMediaQuery("(max-width:1400px)");
  return (
    <div
      style={{
        display: "flex",
        height: "88px",
        width: "100%",
        backgroundColor: "#F6F5F4",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px"
      }}
    >
      {/* <Box sx={{ width: 90 }}>
        <NavLink label="Textbook" style={{ textAlign: "center" }}></NavLink>
      </Box>
      <Box sx={{ width: 90 }}>
        <NavLink label="Statistics" style={{ textAlign: "center" }}></NavLink>
      </Box> */}

      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          overflow: "hidden",
          marginLeft: "20px"
        }}
      >
        <Image src="/Layout/thinc-logo.png" alt="thinc-logo" />
      </div>

      <Box sx={{ width: smallScreen ? 90 : 190 }}>
        <NavLink
          label="Banana Split Team"
          component="a"
          href="/"
          style={{
            textAlign: "center"
          }}
        ></NavLink>
      </Box>
      <div style={{ width: "30px", height: "30px", marginLeft: "20px" }}>
        <Image src="/Layout/cleverse-logo.png" alt="cleverse-logo" />
      </div>
    </div>
  );
}
