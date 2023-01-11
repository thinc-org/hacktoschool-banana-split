import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import BodyText from "common/components/BodyText";
import { useStyles } from "./styles";
export default function ForthParagraph() {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1400px)");
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
        <div style={{ maxWidth: "580px", maxHeight: "474px" }}>
          <Image src="/LandingPage/together.png"></Image>
        </div>
        <div style={{ textAlign: smallScreen ? "center" : "justify" }}>
          <div>
            <Title>
              Watch your
              <br /> progress every
              <br /> day
            </Title>
          </div>
          <div style={{ marginTop: "30px" }}>
            <BodyText size="sm" color="#757575">
              Save statistics on your achievements, words
              <br /> learned, and mistakes
            </BodyText>
          </div>
          <MediaQuery smallerThan="xl" styles={{ marginLeft: "auto" }}>
            <Button className={classes.ButtonStyle}>
              <Text size={"xs"} color="#2B788B" style={{ fontWeight: "700" }}>
                Statistics
              </Text>
            </Button>
          </MediaQuery>
        </div>
      </div>
    </MediaQuery>
  );
}