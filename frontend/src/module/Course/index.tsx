import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import { baseApiURL } from "common/const";
import { useEffect, useState } from "react";
import { BsBook } from "react-icons/bs";
import CourseCard, { CourseCardProps } from "./components/CourseCard";

interface CourseProps {
  userId: string;
}

export default function Course(props: CourseProps) {
  const { userId } = props;
  const [courses, setCourses] = useState<CourseCardProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const res = await axios.get(
        `${baseApiURL}/course${userId == "unauth" ? "" : "?id=" + userId}`
      );
      const newCourse = res.data.map((course: any) => {
        const { title, description, instructor, id, enrolled } = course;
        return {
          title: title,
          desc: description,
          teacherName: instructor.name,
          courseId: id,
          enrolled: enrolled
        };
      });
      setCourses(newCourse);
    }
    fetchMessages();
  }, [userId]);
  console.log("course with enroll", courses);

  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          width: "100vw",
          height: "100%",
          minHeight: "100vh",
          flexDirection: "column",
          backgroundColor: "#F6F5F4",
          paddingTop: smallScreen ? "20px" : "40px"
        }}
      >
        <div
          style={{
            display: "flex",
            height: "84px",
            width: "80%",
            background: "#FFFFFF",
            flexDirection: "row",
            alignItems: "center",
            padding: "22px",
            gap: "12px",
            borderRadius: "14px"
          }}
        >
          <BsBook fontSize={40} />
          <Title order={4}>Course</Title>
        </div>
        <div
          style={{
            width: xsScreen ? "80%" : "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            gap: "10px"
          }}
        >
          {courses.map((course) => {
            return (
              <CourseCard
                title={course.title}
                desc={course.desc}
                teacherName={course.teacherName}
                courseId={course.courseId}
                key={course.courseId}
                enrolled={course.enrolled}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
