import React, { useState } from "react";
import logo from "../assets/logo/educations_logo.png";
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
         <div className="col-span-2 h-screen p-5">
            <div className="w-[200px] h-[100px] mb-5">
               <img
                  src={logo}
                  alt=""
               />
            </div>
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
            <div className="text-2xl font-semibold capitalize p-4 px-8">
               {headTitle ? headTitle : user && `${user?.role} Dashboard`}
            </div>
            <div className="bg-[#e7fdfe] min-h-screen p-5">
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;
