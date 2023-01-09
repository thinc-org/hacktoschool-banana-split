import { Image, Text, Button, Title } from "@mantine/core";
export default function LandingPage() {
  return (
    <div style={{ flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#D6D6D6",
        }}
      >
        <Text size={"xs"}>E-COURSE PLATFORM</Text>
        <Title order={1}>Learning and teaching online, made easy.</Title>
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
          type="button"
        >
          <Text style={{ color: "#2B788B", fontWeight: "700" }}>
            About platform
          </Text>
        </Button>
        <Image
          width={358.405}
          height={436}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.graphicpie.com%2Famong-us-png-free%2F&psig=AOvVaw3fWetAB4_o72qLl0eEK5X3&ust=1673336831175000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDIu6z_ufwCFQAAAAAdAAAAABAD"
        ></Image>
      </div>
      <div style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}
