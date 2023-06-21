import React from "react";
import { Link } from "react-router-dom";

const MyClassTableRow = ({ myClass, number }) => {
   const {
      _id,
      img,
      class_name,
      price,
      seats,
      enrolled_students,
      status,
      feedback,
   } = myClass;
   return (
      <tr>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-bold">{number}</div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="flex items-center w-fit">
               <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                     className="rounded-full h-full w-full"
                     src={img}
                     width="60"
                     height="60"
                     alt={class_name}
                  />
               </div>
               <div className="font-medium text-gray-800">
                  <h2 className="text-base pt-1">{class_name}</h2>
               </div>
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-left font-bold">${price}</div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium text-green-500">
               {seats}
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center text-gray-600 font-medium">
               <span className="text-black">{enrolled_students}</span> Student
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium text-green-500">
               <span
                  className={`${
                     status === "pending"
                        ? "text-yellow-500"
                        : status === "approved"
                        ? "text-teal-500"
                        : "text-red-500"
                  }`}
               >
                  {status}
               </span>
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium">
               <Link
                  className="bg-gray-300 hover:bg-gray-400 py-1.5 px-4 rounded-md mr-2"
                  to={`/class-details/${_id}`}
               >
                  Details
               </Link>
               <Link
                  className="bg-yellow-500 hover:bg-yellow-600 py-1.5 px-4 rounded-md"
                  to={`/dashboard/instructor-dashboard/update-class/${_id}`}
               >
                  Update
               </Link>
            </div>
         </td>
         <td className="whitespace-nowrap">
            <div className="text-center">
               {feedback && (
                  <p className="whitespace-pre-wrap w-[150px]">{feedback}</p>
               )}
            </div>
         </td>
      </tr>
   );
};

export default MyClassTableRow;
