import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ClassCard = ({ singleClass }) => {
   const navigate = useNavigate();
   const { user } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const {
      _id,
      class_name,
      img,
      instructor_name,
      enrolled_students,
      seats,
      price,
   } = singleClass;

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
      axiosSecure
         .post(`/select-class/${_id}`)
         .then((res) => {
            if (res.data?.success) {
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
      <div className="shadow-2xl relative">
         <img
            className="h-[250px] w-full rounded-t-md"
            src={img}
            alt={class_name}
         />
         <div className="p-5">
            <h2 className="text-2xl font-semibold pb-1">{class_name}</h2>
            <p className="font-semibold">Instructor Name: {instructor_name}</p>
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
            <p className="font-semibold pb-1">
               Enrolled:{" "}
               <span className="text-violet-600">{enrolled_students}</span>
            </p>
            <p className="text-xl text-gray-600 font-bold">
               Price: <span className="text-black">${price}</span>
            </p>
            <div className="flex items-center justify-start gap-5 mt-4">
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
                     disabled={user.role !== "student" || seats === 0}
                     className="py-2 px-5 rounded-md bg-teal-500 hover:bg-teal-600 text-white disabled:bg-gray-300"
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
         {seats === 0 && (
            <div className="absolute bottom-0 w-full h-full bg-red-400 opacity-40"></div>
         )}
      </div>
   );
};

export default ClassCard;
