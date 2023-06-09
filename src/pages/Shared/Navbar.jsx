import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
   const { user, logoutUser } = useAuth();
   return (
      <nav className="h-[10vh] w-full bg-blue-500 flex items-center justify-center">
         {/* -------------------------- */}
         <div className="navbar">
            <div className="flex-1">
               <a className="btn btn-ghost normal-case text-xl">Nayem</a>
            </div>
            {/* <> =========================== <> */}
            <div className="flex gap-4">
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
            {/* <> =========================== <> */}
            <div className="flex-none">
               <Link className="indicator mx-5">
                  <FaShoppingCart className="text-2xl text-gray-200" />
                  <span className="badge badge-sm indicator-item">0</span>
               </Link>
               {user ? (
                  <div
                     className="dropdown dropdown-end hover:tooltip-open tooltip tooltip-left"
                     data-tip={user?.displayName}
                  >
                     <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                     >
                        <div className="w-10 rounded-full">
                           <img
                              className="bg-gray-500"
                              src={user?.photoURL}
                           />
                        </div>
                     </label>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                     >
                        <li>
                           <Link
                              to="/profile"
                              className="justify-between"
                           >
                              Profile
                              <span className="badge">New</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/update-profile">Update</Link>
                        </li>
                        <li>
                           <button onClick={() => logoutUser("Logout User")}>
                              Logout
                           </button>
                        </li>
                     </ul>
                  </div>
               ) : (
                  <NavLink
                     to="/login"
                     className="cs-nav-link"
                  >
                     Login
                  </NavLink>
               )}
            </div>
         </div>

         {/* -------------------------- */}
      </nav>
   );
};

export default Navbar;
