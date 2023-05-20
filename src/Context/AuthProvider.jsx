import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";

const Auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const signInWithGooglePopup = () => {
    return signInWithPopup(Auth, provider);
  };

  const authInfo = {
    user,
    signInWithGooglePopup,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
