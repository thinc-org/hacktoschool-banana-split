import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CourseCard from "module/Course/components/CourseCard";
import { RxDashboard } from "react-icons/rx";
import { useState } from "react";

export default function StudentDashboard() {
  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");
  const datas = [
    {
      title: "Math",
      desc: "Math is a subject",
      teacherName: "Mr. John",
      courseId: "MatchDaiLif",
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
      </div>
      <div
        style={{
          width: xsScreen ? "80%" : "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          gap: "10px",
        }}
      >
        {datas.map((data) => {
          return (
            <CourseCard
              title={data.title}
              desc={data.desc}
              teacherName={data.teacherName}
              courseId={data.courseId}
            ></CourseCard>
          );
        })}
      </div>
    </div>
  );
}
