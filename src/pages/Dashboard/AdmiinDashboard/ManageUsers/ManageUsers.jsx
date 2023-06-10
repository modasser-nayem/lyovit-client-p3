import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageUserRow from "./ManageUserRow";

const ManageUsers = () => {
   const [users, setUsers] = useState(null);
   const [axiosSecure] = useAxiosSecure();
   useEffect(() => {
      axiosSecure.get("users").then((res) => {
         setUsers(res.data.data);
      });
   }, []);
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
                              key={users._id}
                              user={user}
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

export default ManageUsers;
