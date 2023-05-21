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
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const SignInWithGooglePopup = () => {
    setLoading(true);
    return signInWithPopup(Auth, provider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const profileInfoUpdate = (displayName, photoURL) => {
    setLoading(true);
    const user = Auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(Auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
