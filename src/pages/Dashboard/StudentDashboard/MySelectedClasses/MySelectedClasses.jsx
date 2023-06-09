import React, { useEffect, useState } from "react";
import TableRow from "../../../Shared/Table/TableRow";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const MySelectedClasses = () => {
   const [selectedClasses, setSelectedClasses] = useState([]);
   const [axiosSecure] = useAxiosSecure();
   useEffect(() => {
      axiosSecure.get("my-selected-class").then((res) => {
         setSelectedClasses(res.data.data);
      });
   }, []);
   return (
      <div className="p-3">
         {selectedClasses.length === 0 ? (
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
                     {selectedClasses &&
                        selectedClasses.map((selectClass, i) => (
                           <TableRow
                              key={selectClass._id}
                              selectClass={selectClass}
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

export default MySelectedClasses;
