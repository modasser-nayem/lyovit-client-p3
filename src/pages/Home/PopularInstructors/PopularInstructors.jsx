import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../main";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
   const [instructors, setInstructors] = useState(null);
   useEffect(() => {
      axios
         .get(`${server}/instructors`)
         .then((res) => {
            setInstructors(res.data.data.slice(0, 6));
         })
         .catch((error) => {
            console.log(error);
            setInstructors([]);
         });
   }, []);
   return (
      <div className="pt-24">
         <h2 className="w-fit px-5 py-2 text-2xl md:text-3xl text-gray-600 font-semibold text-center border-b-4 border-b-teal-600 mx-auto">
            Popular Instructor
         </h2>
         {!instructors ? (
            <h2 className="mt-24 text-2xl text-center animate-pulse">
               Loading...
            </h2>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 mt-10">
               {instructors.map((instructor) => (
                  <PopularInstructorCard
                     key={instructor._id}
                     instructor={instructor}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default PopularInstructors;
