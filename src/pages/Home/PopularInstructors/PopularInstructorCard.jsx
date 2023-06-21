import React from "react";
import { RxDotFilled } from "react-icons/rx";

const PopularInstructorCard = ({ instructor }) => {
   const { photoURL, name, number_of_classes, name_of_classes } = instructor;
   return (
      <div className="border-2 hover:shadow-2xl hover:border-0 duration-200 transition-all p-5">
         <img
            className="w-[150px] h-[150px] rounded-full mx-auto"
            src={photoURL}
            alt={name}
         />
         <div className="">
            <h2 className="text-xl font-semibold text-center pt-5">{name}</h2>
            <p className="text-center">Number of class: {number_of_classes}</p>
            <ul>
               <p className="font-semibold">Classes</p>
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

export default PopularInstructorCard;
