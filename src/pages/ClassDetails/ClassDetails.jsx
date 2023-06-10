import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const ClassDetails = () => {
   const id = useParams();
   const [axiosSecure] = useAxiosSecure();
   const [classDetail, setClassDetails] = useState({});
   useEffect(() => {
      axiosSecure.get(`class/${id.id}`).then((res) => {
         setClassDetails(res.data.data);
      });
   }, []);
   const {
      _id,
      class_name,
      img,
      instructor_name,
      instructor_email,
      seats,
      price,
      enrolled_students,
   } = classDetail;
   return (
      <div className="cs-container py-14">
         <div className="max-w-[800px] mx-auto grid md:grid-cols-2 gap-5 justify-center">
            <div className="">
               <img
                  className="max-w-full h-full"
                  src={img}
                  alt={class_name}
               />
            </div>
            <div>
               <h2 className="text-3xl font-semibold mb-4">{class_name}</h2>
               <p className="text-xl text-gray-600">
                  Price:{" "}
                  <span className="font-semibold text-black">${price}</span>
               </p>
               <p className="text-xl text-gray-600">
                  Available Seats:{" "}
                  <span className="font-semibold text-black">{seats}</span>
               </p>
               <p className="my-4 font-semibold">
                  Total Enrolled Student:{" "}
                  <span className="text-black">{enrolled_students}</span>
               </p>
               <div className="mt-5">
                  <p className="font-semibold">
                     Instructor Name:{" "}
                     <span className="font-normal">{instructor_name}</span>{" "}
                  </p>
                  <p className="font-semibold">
                     Instructor Email:{" "}
                     <span className="font-normal">{instructor_email}</span>{" "}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClassDetails;
