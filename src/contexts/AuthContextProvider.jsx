import { createContext, useState } from "react";
import { auth } from "../firebase/index";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // registration for new user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // include user's fullname during registration for new user
  const userDisplayNameRegistration = (fullname) => {
    return updateProfile(auth.currentUser, { displayName: fullname });
  };

  const contextValues = { currentUser, register, userDisplayNameRegistration };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
