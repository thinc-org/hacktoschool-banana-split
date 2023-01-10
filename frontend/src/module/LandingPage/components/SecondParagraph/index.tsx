import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import BodyText from "common/components/BodyText";
import { useStyles } from "./styles";

export default function SecondParagraph() {
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
        <div style={{ maxWidth: "580px", maxHeight: "445px" }}>
          <Image src="/LandingPage/teaching.png"></Image>
        </div>

        <div>
          <div>
            <Title>
              Learn a language
              <br /> in a playful way
            </Title>
          </div>
          <div style={{ marginTop: "30px" }}>
            <BodyText size="sm" color="#757575">
              Make learning words more fun with mini-games
            </BodyText>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
}
