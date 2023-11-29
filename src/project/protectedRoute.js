import { Navigate } from "react-router";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser) {
    return children;
  }
  return <Navigate to="/project/signin" />;
}

export default ProtectedRoute;
