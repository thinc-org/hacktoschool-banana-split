import { Image, Text, Button, Title } from "@mantine/core";
import BodyText from "common/components/BodyText";
export default function LandingPage() {
  return (
    <div style={{ flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "740",
          alignSelf: "stretch",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#F6F5F4",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px",
          }}
        >
          <BodyText size="sm">E-COURSE PLATFORM</BodyText>

          <Title order={1}>
            Learning and
            <br />
            teaching online,
            <br />
            made easy.
          </Title>

          <BodyText size="sm">
            Practice your english and learn new things
            <br /> with the platform.
          </BodyText>

          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              width: "165",
              height: "44",
              background: "#C3DCE3",
              borderRadius: "100px",
            }}
          >
            <Text size={"xs"} color="#2B788B" style={{ fontWeight: "700" }}>
              About platform
            </Text>
          </Button>
        </div>

        <Image
          width={358.405}
          height={436}
          src="https://www.graphicpie.com/wp-content/uploads/2020/11/red-among-us-png.png"
        ></Image>
      </div>
      <div style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}
