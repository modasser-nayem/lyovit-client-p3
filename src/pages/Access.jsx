import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Access = () => {
   const [axiosSecure] = useAxiosSecure();
   const [access, setAccess] = useState("");
   useEffect(() => {
      axiosSecure.get("/access").then((res) => {
         setAccess(res.data.message);
      });
   }, []);
   return (
      <div>
         <h2 className="text-3xl">{access && access}</h2>
      </div>
   );
};

export default Access;
