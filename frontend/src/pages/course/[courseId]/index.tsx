import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import CourseDetail from "module/CourseDetail";
import { useRouter } from "next/router";

export default function CourseDetailPage() {
  const { user, isReady, isAuthenticated } = useAuth();
  const router = useRouter();
  const { courseId } = router.query;
  if (!courseId || !isReady) return <Title order={1}>Loading...</Title>;
  if (!isAuthenticated)
    return <CourseDetail userId={"unauth"} courseId={String(courseId)} />;
  return <CourseDetail userId={user.userId} courseId={String(courseId)} />;
}
