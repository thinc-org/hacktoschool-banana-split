import { Title } from "@mantine/core";
import CourseCard from "module/Course/components/CourseCard";
import { useState } from "react";

export default function StudentDashboard() {
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
        display: "flex",
        backgroundColor: "white",
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
        <Title order={4}>Dashboard</Title>
      </div>
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
  );
}
