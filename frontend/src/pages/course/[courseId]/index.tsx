import { Title } from "@mantine/core";
import CourseDetail from "module/CourseDetail";
import { useRouter } from "next/router";

export default function CourseDetailPage() {
  const router = useRouter();
  const { courseId } = router.query;
  if (!courseId) return <Title order={1}>Loading...</Title>;
  return <CourseDetail courseId={String(courseId)} />;
}
