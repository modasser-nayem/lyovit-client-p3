import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createNewUser = ({ email, password }) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const updateUserProfile = ({ user, name, photoURL }) => {
      return updateProfile(user, { displayName: name, photoURL: photoURL });
   };

   const loginCreatedUser = ({ email, password }) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const loginWithGoogle = () => {
      setLoading(true);
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
   };

   const logoutUser = (toastMessage) => {
      setLoading(true);
      signOut(auth)
         .then(() => {
            if (toastMessage) {
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: toastMessage,
                  showConfirmButton: false,
                  timer: 1500,
               });
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      setLoading(true);
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         // get and set token
         if (currentUser) {
            axios
               .post("http://localhost:4000/jwt", {
                  email: currentUser.email,
               })
               .then((res) => {
                  localStorage.setItem("access-token", res.data.token);
                  setLoading(false);
               });
         } else {
            localStorage.removeItem("access-token");
            setLoading(false);
         }
      });
      return () => unsubscribe();
   }, []);

   const info = {
      createNewUser,
      updateUserProfile,
      logoutUser,
      loginCreatedUser,
      loginWithGoogle,
      user,
      loading,
   };
   return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
