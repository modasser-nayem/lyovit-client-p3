import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentHistory = () => {
   const [paymentHistory, setPaymentHistory] = useState(null);
   const [axiosSecure] = useAxiosSecure();
   useEffect(() => {
      axiosSecure.get("payment-history").then((res) => {
         setPaymentHistory(res.data.data);
      });
   }, []);
   return (
      <div className="p-3">
         {paymentHistory === null ? (
            <h2 className="text-3xl font-semibold animate-pulse text-center pt-16">
               Loading...
            </h2>
         ) : paymentHistory.length === 0 ? (
            <h2 className="text-center text-2xl">
               There are currently no Payment History
            </h2>
         ) : (
            <div className="overflow-x-auto">
               <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-200 bg-teal-600">
                     <tr>
                        <th className="p-2 w-fit">
                           <div className="text-base font-semibold text-center">
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
                              Amount
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-center">
                              Paid At
                           </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                           <div className="text-base font-semibold text-left">
                              Details
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                     {paymentHistory &&
                        paymentHistory.map((payment, i) => (
                           <PaymentHistoryRow
                              key={payment._id}
                              payment={payment}
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
export default PaymentHistory;
