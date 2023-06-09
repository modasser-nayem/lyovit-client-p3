import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const TableRow = ({ selectClass, number }) => {
   const navigate = useNavigate();
   const { user } = useAuth();
   const { _id, img, class_name, instructor_name, price, seats } = selectClass;
   const handleDetailsClick = () => {
      Swal.fire({
         title: "See You Details!",
         text: "You have to log in first to view details",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Login",
      }).then((result) => {
         if (result.isConfirmed) {
            navigate(`/toy-details/${_id}`);
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
                     className="rounded-full"
                     src={img}
                     width="60"
                     height="60"
                     alt={class_name}
                  />
               </div>
               <div className="font-medium text-gray-800">
                  <h2 className="text-lg pt-1">{class_name}</h2>
               </div>
            </div>
         </td>
         <td className="p-2 font-medium whitespace-nowrap">
            <div className="text-center text-lg">{instructor_name}</div>
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
            <div className="text-center font-medium">
               {user ? (
                  <Link
                     className="btn btn-sm btn-ghost"
                     to={`/toy-details/${_id}`}
                  >
                     Details
                  </Link>
               ) : (
                  <button
                     onClick={handleDetailsClick}
                     className="btn btn-sm btn-ghost"
                  >
                     Details
                  </button>
               )}
            </div>
         </td>
      </tr>
   );
};

export default TableRow;
