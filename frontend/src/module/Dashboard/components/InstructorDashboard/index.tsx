import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { ActionIcon, Button, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import InstructorCourseCard from "./Components/InstructorCourseCard";
import { useStyles } from "./styles";

export default function InstructorDashboard() {
  const { classes } = useStyles();
  const [expand, setExpand] = useState(1);
  const datas = [
    {
      title: "Math",
      desc: "Math is a subject",
      students: ["John", "Dai", "Lif"],
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "#F6F5F4",
        paddingTop: "40px",
      }}
    >
      {datas.map((data) => {
        return (
          <InstructorCourseCard
            title={data.title}
            desc={data.desc}
            students={data.students}
          ></InstructorCourseCard>
        );
      })}

      <div style={{ padding: "30px", position: "relative" }}>
        <ActionIcon>
          <AiFillPlusCircle
            color="black"
            size={25}
            style={{ display: expand ? "flex" : "none" }}
            onClick={() => setExpand(expand ? 0 : 1)}
          ></AiFillPlusCircle>
          <AiFillCloseCircle
            color="black"
            size={25}
            style={{ display: !expand ? "flex" : "none" }}
            onClick={() => setExpand(1)}
          />
        </ActionIcon>
      </div>
      <div
        style={{
          display: !expand ? "flex" : "none",
          width: "60%",
          height: "78px",
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "7%",
        }}
      >
        <div style={{ textAlign: "center", marginLeft: "10px" }}>
          <Title order={6}>New Course</Title>
        </div>
        <TextInput
          placeholder="Enter course name"
          label="Course name"
          withAsterisk
        ></TextInput>
        <TextInput
          sx={{ width: "30%" }}
          placeholder="Enter course description"
          label="Course description"
        ></TextInput>
        <Button className={classes.ButtonStyle} onClick={() => setExpand(1)}>
          {" "}
          Create
        </Button>
      </div>
    </div>
  );
}
