import { createContext, useState } from "react";
import { auth } from "../firebase/index";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // registration for new user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const contextValues = { currentUser, register };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
