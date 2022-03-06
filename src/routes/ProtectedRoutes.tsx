import { Navigate } from "react-router-dom";
import { getUser } from "../utils/helper";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = getUser();

  return isAuthenticated === "true" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};
