import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const SelectTableRow = ({ selectClass, number }) => {
   const { _id, img, class_name, instructor_name, price, seats } = selectClass;
   return (
      <tr>
         <td>{number}</td>
         <td className="p-2 whitespace-nowrap">
            <div className="flex items-center w-fit">
               <div className="w-12 h-12 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                     className="rounded-full h-full w-full"
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
            <div className="text-center text-lg capitalize">
               {instructor_name}
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
            <div className="text-center font-medium">
               <div>
                  <Link
                     className="btn btn-sm btn-ghost"
                     to={`/class-details/${_id}`}
                  >
                     Details
                  </Link>
                  <button className="ml-2">
                     <FaTrash />
                  </button>
               </div>
            </div>
         </td>
      </tr>
   );
};

export default SelectTableRow;
