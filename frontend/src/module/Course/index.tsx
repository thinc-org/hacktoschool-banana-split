import { Title } from "@mantine/core";
import { BsBook } from "react-icons/bs";
import CourseCard from "./components/CourseCard";
export default function Course() {
  const datas = [
    {
      title: "Math",
      desc: "Math is a subject",
      teacherName: "Mr. John",
      courseId: "MatchDaiLif",
      enrolled: false,
    },
  ];
  return (
    <>
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
          paddingTop: "40px",
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
          <BsBook fontSize={40} />
          <Title order={4}>Course</Title>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
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
    </>
  );
}
