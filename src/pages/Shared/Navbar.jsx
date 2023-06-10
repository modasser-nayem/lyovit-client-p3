import React, { useState } from "react";
import { MdOutlineLogin, MdLogout, MdClose } from "react-icons/md";
import { FaBars, FaUser, FaUserEdit } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/logo/educations_logo.png";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { user, loading, logoutUser } = useAuth();
   return (
      <nav className="flex z-50 fixed items-center bg-white/30 backdrop-blur-2xl top-0 w-full h-[11vh] border">
         <div className="navbar cs-container">
            <div className="flex-1">
               <Link
                  className="flex items-center"
                  to="/"
               >
                  <img
                     className="h-12 pr-2"
                     src={logo}
                     alt="brand logo"
                  />
               </Link>
            </div>
            <div
               className={`flex flex-col lg:flex-row items-center absolute lg:static -z-auto lg:-z-[-40] w-full lg:w-auto p-8 lg:p-0 left-0 bg-opacity-0 right-0 transition-all md:transition-none duration-500 ${
                  isOpen
                     ? "bg-opacity-100 lg:bg-opacity-0 top-[11vh]"
                     : "-top-[700px]"
               }`}
            >
               <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8 lg:mr-7 mb-7 md:mb-0">
                  <NavLink
                     to="/"
                     className="cs-nav-link"
                  >
                     Home
                  </NavLink>
                  <NavLink
                     to="/instructors"
                     className="cs-nav-link"
                  >
                     Instructors
                  </NavLink>
                  <NavLink
                     to="/classes"
                     className="cs-nav-link"
                  >
                     Classes
                  </NavLink>
                  <NavLink
                     to="/access"
                     className="cs-nav-link"
                  >
                     access
                  </NavLink>
                  {user?.role && (
                     <NavLink
                        to={`${
                           user.role === "admin"
                              ? "dashboard/admin-dashboard"
                              : user.role === "instructor"
                              ? "dashboard/instructor-dashboard"
                              : "dashboard/student-dashboard"
                        }`}
                        className="cs-nav-link"
                     >
                        Dashboard
                     </NavLink>
                  )}
               </div>
               <div className="flex flex-col lg:flex-row gap-3 items-end lg:items-center">
                  {!loading && (
                     <>
                        {user ? (
                           <div
                              className="dropdown dropdown-end tooltip tooltip-left"
                              data-tip={user.displayName}
                           >
                              <label
                                 tabIndex={0}
                                 className="btn btn-ghost btn-circle avatar"
                              >
                                 <div className="w-10 bg-gray-400 rounded-full">
                                    <img src={user.photoURL} />
                                 </div>
                              </label>
                              <ul
                                 tabIndex={0}
                                 className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52"
                              >
                                 <li>
                                    <Link
                                       to="/profile"
                                       className="text-lg"
                                    >
                                       <FaUser />
                                       Profile
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       to="/update-profile"
                                       className="text-lg"
                                    >
                                       <FaUserEdit /> Update
                                    </Link>
                                 </li>
                                 <li>
                                    <p
                                       onClick={() =>
                                          logoutUser("Logout Success")
                                       }
                                       className="text-lg"
                                    >
                                       <MdLogout /> Logout
                                    </p>
                                 </li>
                              </ul>
                           </div>
                        ) : (
                           <NavLink
                              className="cs-nav-link pt-5 lg:pt-0"
                              data-tip="Login"
                              to="/login"
                           >
                              <MdOutlineLogin className="text-3xl" />
                           </NavLink>
                        )}
                     </>
                  )}
               </div>
            </div>
            <div className="lg:hidden">
               <button
                  className="text-2xl"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <MdClose /> : <FaBars />}
               </button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
