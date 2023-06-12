import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PopularClassCard = ({ singleClass }) => {
   const navigate = useNavigate();
   const { user } = useAuth();
   const { _id, class_name, img, instructor_name, seats, price } = singleClass;

   const handleClick = (text) => {
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
            if (text === "details") {
               navigate(`/class-details/${_id}`);
            } else {
               navigate("/login");
            }
         }
      });
   };

   const handleSelect = () => {
      console.log("select");
   };
   return (
      <div className="shadow-2xl">
         <img
            className="h-[250px] w-full rounded-t-md"
            src={img}
            alt={class_name}
         />
         <div className="p-5">
            <h2 className="text-2xl font-semibold pb-1">{class_name}</h2>
            <p className="font-semibold">Instructor: {instructor_name}</p>
            <p className="font-semibold py-1">
               Seat:{" "}
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
            <p className="text-xl text-gray-600 font-bold">
               Price: <span className="text-black">${price}</span>
            </p>
            <div className="flex items-center justify-end gap-5 mt-4">
               {user ? (
                  <Link
                     className="py-2 px-5 rounded-md bg-gray-300 hover:bg-gray-400"
                     to={`/class-details/${_id}`}
                  >
                     Details
                  </Link>
               ) : (
                  <button
                     className="py-2 px-5 rounded-md bg-gray-300 hover:bg-gray-400"
                     onClick={() => handleClick("details")}
                  >
                     Details
                  </button>
               )}
               {user ? (
                  <button
                     className="py-2 px-5 rounded-md bg-teal-500 hover:bg-teal-600 text-white"
                     onClick={handleSelect}
                  >
                     Select
                  </button>
               ) : (
                  <button
                     className="py-2 px-5 rounded-md bg-teal-500 hover:bg-teal-600 text-white"
                     onClick={() => handleClick("select")}
                  >
                     Select
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default PopularClassCard;
