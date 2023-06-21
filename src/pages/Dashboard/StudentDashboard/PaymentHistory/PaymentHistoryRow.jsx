import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PaymentHistoryRow = ({ payment, number }) => {
   const { _id, img, class_id, class_name, amount, createdAt } = payment;
   return (
      <tr>
         <td className="pl-4">{number}</td>
         <td className="p-2 text-center whitespace-nowrap">
            <div className="flex items-center ml-2 w-fit">
               <div className="w-12 h-12 mr-2 sm:mr-3">
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
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-bold">${amount}</div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium text-green-500">
               {moment(createdAt).format("MMMM Do YYYY")}
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">
               <Link
                  className="bg-gray-300 hover:bg-gray-400 py-1.5 px-4 rounded-md mr-2"
                  to={`/class-details/${class_id}`}
               >
                  Details
               </Link>
            </div>
         </td>
      </tr>
   );
};

export default PaymentHistoryRow;
