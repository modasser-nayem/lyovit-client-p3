import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
   const [classes, setClasses] = useState(null);
   useEffect(() => {});
   return (
      <div className="py-24">
         <h2 className="w-fit px-5 py-2 text-2xl md:text-3xl text-gray-600 font-semibold text-center border-b-4 border-b-teal-600 mx-auto">
            Popular Instructor
         </h2>
         {!classes ? (
            <h2 className="mt-24 text-2xl text-center animate-pulse">
               Loading...
            </h2>
         ) : (
            <div></div>
         )}
      </div>
   );
};

export default PopularInstructors;
