import React from "react";
import { FaEdit, FaHome, FaPlus, FaRegListAlt, FaUsers } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
   // const userRole = "admin";
   const userRole = "instructor";
   // const userRole = "student";
   // const userRole = "";
   const instructorLink = [
      {
         path: "my-classes",
         name: "My Classes",
         icon: <FaRegListAlt />,
      },
      { path: "add-class", name: "Add Class", icon: <FaPlus /> },
      { path: "update-class", name: "Update Class", icon: <FaEdit /> },
   ];
   return (
      <div className="grid grid-cols-8">
         <div className="col-span-2 h-screen p-5 bg-yellow-200">
            <h2 className="text-2xl font-bold mb-5">Spoken English</h2>
            <div className="pl-5">
               <NavLink
                  to="/"
                  className="dash-nav-link"
               >
                  <FaHome />
                  Home
               </NavLink>
               {userRole === "admin" ? (
                  <div>
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
               ) : userRole === "instructor" ? (
                  <div>
                     {instructorLink.map((link, i) => (
                        <NavLink
                           to={`instructor-dashboard/${link.path}`}
                           key={i}
                           className="dash-nav-link"
                        >
                           {link.icon}
                           {link.name}
                        </NavLink>
                     ))}
                  </div>
               ) : userRole === "student" ? (
                  <div>Student</div>
               ) : (
                  <div>Not</div>
               )}
            </div>
         </div>
         <div className="col-span-6">
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardLayout;
