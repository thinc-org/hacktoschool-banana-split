import { SimpleGrid, Title } from "@mantine/core";
import InstructorCourseCard from "./Components/InstructorCourseCard";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import CourseBar from "./Components/CourseBar";
import { RxDashboard } from "react-icons/rx";
import { useAuth } from "common/contexts/AuthContext";
import { Role } from "common/contexts/AuthContext/types";

export default function InstructorDashboard() {
  const { classes } = useStyles();
  const { user, isReady, isAuthenticated } = useAuth();
  const smallScreen = useMediaQuery("(max-width:850px)");
  const datas = [
    {
      courseID: "0",
      title: "Math",
      desc: "Math is a subject",
      students: [
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
      ],
    },
    {
      courseID: "1",
      title: "English",
      desc: "English is a subject",
      students: ["John", "Dai", "Lif", "John", "Dai", "Lif", "John", "Dai"],
    },
    {
      courseID: "2",
      title: "Math",
      desc: "Math is a subject",
      students: [
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
      ],
    },
    {
      courseID: "5",
      title: "Math",
      desc: "Math is a subject",
      students: [
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
      ],
    },
    {
      courseID: "6",
      title: "Math",
      desc: "Math is a subject",
      students: [
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
      ],
    },
    {
      courseID: "7",
      title: "Math",
      desc: "Math is a subject",
      students: [
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
        "John",
        "Dai",
        "Lif",
      ],
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#F6F5F4",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: smallScreen ? "20px" : "40px",
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
          borderRadius: "14px",
        }}
      >
        <RxDashboard fontSize={40} />
        <Title order={4}>Dashboard</Title>
        <Title order={4}>{"(Teacher)"}</Title>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: smallScreen ? "normal" : "center",
          alignItems: smallScreen ? "center" : "normal",
          flexDirection: smallScreen ? "column" : "row",
          paddingTop: "40px",
          gap: "40px",
        }}
      >
        <SimpleGrid
          cols={5}
          breakpoints={[
            { maxWidth: 1200, cols: 4, spacing: "md" },
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          {datas.map((data) => {
            return (
              <InstructorCourseCard
                key={data.courseID}
                title={data.title}
                desc={data.desc}
                students={data.students}
                courseID={data.courseID}
              ></InstructorCourseCard>
            );
          })}
        </SimpleGrid>
      </div>
      <CourseBar></CourseBar>
    </div>
  );
}
