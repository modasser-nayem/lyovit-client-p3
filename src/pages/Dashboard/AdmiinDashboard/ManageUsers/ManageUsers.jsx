import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageUserRow from "./ManageUserRow";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";

const ManageUsers = () => {
   const { user, loading } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const { refetch, data: users = null } = useQuery({
      queryKey: ["users", user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure.get(`users`);
         return res.data.data;
      },
   });
   return (
      <div className="p-3">
         {users === null ? (
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
                              Name
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Role
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
                     {users &&
                        users.map((user, i) => (
                           <ManageUserRow
                              key={i}
                              user={user}
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

export default ManageUsers;
