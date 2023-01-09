import { Text } from "@mantine/core";

export default function BodyText({ children, size = "md", weight = "600" }) {
  return (
    <Text size={size} weight={weight}>
      {children}
    </Text>
  );
}
