import { Image, Text, Button, Title } from "@mantine/core";
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
            gap: "30",
          }}
        >
          <Text size={"xs"}>E-COURSE PLATFORM</Text>

          <Title order={1}>
            Learning and
            <br />
            teaching online,
            <br />
            made easy.
          </Title>

          <Text size={"xs"}>
            Practice your english and learn new things with the platform.
          </Text>

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
            <Text style={{ color: "#2B788B", fontWeight: "700" }}>
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
