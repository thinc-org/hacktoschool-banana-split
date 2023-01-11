import useHideFooter from "common/contexts/LayoutContext/hooks/useHideFooter";
import useHideNavbar from "common/contexts/LayoutContext/hooks/useHideNavbar";
import { AuthPage } from "module/Login";

export default function LoginPage() {
  useHideNavbar();
  useHideFooter();
  return <AuthPage />;
}
