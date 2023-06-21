import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
   return (
      <div>
         <div className="pb-[11vh]">
            <Navbar />
         </div>
         <div className="min-h-[90vh]">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default MainLayout;
