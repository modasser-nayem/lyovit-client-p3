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
   // const userRole = "admin";
   const userRole = "instructor";
   // const userRole = "student";
   // const userRole = "";
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
      signInWithPopup(auth, googleProvider).then((result) => {
         console.log(result.user.displayName);
         fetch("http://localhost:4000/createUser", {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify({
               email: result.user.email,
               name: result.user.displayName,
               photoURL: result.user.photoURL,
            }),
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
            currentUser["role"] = userRole;
            fetch("http://localhost:4000/jwt", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify({
                  email: currentUser.email,
               }),
            })
               .then((res) => res.json())
               .then((data) => {
                  localStorage.setItem("access-token", data.token);
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
