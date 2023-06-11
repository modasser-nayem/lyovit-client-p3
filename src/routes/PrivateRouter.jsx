import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Shared/Loading";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return <Loading />;
   } else {
      if (user) {
         return children;
      } else {
         return (
            <Navigate
               to="/login"
               state={{ from: location }}
               replace
            />
         );
      }
   }
};

export default PrivateRoute;
