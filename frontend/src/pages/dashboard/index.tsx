import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import { Role } from "common/contexts/AuthContext/types";
import Dashboard from "module/Dashboard";
import InstructorDashboard from "module/Dashboard/components/InstructorDashboard";
import StudentDashboard from "module/Dashboard/components/StudentDashboard";

export default function DashboardPage() {
  const { user, isReady, isAuthenticated } = useAuth();
  if (!isReady) return <Title order={1}>Loading...</Title>;
  if (isReady && !isAuthenticated)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Title order={1}>Please log in or sign up</Title>
      </div>
    );
  if (user.role == Role.instructor) return <InstructorDashboard />;
  return <StudentDashboard />;
}
