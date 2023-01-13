import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import CourseMember from "module/CourseMember";
import { useRouter } from "next/router";

export default function CourseDetailPage() {
  const { user, isReady, isAuthenticated } = useAuth();
  const router = useRouter();
  const { courseId } = router.query;
  if (!courseId || !isReady) return <Title order={1}>Loading...</Title>;
  if (!isAuthenticated)
    return <Title order={1}>You need to login to access this page</Title>;
  return <CourseMember userId={user.userId} courseId={String(courseId)} />;
}
