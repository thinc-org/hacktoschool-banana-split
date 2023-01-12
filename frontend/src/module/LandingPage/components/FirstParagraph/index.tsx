import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import BodyText from "common/components/BodyText";
import Link from "next/link";
import { useStyles } from "./styles";
export default function FirstParagraph() {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");
  return (
    <MediaQuery
      smallerThan="xl"
      styles={{
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "1000px",
        gap: "30px"
      }}
    >
      <div className={classes.FirstContainer}>
        <div
          style={{
            minWidth: "550px",
            textAlign: smallScreen ? "center" : "justify",
            justifyContent: smallScreen ? "center" : "justify",
            padding: "50px"
          }}
        >
          <div>
            <BodyText size="sm" color="#2B788B">
              E-COURSE PLATFORM
            </BodyText>
          </div>

          <div
            style={{
              marginTop: "24px",
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <Title order={1}>
              Learning and
              <br />
              teaching online,
              <br />
              made easy.
            </Title>
          </div>
          <div
            style={{
              marginTop: "30px",
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <BodyText size="sm" color="#757575">
              Practice your english and learn new things
              <br /> with the platform.
            </BodyText>
          </div>
          <MediaQuery
            smallerThan="xl"
            styles={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Button className={classes.ButtonStyle}>
              <Link
                href={`/course`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Text
                  size={"xs"}
                  color="#2B788B"
                  style={{
                    fontWeight: "700"
                  }}
                >
                  Explore course
                </Text>
              </Link>
            </Button>
          </MediaQuery>
        </div>
        <div
          style={{
            maxWidth: "822px",
            maxHeight: "620px",
            padding: "20px"
          }}
        >
          <Image
            style={{ marginRight: "-150px" }}
            src="/LandingPage/man-and-trees.png"
          ></Image>
        </div>
      </div>
    </MediaQuery>
  );
}
