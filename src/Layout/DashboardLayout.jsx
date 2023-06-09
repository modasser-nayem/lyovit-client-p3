import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
   return (
      <div className="grid grid-cols-8">
         <div className="col-span-3">
            <Outlet />
         </div>
         <div className="col-span-5">
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardLayout;
