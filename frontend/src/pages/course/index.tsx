import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import Course from "module/Course";

export default function CoursePage() {
  const { user, isReady, isAuthenticated } = useAuth();
  if (!isReady) return <Title order={1}>Loading...</Title>;
  if (isReady && !isAuthenticated) return <Course userId={"unauth"} />;
  return <Course userId={user.userId} />;
}
