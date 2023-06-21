import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../main";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
   const [classes, setClasses] = useState(null);
   useEffect(() => {
      axios
         .get(`${server}/popular-classes`)
         .then((res) => {
            setClasses(res.data.data);
         })
         .catch((error) => {
            console.log(error);
            setClasses([]);
         });
   }, []);
   return (
      <div className="pt-24">
         <h2 className="w-fit px-5 py-2 text-2xl md:text-3xl text-gray-600 font-semibold text-center border-b-4 border-b-teal-600 mx-auto">
            Popular Classes
         </h2>
         {!classes ? (
            <h2 className="mt-24 text-2xl text-center animate-pulse">
               Loading...
            </h2>
         ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {classes.map((singleClass) => (
                  <PopularClassCard
                     key={singleClass._id}
                     singleClass={singleClass}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default PopularClasses;
