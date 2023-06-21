import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Shared/Loading";

const InstructorPrivateRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return <Loading />;
   } else {
      if (user && user.role === "instructor") {
         return children;
      } else {
         return (
            <Navigate
               to="/"
               state={{ from: location }}
               replace
            />
         );
      }
   }
};

export default InstructorPrivateRoute;
