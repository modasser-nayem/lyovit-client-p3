import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../main";
import CountUp from "react-countup";

const OurImpact = () => {
   const [impacts, setImpacts] = useState(null);
   useEffect(() => {
      axios
         .get(`${server}/impacts`)
         .then((res) => {
            setImpacts(res.data.data);
         })
         .catch((error) => {
            console.log(error);
            setImpacts([]);
         });
   }, []);
   return (
      <div className="py-24">
         <h2 className="w-fit px-5 py-2 text-2xl md:text-3xl text-gray-600 font-semibold text-center border-b-4 border-b-teal-600 mx-auto">
            Our Impact
         </h2>
         {!impacts ? (
            <h2 className="mt-24 text-2xl text-center animate-pulse">
               Loading...
            </h2>
         ) : (
            <div className="mt-16 max-w-[700px] mx-auto flex gap-5 items-center justify-around bg-teal-200 p-5 md:p-10 rounded-md">
               <div className="text-center">
                  <h2 className="text-4xl font-bold">
                     <CountUp
                        enableScrollSpy
                        start={0}
                        end={impacts.totalStudents}
                        duration={2}
                     />
                     +
                  </h2>
                  <h3 className="text-xl font-semibold">Students</h3>
               </div>
               <div className="text-center">
                  <h2 className="text-4xl font-bold">
                     <CountUp
                        enableScrollSpy
                        start={0}
                        end={impacts.totalClasses}
                        duration={2}
                     />
                     +
                  </h2>
                  <h3 className="text-xl font-semibold">Classes</h3>
               </div>
               <div className="text-center">
                  <h2 className="text-4xl font-bold">
                     <CountUp
                        enableScrollSpy
                        start={0}
                        end={impacts.totalInstructors}
                        duration={2}
                     />
                     +
                  </h2>
                  <h3 className="text-xl font-semibold">Instructor</h3>
               </div>
            </div>
         )}
      </div>
   );
};

export default OurImpact;
