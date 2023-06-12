import React, { useState } from "react";
import { FcProcess } from "react-icons/fc";
import { Link } from "react-router-dom";
import FeedbackModal from "./FeedbackModal";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageClassRow = ({ singleClass, number, refetch }) => {
   const {
      _id,
      img,
      class_name,
      instructor_name,
      instructor_email,
      price,
      seats,
      status,
      feedback,
   } = singleClass;
   const [axiosSecure] = useAxiosSecure();
   const [approvedProcess, setApprovedProcess] = useState(false);
   const [denyProcess, setDenyProcess] = useState(false);
   const updateClassStatus = (status) => {
      if (status === "approved") {
         setApprovedProcess(true);
      } else {
         setDenyProcess(true);
      }
      axiosSecure
         .patch(`class-status/${_id}?status=${status}`)
         .then((res) => {
            if (status === "approved") {
               setApprovedProcess(false);
            } else {
               setDenyProcess(false);
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
            if (status === "approved") {
               setApprovedProcess(false);
            } else {
               setDenyProcess(false);
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
               <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                     className="rounded-full h-full w-full"
                     src={img}
                     width="50"
                     height="50"
                     alt={class_name}
                  />
               </div>
               <div className="font-medium text-gray-800">
                  <h2 className="text-base pt-1">{class_name}</h2>
               </div>
            </div>
         </td>
         <div className="text-center text-gray-800">
            <h2 className="text-base pt-1 capitalize">{instructor_name}</h2>
            <small className="text-xs">{instructor_email}</small>
         </div>
         <td className="p-2 whitespace-nowrap">
            <div className="text-left font-bold">${price}</div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium text-green-500">
               {seats}
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium text-green-500">
               <span
                  className={`${
                     status === "pending"
                        ? "text-yellow-600"
                        : status === "approved"
                        ? "text-teal-500"
                        : "text-red-600"
                  }`}
               >
                  {status}
               </span>
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium flex gap-2 justify-center items-center">
               <button
                  onClick={() => updateClassStatus("approved")}
                  disabled={
                     status === "approved" || status === "deny" ? true : false
                  }
                  className="py-1 px-2 text-white rounded-md text-xs bg-teal-600 disabled:bg-gray-300 min-w-[70px]"
               >
                  {approvedProcess ? (
                     <FcProcess className="text-[17px] animate-spin w-fit mx-auto" />
                  ) : (
                     "Approved"
                  )}
               </button>
               <button
                  onClick={() => updateClassStatus("deny")}
                  disabled={
                     status === "approved" || status === "deny" ? true : false
                  }
                  className="py-1 px-2 text-white rounded-md text-xs bg-red-600 disabled:bg-gray-300 min-w-[70px]"
               >
                  {denyProcess ? (
                     <FcProcess className="text-[17px] animate-spin w-fit mx-auto" />
                  ) : (
                     "Deny"
                  )}
               </button>
               {status === "deny" ? (
                  <a href="#my_modal_8">
                     <button
                        disabled={feedback ? true : false}
                        className="py-1 px-2 text-white rounded-md text-xs bg-violet-600 disabled:bg-gray-300 min-w-[70px]"
                     >
                        Feedback
                     </button>
                  </a>
               ) : (
                  <button className="py-1 px-2 text-white rounded-md text-xs bg-violet-600 disabled:bg-gray-300 min-w-[70px]">
                     Feedback
                  </button>
               )}

               <FeedbackModal
                  refetch={refetch}
                  _id={_id}
               />
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium">
               <div>
                  <Link
                     className="btn btn-sm btn-ghost"
                     to={`/class-details/${_id}`}
                  >
                     Details
                  </Link>
               </div>
            </div>
         </td>
      </tr>
   );
};

export default ManageClassRow;
