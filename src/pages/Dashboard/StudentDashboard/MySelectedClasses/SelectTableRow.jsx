import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SelectTableRow = ({ selectClass, number, refetch }) => {
   const { _id, img, class_name, instructor_name, price, seats } = selectClass;

   const [axiosSecure] = useAxiosSecure();
   const deleteSelectClass = () => {
      axiosSecure
         .delete(`select-class/${_id}`)
         .then((res) => {
            if (res.data?.success) {
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
            if (!error.response?.data?.success) {
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
         <td className="pl-4">{number}</td>
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
            <div className="text-center font-bold">${price}</div>
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
                     className="bg-gray-300 hover:bg-gray-400 py-1.5 px-4 rounded-md mr-2"
                     to={`/class-details/${_id}`}
                  >
                     Details
                  </Link>
                  <Link
                     className="bg-yellow-500 hover:bg-yellow-600 py-1.5 px-4 rounded-md mr-2"
                     to={`/class-details/${_id}`}
                  >
                     Pay
                  </Link>
                  <button
                     onClick={deleteSelectClass}
                     className="ml-2"
                  >
                     <FaTrash className="text-red-700 hover:scale-125 duration-300 transition-all" />
                  </button>
               </div>
            </div>
         </td>
      </tr>
   );
};

export default SelectTableRow;
