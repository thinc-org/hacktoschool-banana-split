import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import BodyText from "common/components/BodyText";
import Course from "module/Course";
import Link from "next/link";
import { ImCheckmark2 } from "react-icons/im";

interface InstructorCourseCardProps {
  title: String;
  desc: String;
  students: string[];
}

export default function InstructorCourseCard(props: InstructorCourseCardProps) {
  const { title, desc, students } = props;
  const smallScreen = useMediaQuery("(max-width:850px)");
  return (
    <div
      style={{
        width: "60%",
        height: "100%",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "14px",
        alignItems: "center",
        padding: "30px 30px",
        paddingBottom: "20px",
        position: "relative",
        flexDirection: smallScreen ? "column" : "row",
      }}
    >
      <div
        style={{
          display: "block",
          width: smallScreen ? "100%" : "100px",
          textAlign: smallScreen ? "center" : "left",
          marginBottom: smallScreen ? "10px" : "0px",
          height: "100%",
          wordBreak: "break-all",
          marginRight: "20px",
        }}
      >
        <Title order={5}>{title}</Title>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignSelf: "flex-start",
          flexDirection: "column",
        }}
      >
        <Link
          href={`/course/`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {students.map((student) => {
            return <BodyText>{student}</BodyText>;
          })}
        </Link>
      </div>
    </div>
  );
}
