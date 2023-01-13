import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { ActionIcon, Button, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import InstructorCourseCard from "./Components/InstructorCourseCard";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import CourseBar from "./Components/CourseBar";

export default function InstructorDashboard() {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:850px)");
  const [expand, setExpand] = useState(1);
  const [newCourseName, setCourseName] = useState("");
  const [newCoursDesc, setCourseDesc] = useState("");
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
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#F6F5F4",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      </div>
      <CourseBar></CourseBar>
    </div>
  );
}
