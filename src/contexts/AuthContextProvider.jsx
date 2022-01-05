import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // firebase authentication's auth-state observer is listening for changes
    onAuthStateChanged(auth, (user) => {
      // update state variable for currentUser
      setCurrentUser(user);
    });
  }, []);

  // login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logout = () => {
    return signOut(auth);
  };

  // registration for new user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // include user's fullname during registration for new user
  const userDisplayNameRegistration = (fullname) => {
    return updateProfile(auth.currentUser, { displayName: fullname });
  };

  const contextValues = {
    currentUser,
    login,
    logout,
    register,
    userDisplayNameRegistration,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
