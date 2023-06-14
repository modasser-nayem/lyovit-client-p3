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

   const loginWithGoogle = (navigate, pathname) => {
      setLoading(true);
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider).then((result) => {
         fetch("https://lyovit.onrender.com/createUser", {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify({
               email: result.user.email.toLowerCase(),
               name: result.user.displayName,
               photoURL: result.user.photoURL,
            }),
         }).then(() => {
            setLoading(false);
            navigate(pathname);
         });
      });
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
            setLoading(false);
         })
         .catch((error) => {
            setLoading(false);
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
               .get(
                  `https://lyovit.onrender.com/user?email=${currentUser.email}`
               )
               .then((res) => {
                  if (res.data.success) {
                     currentUser["role"] = res.data.data.role;
                  }
               });
            axios
               .post("https://lyovit.onrender.com/jwt", {
                  email: currentUser?.email,
               })
               .then((res) => {
                  localStorage.setItem("access-token", res.data.token);
                  setLoading(false);
               })
               .catch((error) => {
                  console.log("Error", error);
                  setLoading(false);
                  setUser(null);
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
