import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import EnrolledTableRow from "../../../Shared/EnrolledTableRow";

const MyClasses = () => {
   const [myClasses, setMyClasses] = useState(null);
   const [axiosSecure] = useAxiosSecure();
   useEffect(() => {
      axiosSecure.get("my-classes").then((res) => {
         setMyClasses(res.data.data);
      });
   }, []);
   return (
      <div className="p-3">
         {myClasses === null ? (
            <h2 className="text-3xl font-semibold animate-pulse text-center pt-16">
               Loading...
            </h2>
         ) : (
            <div className="overflow-x-auto">
               <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                     <tr>
                        <th className="p-2 w-fit">
                           <div className="text-base font-semibold text-left">
                              #
                           </div>
                        </th>
                        <th className="p-2 w-fit">
                           <div className="text-base font-semibold text-left">
                              Class Name
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Instructor Name
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-left">
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
                     {myClasses &&
                        myClasses.map((myClasses, i) => (
                           <EnrolledTableRow
                              key={myClasses._id}
                              enrolledClass={myClasses}
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
export default MyClasses;
