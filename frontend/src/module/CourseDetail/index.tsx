import { Button, Title } from "@mantine/core";
import BodyText from "common/components/BodyText";
import Link from "next/link";
import { useState } from "react";
import { ImCheckmark2 } from "react-icons/im";

interface CourseDetailProps {
  courseId: String;
}
export default function CourseDetail(props: CourseDetailProps) {
  const { courseId } = props;

  const teacherName = "Teacher Name";
  const title = "Math for daily life";
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const enrolled = false;
  const [isEnroll, setIsEnroll] = useState(enrolled);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "60px 100px",
        gap: "10px"
      }}
    >
      <Button
        sx={{
          width: "100px",
          borderRadius: "4px",
          border: "1px solid #639B6D",
          backgroundColor: "rgba(0,0,0,0)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0)",
            border: "1px solid #58735D"
          },
          marginTop: "0px"
        }}
      >
        <Link
          href={`/course/`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px">&lt; &nbsp;Back</BodyText>
        </Link>
      </Button>
      <div
        style={{
          display: "flex",
          margin: "40px 0px",
          flexDirection: "row",
          gap: "10px",
          alignItems: "flex-end"
        }}
      >
        <Title order={4}>{title}</Title>
        {isEnroll && (
          <ImCheckmark2
            style={{
              color: "#639B6D"
            }}
            fontSize="20px"
          />
        )}
      </div>
      <BodyText size="16px">Teacher: &nbsp;{teacherName}</BodyText>
      <BodyText size="16px">description: &nbsp;{desc}</BodyText>
      {!isEnroll && (
        <Button
          sx={{
            width: "100px",
            borderRadius: "20px",
            backgroundColor: "#639B6D",
            "&:hover": {
              backgroundColor: "#58735D"
            },
            marginTop: "10px"
          }}
          onClick={() => {
            setIsEnroll(!isEnroll);
          }}
        >
          Enroll
        </Button>
      )}
      {isEnroll && (
        <Button
          sx={{
            width: "200px",
            borderRadius: "20px",
            backgroundColor: "#2B788B",
            "&:hover": {
              backgroundColor: "#58735D"
            },
            marginTop: "10px"
          }}
        >
          <Link
            href={`/course/member/${courseId}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <BodyText size="14px" color="white">
              Go to class
            </BodyText>
          </Link>
        </Button>
      )}
    </div>
  );
}
