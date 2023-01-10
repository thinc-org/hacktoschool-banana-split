import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import BodyText from "common/components/BodyText";
import { useStyles } from "./styles";
export default function FirstParagraph() {
  const { classes } = useStyles();
  return (
    <MediaQuery
      smallerThan="xl"
      styles={{
        flexDirection: "column",
        width: "100%",
        height: "1000px",
        gap: "30px",
        alignContent: "center",
      }}
    >
      <div className={classes.FirstContainer}>
        <div
          style={{
            minWidth: "550px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div style={{}}>
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

            <Button className={classes.ButtonStyle}>
              <Text size={"xs"} color="#2B788B" style={{ fontWeight: "700" }}>
                About platform
              </Text>
            </Button>
          </div>
        </div>
        <div
          style={{
            maxWidth: "822px",
            maxHeight: "620px",
            padding: "20px",
          }}
        >
          <Image
            // width={"933px"}
            // height={"620px"}
            style={{ marginRight: "-150px" }}
            src="/LandingPage/man-and-trees.png"
          ></Image>
        </div>
      </div>
    </MediaQuery>
  );
}
