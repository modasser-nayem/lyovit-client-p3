import React from "react";
import logo from "../../assets/logo/educations_logo.png";
import {
   FaFacebookF,
   FaGithub,
   FaGlobe,
   FaPhone,
   FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
   return (
      <footer className="p-10 bg-neutral text-neutral-content">
         <div className="footer">
            <div>
               <img
                  src={logo}
                  alt="toy house logo"
               />
               <p>
                  Educations.com
                  <br />
                  Providing reliable tech since 1992
               </p>
            </div>
            <div>
               <span className="footer-title">Contact information</span>
               <a
                  href="https://alimodassernayem.web.app"
                  className="link link-hover flex items-center gap-1"
               >
                  <FaGlobe /> Ali Modasser Nayem
               </a>
               <a className="link link-hover flex items-center gap-1">
                  <MdEmail /> mdalimodassernayem@gmail.com
               </a>
               <a className="link link-hover flex items-center gap-1">
                  <FaPhone /> +8801816090766
               </a>
            </div>
            <div>
               <span className="footer-title">Social</span>
               <div className="grid grid-flow-col gap-4 text-3xl text-white">
                  <a href="https://github.com/modasser-nayem">
                     <FaGithub />
                  </a>
                  <a href="https://github.com/modasser-nayem">
                     <FaTwitter />
                  </a>
                  <a href="https://web.facebook.com/alimodassernayem">
                     <FaFacebookF />
                  </a>
               </div>
            </div>
         </div>
         <div className="mt-10 text-center">
            <p>Copyright © 2023 - All right reserved by Educations.com</p>
         </div>
      </footer>
   );
};

export default Footer;
