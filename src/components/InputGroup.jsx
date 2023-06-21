import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";

const InputGroup = ({
   register,
   name,
   validation,
   type,
   value,
   placeholder,
   errorMessage,
   defaultValue,
}) => {
   const [isSee, setIsSee] = useState(false);
   return (
      <div className="my-5 relative">
         <input
            {...register(name, validation)}
            type={isSee ? "text" : type}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            className={`w-full border-b focus:border-teal-500 focus:placeholder:text-teal-500 border-black outline-none py-2 pr-3 ${
               errorMessage && "border-red-500"
            }`}
         />
         {errorMessage && (
            <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
         )}
         {type === "password" && (
            <p
               onClick={() => setIsSee(!isSee)}
               className="absolute right-2 text-lg bottom-[30%]"
            >
               {isSee ? <FaEye /> : <AiFillEyeInvisible />}
            </p>
         )}
      </div>
   );
};

export default InputGroup;
