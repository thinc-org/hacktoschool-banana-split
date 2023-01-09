import { Image } from "@mantine/core";
export default function LandingPage() {
  return (
    <div style={{ flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#D6D6D6",
        }}
      >
        <h6>E-COURSE PLATFORM</h6>
        <h1>Learning and teaching online, made easy.</h1>
        <p>Practice your english and learn new things with the platform.</p>
        <button
          style={{
            backgroundColor: "#CCF6FF",
          }}
          type="button"
        >
          About platform
        </button>
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
