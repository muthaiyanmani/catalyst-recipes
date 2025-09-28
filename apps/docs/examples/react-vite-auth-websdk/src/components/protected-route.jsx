import { Navigate } from "react-router-dom";
import { useUser } from "../context/user";
import Loader from "./loader";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const { getUserDetails, isAuthLoading } = useUser();

  if (isAuthLoading) {
    return (
      <Loader />
    );
  }

  if (getUserDetails()) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}
