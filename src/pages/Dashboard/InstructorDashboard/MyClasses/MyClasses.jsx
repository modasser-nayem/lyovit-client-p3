import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import MyClassTableRow from "./MyClassTableRow";

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
         ) : myClasses.length === 0 ? (
            <h2 className="text-center text-2xl">
               There are currently no classes
            </h2>
         ) : (
            <div className="overflow-x-auto">
               <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-200 bg-teal-600">
                     <tr>
                        <th className="p-2 w-fit">
                           <div className="text-base font-semibold text-center pl-2">
                              #
                           </div>
                        </th>
                        <th className="p-2 w-fit">
                           <div className="text-base font-semibold text-center">
                              Class Name
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
                              Enrolled
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Status
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Action
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Feedback
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                     {myClasses &&
                        myClasses.map((myClasses, i) => (
                           <MyClassTableRow
                              key={myClasses._id}
                              myClass={myClasses}
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
