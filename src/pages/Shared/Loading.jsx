import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
   return (
      <div className="flex items-center justify-center">
         <h2 className="text-4xl font-semibold pt-24 animate-pulse flex items-end gap-2">
            Loading{" "}
            <AiOutlineLoading3Quarters className="text-3xl font-extrabold animate-spin" />
         </h2>
      </div>
   );
};

export default Loading;
