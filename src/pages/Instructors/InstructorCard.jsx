import React from "react";
import { RxDotFilled } from "react-icons/rx";

const InstructorCard = ({ singleInstructor }) => {
   const { _id, email, name, name_of_classes, number_of_classes, photoURL } =
      singleInstructor;
   console.log(singleInstructor);
   return (
      <div className="shadow-2xl">
         <div className="overflow-hidden  h-[200px]">
            <img
               className="w-full h-full hover:scale-110 duration-300 transition-all  "
               src={photoURL}
               alt={name}
            />
         </div>
         <div className="p-5">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="mb-2">Email: {email}</p>
            <p className="font-semibold">
               Number of Classes: {number_of_classes}
            </p>
            <ul>
               <p className="font-semibold">My Classes</p>
               {name_of_classes.map((className, i) => (
                  <li
                     key={i}
                     className="text-xs mt-1 ml-1 flex items-center gap-1"
                  >
                     <RxDotFilled className="" /> {className}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default InstructorCard;
