import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
   return (
      <div className="cs-container">
         <Banner />
         <PopularClasses />
         <PopularInstructors />
      </div>
   );
};

export default Home;
