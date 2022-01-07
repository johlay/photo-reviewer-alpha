import useAuthContext from "../../hooks/useAuthContext";
import RequireAuthMessage from "./RequireAuthMessage";

const RequireAuth = ({ children }) => {
  const { currentUser } = useAuthContext();

  if (!currentUser) {
    return <RequireAuthMessage />;
  } else {
    return children;
  }
};

export default RequireAuth;
