import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import axios from "axios";
import { server } from "../../main";

const Instructors = () => {
   const [instructor, setInstructor] = useState(null);
   useEffect(() => {
      axios
         .get(`${server}/instructors`)
         .then((res) => {
            setInstructor(res.data.data);
         })
         .catch((error) => {
            console.log(error);
            setInstructor([]);
         });
   }, []);
   return (
      <div className="cs-container py-12">
         {!instructor ? (
            <h2 className="mt-24 text-2xl text-center animate-pulse">
               Loading...
            </h2>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
               {instructor.map((singleInstructor) => (
                  <InstructorCard
                     key={singleInstructor._id}
                     singleInstructor={singleInstructor}
                  />
               ))}
            </div>
         )}
      </div>
   );
};
export default Instructors;
