import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "../../../components/InputGroup";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcProcess } from "react-icons/fc";

const UpdateProfile = () => {
   const [process, setProcess] = useState(false);
   const navigate = useNavigate();
   const { user, updateUserProfile } = useAuth();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      if (data) {
         const { name, photoURL } = data;
         setProcess(true);
         updateUserProfile({ user, name, photoURL })
            .then(() => {
               setProcess(false);
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Update Successful",
                  showConfirmButton: false,
                  timer: 1500,
               });
               navigate("/profile", {
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
            Update Profile
         </h2>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[400px] p-10 mx-auto shadow-2xl"
         >
            <InputGroup
               name="name"
               type="text"
               placeholder="Enter Your Name"
               defaultValue={user?.displayName}
               errorMessage={errors?.name?.message}
               register={register}
               validation={{
                  required: "Please Enter Your Name",
                  minLength: {
                     value: 4,
                     message: "The name must be greater than 4 character",
                  },
                  maxLength: {
                     value: 30,
                     message: "The name must be less than 30 character",
                  },
               }}
            />
            <InputGroup
               name="photoURL"
               type="photoURL"
               defaultValue={user?.photoURL}
               placeholder="Enter Your photoURL"
               errorMessage={errors?.photoURL?.message}
               register={register}
               validation={{
                  required: "Please Enter a photoURL",
               }}
            />
            <div className="flex items-center justify-end gap-5">
               <Link
                  className="py-2 px-5 cursor-pointer disabled:bg-blue-300 bg-gray-500 text-white rounded-md my-3"
                  to="/profile"
               >
                  Cancel
               </Link>
               {process ? (
                  <FcProcess className="text-2xl animate-spin" />
               ) : (
                  <input
                     type="submit"
                     value="Update"
                     className="py-2 px-5 cursor-pointer disabled:bg-blue-300 bg-blue-500 text-white rounded-md my-3"
                  />
               )}
            </div>
         </form>
      </div>
   );
};

export default UpdateProfile;
