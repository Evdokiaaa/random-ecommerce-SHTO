import { ICheckAuth } from "@/types";
import { useLocation, useNavigate } from "react-router-dom";
export default function CheckAuth({
  isAuthenticated,
  user,
  children,
}: ICheckAuth): React.ReactNode {
  //Будет перенаправлять в зависимости от роли пользователя и его ПРАВ
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  if (!isAuthenticated && !isAuthPage) {
    navigate("/auth/login");
    return;
  }
  if (isAuthenticated && user.role === "admin") {
    navigate("/admin/dashboard");
    return;
  } else if (isAuthenticated) {
    navigate("/shop/home");
    return;
  }
  if (
    isAuthenticated &&
    user.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    navigate("/not-found");
    return;
  }
  return <>{children}</>;
}
