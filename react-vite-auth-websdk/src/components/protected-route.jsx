import { Navigate } from "react-router-dom";
import { useUser } from "../context/user";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const { getUserDetails } = useUser();

  if (getUserDetails()) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}
