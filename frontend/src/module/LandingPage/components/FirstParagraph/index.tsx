import { Image, Text, Button, Title } from "@mantine/core";
import BodyText from "common/components/BodyText";
import { useStyles } from "./styles";
export default function LandingPage() {
  const { classes } = useStyles();
  return (
    <div className={classes.FirstContainer}>
      <div
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ paddingLeft: "240px" }}>
          <div>
            <BodyText size="sm" color="#2B788B">
              E-COURSE PLATFORM
            </BodyText>
          </div>

          <div style={{ marginTop: "24px" }}>
            <Title order={1}>
              Learning and
              <br />
              teaching online,
              <br />
              made easy.
            </Title>
          </div>

          <div style={{ marginTop: "30px" }}>
            <BodyText size="sm" color="#757575">
              Practice your english and learn new things
              <br /> with the platform.
            </BodyText>
          </div>

          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              width: "165",
              height: "44",
              background: "#C3DCE3",
              borderRadius: "100px",
              marginTop: "32px",
            }}
          >
            <Text size={"xs"} color="#2B788B" style={{ fontWeight: "700" }}>
              About platform
            </Text>
          </Button>
        </div>
      </div>

      <Image
        width={"933px"}
        height={"620px"}
        src="/LandingPage/man-and-trees.png"
      ></Image>
    </div>
  );
}
