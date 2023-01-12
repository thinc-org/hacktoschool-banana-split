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
      <Title order={4} style={{ textAlign: "center" }}>
        Dashboard
      </Title>

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
