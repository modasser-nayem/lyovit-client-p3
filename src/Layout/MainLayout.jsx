import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
   return (
      <div>
         <Toaster />
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
