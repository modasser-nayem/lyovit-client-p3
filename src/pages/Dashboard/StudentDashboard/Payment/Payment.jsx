import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Payment = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [axiosSecure] = useAxiosSecure();
   const [classDetail, setClassDetails] = useState({});

   useEffect(() => {
      axiosSecure.get(`class/${id}`).then((res) => {
         setClassDetails(res.data.data);
      });
   }, []);
   const { _id, class_name, instructor_name, img, price, seats } = classDetail;

   const handlePayment = () => {
      axiosSecure
         .post("payment", { class_id: _id, class_name, img, amount: price })
         .then((res) => {
            if (res.data?.success) {
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: res.data.message,
                  showConfirmButton: false,
                  timer: 1500,
               });
               navigate("/dashboard/student-dashboard/my-enrolled-classes", {
                  replace: true,
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
      <div className="">
         <div className="max-w-fit md:max-w-[500px] mx-auto flex flex-col md:flex-row justify-between gap-2 md:gap-5 border-2 border-teal-500 rounded-md p-3">
            <div className="flex flex-col md:flex-row gap-5">
               <img
                  className="w-full h-[100px] md:w-[80px] md:h-[80px]"
                  src={img}
                  alt={class_name}
               />
               <div>
                  <h2 className="text-2xl font-semibold">{class_name}</h2>
                  <p className="font-semibold">Instructor: {instructor_name}</p>
                  <p>Available Seat: {seats}</p>
               </div>
            </div>
            <div className="">
               <p className="text-xl font-semibold pb-3">Price: ${price}</p>
               <Link
                  className="bg-gray-300 hover:bg-gray-400 py-1.5 px-4 rounded-md mr-2"
                  to={`/class-details/${_id}`}
               >
                  Details
               </Link>
            </div>
         </div>
         <div className="text-center mt-16">
            <button
               onClick={handlePayment}
               className="py-2 px-3 bg-yellow-500 hover:bg-yellow-600 rounded-md font-medium"
            >
               Check Out
            </button>
         </div>
      </div>
   );
};

export default Payment;
