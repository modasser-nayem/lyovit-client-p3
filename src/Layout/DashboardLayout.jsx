import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo.svg";
import {
   FaBookmark,
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
            <div className="mb-10 flex items-center gap-2">
               <img
                  className="w-[50px]"
                  src={logo}
                  alt=""
               />
               <h1 className="text-4xl font-bold">
                  Lyo<span className="text-teal-600">vit</span>
               </h1>
            </div>
            <div className="pl-5">
               <motion.p
                  initial={{ opacity: 0, x: "-100%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                     duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.8 }}
               >
                  <NavLink
                     to="/"
                     className="dash-nav-link"
                  >
                     <FaHome />
                     Home
                  </NavLink>
               </motion.p>
               {user?.role === "admin" ? (
                  <div>
                     {adminLink.map((link, i) => (
                        <motion.p
                           key={i}
                           initial={{ opacity: 0, x: "-100%" }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{
                              duration: i === 0 ? 1 : i + 0.5,
                           }}
                           viewport={{ once: true }}
                           whileTap={{ scale: 0.8 }}
                        >
                           <NavLink
                              onClick={() => setHeadTitle(link.name)}
                              to={`admin-dashboard/${link.path}`}
                              className="dash-nav-link"
                           >
                              {link.icon}
                              {link.name}
                           </NavLink>
                        </motion.p>
                     ))}
                  </div>
               ) : user?.role === "instructor" ? (
                  <div>
                     {instructorLink.map((link, i) => (
                        <motion.p
                           key={i}
                           initial={{ opacity: 0, x: "-100%" }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{
                              duration: i === 0 ? 1 : i + 0.5,
                           }}
                           viewport={{ once: true }}
                           whileTap={{ scale: 0.8 }}
                        >
                           <NavLink
                              onClick={() => setHeadTitle(link.name)}
                              to={`instructor-dashboard/${link.path}`}
                              className="dash-nav-link"
                           >
                              {link.icon}
                              {link.name}
                           </NavLink>
                        </motion.p>
                     ))}
                  </div>
               ) : user?.role === "student" ? (
                  <div>
                     {studentLink.map((link, i) => (
                        <motion.p
                           key={i}
                           initial={{ opacity: 0, x: "-100%" }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{
                              duration: i === 0 ? 1 : i + 0.5,
                           }}
                           viewport={{ once: true }}
                           whileTap={{ scale: 0.8 }}
                        >
                           <NavLink
                              onClick={() => setHeadTitle(link.name)}
                              to={`student-dashboard/${link.path}`}
                              className="dash-nav-link"
                           >
                              {link.icon}
                              {link.name}
                           </NavLink>
                        </motion.p>
                     ))}
                  </div>
               ) : (
                  <></>
               )}
            </div>
         </div>
         <div className="col-span-6">
            <motion.div
               initial={{ opacity: 0, y: "-100%" }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{
                  duration: 1,
               }}
               viewport={{ once: true }}
               className="text-2xl capitalize font-semibold py-3 px-4"
            >
               {headTitle ? headTitle : user && `${user?.role} Dashboard`}
            </motion.div>
            <div className="bg-[#e7fdfe] min-h-screen p-5">
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;
