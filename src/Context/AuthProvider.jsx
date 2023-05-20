import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";

const Auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const SignInWithGooglePopup = () => {
    return signInWithPopup(Auth, provider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const profileInfoUpdate = (displayName, photoURL) => {
    const user = Auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };
  const logOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    SignInWithGooglePopup,
    createUser,
    loginUser,
    logOut,
    profileInfoUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
