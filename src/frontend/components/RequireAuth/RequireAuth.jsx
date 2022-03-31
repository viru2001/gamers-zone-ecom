import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

const RequireAuth = () => {
  const {
    auth: { status },
  } = useAuth();
  const { pathname } = useLocation();
  return status ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace={true} state={{ from: pathname }} />
  );
};
export { RequireAuth };
