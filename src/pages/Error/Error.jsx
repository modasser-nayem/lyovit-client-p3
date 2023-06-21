import React from "react";
import errorImg from "../../assets/logo/404_page.jpg";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="text-center w-screen h-screen flex items-start justify-center bg-[#C7EBE9]">
         <div className="relative max-w-[600px] flex justify-center">
            <img
               className="w-full"
               src={errorImg}
               alt="page not found"
            />
            <Link
               to="/"
               className="absolute -bottom-10 py-2 px-5 text-white bg-teal-600 rounded-md hover:scale-90 duration-300"
            >
               Back Home
            </Link>
         </div>
      </div>
   );
};

export default Error;
