import React from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase.config";

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { registerUser, loginUser };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
