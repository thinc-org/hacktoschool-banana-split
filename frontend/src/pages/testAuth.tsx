import { useAuth } from "common/contexts/AuthContext";

export default function TestAuth() {
  const { user, isReady, isAuthenticated } = useAuth();
  if (!isReady) return <div>Loading...</div>;
  console.log(user, isReady, isAuthenticated);

  return (
    <div>
      Test Auth
      <button
        onClick={() => {
          localStorage.removeItem("token");
          location.href = "/auth";
        }}
      >
        logout
      </button>
    </div>
  );
}
