import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SelectTableRow from "./SelectTableRow";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MySelectedClasses = () => {
   const { user, loading } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const { refetch, data: selectedClasses = null } = useQuery({
      queryKey: ["select-classes", user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure.get(`my-selected-class`);
         return res.data.data;
      },
   });
   return (
      <div className="p-3">
         {selectedClasses === null ? (
            <h2 className="text-3xl font-semibold animate-pulse text-center pt-16">
               Loading...
            </h2>
         ) : selectedClasses.length === 0 ? (
            <h2 className="text-center text-2xl">
               There are currently no selected classes
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
                           <div className="text-base font-semibold text-center">
                              Instructor Name
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
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
                              Action
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                     {selectedClasses &&
                        selectedClasses.map((selectClass, i) => (
                           <SelectTableRow
                              key={selectClass._id}
                              selectClass={selectClass}
                              number={i + 1}
                              refetch={refetch}
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
