import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurImpact from "../OurImpact/OurImpact";

const Home = () => {
   return (
      <div className="cs-container">
         <Banner />
         <PopularClasses />
         <PopularInstructors />
         <OurImpact />
      </div>
   );
};

export default Home;
