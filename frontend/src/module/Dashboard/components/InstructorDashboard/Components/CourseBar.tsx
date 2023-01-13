import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { ActionIcon, Button, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { useStyles } from "./styles";

export default function CourseBar() {
  const { classes } = useStyles();
  const [expand, setExpand] = useState(1);
  const [newCourseName, setCourseName] = useState("");
  const [newCoursDesc, setCourseDesc] = useState("");
  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <ActionIcon
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: "50px",
        }}
      >
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
      <div
        style={{
          display: !expand ? "flex" : "none",
          width: "60%",
          height: "80px",
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          marginLeft: "auto",
          marginRight: "auto",
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
          value={newCourseName}
          onChange={(event) => setCourseName(event.currentTarget.value)}
          withAsterisk
        ></TextInput>
        <TextInput
          sx={{ width: "30%" }}
          placeholder="Enter course description"
          label="Course description"
          value={newCoursDesc}
          onChange={(event) => setCourseDesc(event.currentTarget.value)}
        ></TextInput>

        <Button className={classes.ButtonStyle} onClick={() => setExpand(1)}>
          {/* ส่งnewCourseName,newCoursDesc คืนให้backend */}
          Create
        </Button>
      </div>
    </div>
  );
}
