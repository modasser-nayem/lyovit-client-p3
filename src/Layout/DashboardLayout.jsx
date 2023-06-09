import React, { useState } from "react";
import {
   FaBookmark,
   FaEdit,
   FaHome,
   FaPlus,
   FaRegBookmark,
   FaRegListAlt,
   FaUsers,
} from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
   const { user } = useAuth();
   const [headTitle, setHeadTitle] = useState("");
   console.log(headTitle);
   const adminLink = [
      {
         path: "manage-users",
         name: "Manage Users",
         icon: <FaUsers />,
      },
      {
         path: "manage-classes",
         name: "Manage Classes",
         icon: <FcManager />,
      },
   ];
   const instructorLink = [
      {
         path: "my-classes",
         name: "My Classes",
         icon: <FaRegListAlt />,
      },
      { path: "add-class", name: "Add Class", icon: <FaPlus /> },
      { path: "update-class", name: "Update Class", icon: <FaEdit /> },
   ];
   const studentLink = [
      {
         path: "my-selected-classes",
         name: "My Selected Classes",
         icon: <FaRegBookmark />,
      },
      {
         path: "my-enrolled-classes",
         name: "My Enrolled Classes",
         icon: <FaBookmark />,
      },
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
               {user?.role === "admin" ? (
                  <div>
                     {adminLink.map((link, i) => (
                        <NavLink
                           onClick={() => setHeadTitle(link.name)}
                           to={`admin-dashboard/${link.path}`}
                           key={i}
                           className="dash-nav-link"
                        >
                           {link.icon}
                           {link.name}
                        </NavLink>
                     ))}
                  </div>
               ) : user?.role === "instructor" ? (
                  <div>
                     {instructorLink.map((link, i) => (
                        <NavLink
                           onClick={() => setHeadTitle(link.name)}
                           to={`instructor-dashboard/${link.path}`}
                           key={i}
                           className="dash-nav-link"
                        >
                           {link.icon}
                           {link.name}
                        </NavLink>
                     ))}
                  </div>
               ) : user?.role === "student" ? (
                  <div>
                     {studentLink.map((link, i) => (
                        <NavLink
                           onClick={() => setHeadTitle(link.name)}
                           to={`student-dashboard/${link.path}`}
                           key={i}
                           className="dash-nav-link"
                        >
                           {link.icon}
                           {link.name}
                        </NavLink>
                     ))}
                  </div>
               ) : (
                  <div>Not</div>
               )}
            </div>
         </div>
         <div className="col-span-6">
            <div className="text-2xl font-semibold bg-yellow-200 capitalize p-4 px-8">
               {headTitle ? headTitle : user && `${user?.role} Dashboard`}
            </div>
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardLayout;
