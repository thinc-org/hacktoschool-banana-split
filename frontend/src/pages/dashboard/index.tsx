import { Title } from "@mantine/core";
import { useAuth } from "common/contexts/AuthContext";
import { Role } from "common/contexts/AuthContext/types";
import Dashboard from "module/Dashboard";
import InstructorDashboard from "module/Dashboard/components/InstructorDashboard";
import StudentDashboard from "module/Dashboard/components/StudentDashboard";
import Loading from "module/Loading";

export default function DashboardPage() {
  const { user, isReady, isAuthenticated } = useAuth();
  if (!isReady) return <Loading />;
  if (isReady && !isAuthenticated)
    return <Title order={1}>Please log in</Title>;
  if (user.role == Role.instructor)
    return <InstructorDashboard userId={user.userId} />;
  return <StudentDashboard userId={user.userId} />;
}
