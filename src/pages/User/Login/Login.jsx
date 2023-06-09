import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputGroup from "../../../components/InputGroup";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcProcess } from "react-icons/fc";

const Login = () => {
   const [isAgree, setIsAgree] = useState(false);
   const [process, setProcess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const { loginCreatedUser } = useAuth();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      if (data) {
         const { email, password } = data;
         setProcess(true);
         loginCreatedUser({ email, password })
            .then(() => {
               setProcess(false);
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Successfully Login",
                  showConfirmButton: false,
                  timer: 1500,
               });
               navigate(location.state?.from?.pathname || "/", {
                  replace: true,
               });
               reset();
            })
            .catch((error) => {
               setProcess(false);
               Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: error.message.slice(22, -2),
                  showConfirmButton: false,
                  timer: 1500,
               });
            });
      }
   };
   return (
      <div>
         <h2 className="text-3xl text-gray-600 font-medium text-center mb-5">
            Sign In
         </h2>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[400px] p-10 mx-auto shadow-2xl"
         >
            <InputGroup
               name="email"
               type="email"
               placeholder="Enter Your email"
               errorMessage={errors?.email?.message}
               register={register}
               validation={{
                  required: "Please Enter Your email",
                  pattern: {
                     value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                     message: "Please enter a valid email",
                  },
               }}
            />
            <InputGroup
               name="password"
               type="password"
               placeholder="Enter Your password"
               errorMessage={errors?.password?.message}
               register={register}
               validation={{
                  required: "Please Enter a password",
               }}
            />
            <div>
               <input
                  onClick={() => setIsAgree(!isAgree)}
                  type="checkbox"
                  className="mr-2 my-5"
                  id="agree"
               />
               <label htmlFor="agree">Accept terms & policy</label>
            </div>
            <div className="flex items-center gap-5">
               {process ? (
                  <FcProcess className="text-2xl animate-spin" />
               ) : (
                  <input
                     disabled={!isAgree}
                     type="submit"
                     value="Submit"
                     className="py-2 px-5 cursor-pointer disabled:bg-blue-300 bg-blue-500 text-white rounded-md my-3"
                  />
               )}
               <Link
                  className="text-blue-600"
                  to="/register"
               >
                  New to? Register here
               </Link>
            </div>
         </form>
      </div>
   );
};

export default Login;
