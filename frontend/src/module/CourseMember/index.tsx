import { Button, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import BodyText from "common/components/BodyText";
import { baseApiURL } from "common/const";
import Chat from "module/Chat";
import { CourseCardProps } from "module/Course/components/CourseCard";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CourseMemberProps {
  userId: string;
  courseId: string;
}
export default function CourseMember(props: CourseMemberProps) {
  const { userId, courseId } = props;
  const [course, setCourse] = useState<CourseCardProps>();

  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");

  useEffect(() => {
    async function fetchCourse() {
      const res = await axios.get(`${baseApiURL}/course/${courseId}`);
      const newCourse = {
        title: res.data.title,
        desc: res.data.description,
        teacherName: res.data.instructor.name,
        courseId: res.data.id
      };
      setCourse(newCourse);
    }
    if (userId && courseId) fetchCourse();
  }, [userId, courseId]);

  return (
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
          width: "90%",
          height: "100%",
          background: "#FFFFFF",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          gap: "12px",
          borderRadius: "14px",
          position: "relative",
          textAlign: "center",
          paddingBottom: "70px"
        }}
      >
        <Title order={4}>{course?.title}</Title>
        <div style={{ display: "flex", paddingLeft: "20px" }}>
          <BodyText>{course?.desc}</BodyText>
        </div>
        <div
          style={{
            display: "flex",
            // position: "absolute",
            // bottom: "20px",
            // right: "20px",
            gap: "10px"
          }}
        >
          <Button
            sx={{
              width: "100px",
              borderRadius: "20px",
              backgroundColor: "#2B788B",
              "&:hover": {
                backgroundColor: "#58735D"
              },
              marginTop: "10px"
            }}
            size="xs"
          >
            <Link
              href={`/conference/${courseId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <BodyText size="12px" color="white">
                Video Call
              </BodyText>
            </Link>
          </Button>
          <Button
            sx={{
              width: "100px",
              borderRadius: "20px",
              backgroundColor: "#2B788B",
              "&:hover": {
                backgroundColor: "#58735D"
              },
              marginTop: "10px"
            }}
            size="xs"
          >
            <Link
              href={`/conference/voice/${courseId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <BodyText size="12px" color="white">
                Voice Call
              </BodyText>
            </Link>
          </Button>

          <Button
            sx={{
              width: "170px",
              borderRadius: "20px",
              backgroundColor: "#2B788B",
              "&:hover": {
                backgroundColor: "#58735D"
              },
              marginTop: "10px",
              position: "absolute",
              bottom: "20px",
              right: "20px"
            }}
            size="xs"
          >
            <Link
              href={`/chat/${courseId}/${userId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <BodyText size="12px" color="white">
                Chat with Instructor
              </BodyText>
            </Link>
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          height: "100%",
          width: "100%"
        }}
      >
        <Chat roomId={courseId} />
      </div>
    </div>
  );
}
