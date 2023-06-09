import React from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
   const userRole = "admin";
   // const userRole = "instructor";
   // const userRole = "student";
   // const userRole = "";
   return (
      <div className="grid grid-cols-8">
         <div className="col-span-2 h-screen p-5 bg-yellow-200">
            <h2 className="text-2xl font-bold mb-5">Spoken English</h2>
            <NavLink
               to="/"
               className="dash-nav-link pb-2"
            >
               <FaHome />
               Home
            </NavLink>
            {userRole === "admin" ? (
               <div className="">
                  <div className="border flex flex-col gap-2">
                     <NavLink
                        to="admin-dashboard/manage-users"
                        className="dash-nav-link"
                     >
                        <FaUsers /> Manage Users
                     </NavLink>
                     <NavLink
                        to="admin-dashboard/manage-classes"
                        className="dash-nav-link"
                     >
                        <FcManager /> Manage Classes
                     </NavLink>
                  </div>
               </div>
            ) : userRole === "instructor" ? (
               <div>Instructor</div>
            ) : userRole === "student" ? (
               <div>Student</div>
            ) : (
               <div>Not</div>
            )}
         </div>
         <div className="col-span-6">
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardLayout;
