import React from "react";

const Table = () => {
   return (
      <div className="p-3">
         <div className="overflow-x-auto">
            <table className="table-auto w-full">
               <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                     <th className="p-2 w-fit">
                        <div className="text-base font-semibold text-left">
                           Product Name
                        </div>
                     </th>
                     <th className="p-2 whitespace-nowrap">
                        <div className="text-base font-semibold text-left">
                           Seller
                        </div>
                     </th>
                     <th className="p-2 whitespace-nowrap">
                        <div className="text-base font-semibold text-left">
                           Price
                        </div>
                     </th>
                     <th className="p-2 whitespace-nowrap">
                        <div className="text-base font-semibold text-center">
                           Quantity
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
                  {toys &&
                     toys.map((toy) => (
                        <AllToyRow
                           key={toy._id}
                           toy={toy}
                        />
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Table;
