import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import ManageClassRow from "./ManageClassRow";

const ManageClasses = () => {
   const { user, loading } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const { refetch, data: classes = null } = useQuery({
      queryKey: ["classes", user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure.get(`classes`);
         return res.data.data;
      },
   });
   return (
      <div className="p-3">
         {classes === null ? (
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
                           <div className="text-base font-semibold text-center">
                              Class Name
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Instructor
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
                              Details
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                     {classes &&
                        classes.map((singleClass, i) => (
                           <ManageClassRow
                              key={singleClass._id}
                              singleClass={singleClass}
                              refetch={refetch}
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

export default ManageClasses;
