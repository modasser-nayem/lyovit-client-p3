import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PopularClassCard = ({ singleClass }) => {
   const navigate = useNavigate();
   const { user } = useAuth();
   const { _id, class_name, img, seats, price } = singleClass;

   const handleClick = () => {
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
            navigate(`/class-details/${_id}`);
         }
      });
   };

   return (
      <div className="shadow-2xl p-2 relative group overflow-hidden">
         <img
            className="h-[250px] w-full overflow-hidden rounded-t-md group-hover:scale-110 duration-500"
            src={img}
            alt={class_name}
         />
         <div className="p-5 absolute left-0 bottom-[-100%] opacity-0 group-hover:bottom-0 group-hover:opacity-100 w-full h-full bg-black/70 transition-all duration-500 text-gray-100">
            <h2 className="text-2xl font-semibold pb-1">{class_name}</h2>
            <p className="font-semibold py-1">
               Available Seat:{" "}
               <span
                  className={`${
                     seats === 0
                        ? "text-red-600"
                        : seats < 5
                        ? "text-yellow-500"
                        : "text-green-500"
                  }`}
               >
                  {seats}
               </span>
            </p>
            <p className="text-xl font-bold">
               Price: <span className="">${price}</span>
            </p>
            <div className="flex items-center justify-center gap-5 mt-4 h-full pb-16">
               {user ? (
                  <Link
                     className="py-2 px-5 w-full text-center rounded-md text-white bg-teal-500 hover:bg-teal-600"
                     to={`/class-details/${_id}`}
                  >
                     View Details
                  </Link>
               ) : (
                  <button
                     className="relative bottom-0 py-2 px-5 w-full text-center rounded-md text-white bg-teal-500 hover:bg-teal-600"
                     onClick={() => handleClick("details")}
                  >
                     View Details
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default PopularClassCard;
