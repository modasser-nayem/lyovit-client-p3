import React from "react";

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
   return (
      <div className="my-5">
         <input
            {...register(name, validation)}
            type="text"
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
      </div>
   );
};

export default InputGroup;
