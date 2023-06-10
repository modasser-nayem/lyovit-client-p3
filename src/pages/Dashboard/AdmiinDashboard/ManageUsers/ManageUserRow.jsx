import React from "react";
import { Link } from "react-router-dom";

const ManageUserRow = ({ user, number }) => {
   const { _id, name, email, photoURL, role, createdAt } = user;
   return (
      <tr>
         <td>{number}</td>
         <td className="p-2 whitespace-nowrap">
            <div className="flex items-center w-fit">
               <div className="w-12 h-12 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                     className="rounded-full h-full w-full"
                     src={photoURL}
                     width="60"
                     height="60"
                     alt={name}
                  />
               </div>
               <div className="font-medium text-gray-800">
                  <h2 className="text-lg pt-1">{name}</h2>
                  <small className="text-xs">{email}</small>
               </div>
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium text-green-500">
               <span
                  className={`text-lg ${
                     role === "instructor"
                        ? "text-violet-600"
                        : role === "admin"
                        ? "text-teal-500"
                        : "text-yellow-600"
                  }`}
               >
                  {role}
               </span>
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium">
               <button
                  disabled={role === "instructor" ? true : false}
                  className="py-1 px-3 text-white rounded-md text-xs bg-violet-600 disabled:bg-gray-300 mr-2"
               >
                  Make Instructor
               </button>
               <button
                  disabled={role === "admin" ? true : false}
                  className="py-1 px-3 text-white rounded-md text-xs bg-teal-600 disabled:bg-gray-300"
               >
                  Mack Admin
               </button>
            </div>
         </td>
      </tr>
   );
};
export default ManageUserRow;
