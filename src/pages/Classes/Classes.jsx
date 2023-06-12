import React, { useEffect, useState } from "react";
import { server } from "../../main";
import PopularClassCard from "../Home/PopularClasses/PopularClassCard";
import axios from "axios";

const Classes = () => {
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
      <div className="cs-container pt-16">
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

export default Classes;
