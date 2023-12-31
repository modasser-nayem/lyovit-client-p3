import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import EnrolledTableRow from "./EnrolledTableRow";

const MyEnrolledClasses = () => {
   const [enrolledClasses, setEnrolledClasses] = useState(null);
   const [axiosSecure] = useAxiosSecure();
   useEffect(() => {
      axiosSecure.get("my-enrolled-class").then((res) => {
         setEnrolledClasses(res.data.data);
      });
   }, []);
   return (
      <div className="p-3">
         {enrolledClasses === null ? (
            <h2 className="text-3xl font-semibold animate-pulse text-center pt-16">
               Loading...
            </h2>
         ) : enrolledClasses.length === 0 ? (
            <h2 className="text-center text-2xl">
               There are currently no enrolledClasses
            </h2>
         ) : (
            <div className="overflow-x-auto">
               <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-200 bg-teal-600">
                     <tr>
                        <th className="p-2 w-fit">
                           <div className="text-base font-semibold center">
                              #
                           </div>
                        </th>
                        <th className="p-2 w-fit">
                           <div className="text-base font-semibold text-center">
                              Class Name
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Instructor Name
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold center">
                              Price
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Seats
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Details
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                     {enrolledClasses &&
                        enrolledClasses.map((enrolledClass, i) => (
                           <EnrolledTableRow
                              key={enrolledClass._id}
                              enrolledClass={enrolledClass}
                              number={i + 1}
                           />
                        ))}
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
};

export default MyEnrolledClasses;
