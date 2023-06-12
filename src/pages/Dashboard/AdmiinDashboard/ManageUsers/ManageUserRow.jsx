import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FcProcess } from "react-icons/fc";

const ManageUserRow = ({ user, number, refetch }) => {
   const [axiosSecure] = useAxiosSecure();
   const [adminProcess, setAdminProcess] = useState(false);
   const [instructorProcess, setInstructorProcess] = useState(false);
   const { _id, name, email, photoURL, role, createdAt } = user;

   const updateUerRole = (role) => {
      if (role === "admin") {
         setAdminProcess(true);
      } else {
         setInstructorProcess(true);
      }
      axiosSecure
         .patch(`update-role/${_id}?role=${role}`)
         .then((res) => {
            if (role === "admin") {
               setAdminProcess(false);
            } else {
               setInstructorProcess(false);
            }
            if (res.data.success) {
               refetch();
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: res.data.message,
                  showConfirmButton: false,
                  timer: 1500,
               });
            }
         })
         .catch((error) => {
            if (role === "admin") {
               setAdminProcess(false);
            } else {
               setInstructorProcess(false);
            }
            console.log(error.response.data);
            if (!error.response.data.success) {
               Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: error.response.data.message,
                  showConfirmButton: false,
                  timer: 1500,
               });
            }
         });
   };

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
                  className={`text-lg capitalize ${
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
            <div className="text-center font-medium flex gap-2 justify-center items-center">
               <button
                  onClick={() => updateUerRole("instructor")}
                  disabled={
                     role === "instructor" || role === "admin" ? true : false
                  }
                  className="py-1 px-3 text-white rounded-md text-xs bg-violet-600 disabled:bg-gray-300 min-w-[100px]"
               >
                  {instructorProcess ? (
                     <FcProcess className="text-[17px] animate-spin w-fit mx-auto" />
                  ) : (
                     "Make Instructor"
                  )}
               </button>
               <button
                  onClick={() => updateUerRole("admin")}
                  disabled={
                     role === "admin" || role === "instructor" ? true : false
                  }
                  className="py-1 px-3 text-white rounded-md text-xs bg-teal-600 disabled:bg-gray-300 min-w-[100px]"
               >
                  {adminProcess ? (
                     <FcProcess className="text-[17px] animate-spin w-fit mx-auto" />
                  ) : (
                     "Mack Admin"
                  )}
               </button>
            </div>
         </td>
      </tr>
   );
};
export default ManageUserRow;
