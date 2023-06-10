import React from "react";
import { Outlet } from "react-router-dom";

const InstructorDashboard = () => {
   return (
      <div>
         <Outlet />
      </div>
   );
};

export default InstructorDashboard;
