import React from "react";
import logo from "../../assets/logo/logo.svg";
import {
   FaFacebookF,
   FaGithub,
   FaGlobe,
   FaPhone,
   FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="bg-gray-800 text-white">
         <footer className="cs-container">
            <div className="footer p-10">
               <div>
                  <span className="footer-title">Contact information</span>
                  <a
                     href="https://alimodassernayem.web.app"
                     className="link link-hover flex items-center gap-1 hover:text-teal-600"
                  >
                     <FaGlobe /> Ali Modasser Nayem
                  </a>
                  <a className="link link-hover flex items-center gap-1 hover:text-teal-600">
                     <MdEmail /> mdalimodassernayem@gmail.com
                  </a>
                  <a className="link link-hover flex items-center gap-1 hover:text-teal-600">
                     <FaPhone /> +8801816090766
                  </a>
               </div>
               <div>
                  <span className="footer-title">Company</span>
                  <a className="link link-hover">About us</a>
                  <Link
                     to="/instructors"
                     className="link link-hover"
                  >
                     Instructors
                  </Link>
                  <Link
                     to="/classes"
                     className="link link-hover"
                  >
                     Classes
                  </Link>
               </div>
               <div>
                  <span className="footer-title">Legal</span>
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
               </div>
            </div>
            <div className="text-center mb-4">
               <p>
                  Copyright © 2023 - All right reserved by{" "}
                  <span className="text-teal-500">Lyovit.com</span>
               </p>
            </div>
         </footer>
         <footer className="cs-container footer px-10 py-4 border-t border-base-300">
            <div className="flex items-center justify-between">
               <img
                  className="h-[40px] text-teal-300 mr-2"
                  src={logo}
                  alt="toy house logo"
               />
               <p>
                  Lyovit.com
                  <br />
                  Providing reliable tech since 1992
               </p>
            </div>
            <div className="md:place-self-center md:justify-self-end">
               <div className="grid grid-flow-col gap-4 text-2xl">
                  <a href="https://github.com/modasser-nayem">
                     <FaGithub className="hover:text-teal-600" />
                  </a>
                  <a href="https://github.com/modasser-nayem">
                     <FaTwitter className="hover:text-teal-600" />
                  </a>
                  <a href="https://web.facebook.com/alimodassernayem">
                     <FaFacebookF className="hover:text-teal-600" />
                  </a>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
