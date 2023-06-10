import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import InputGroup from "../../../../components/InputGroup";
import { FcProcess } from "react-icons/fc";
import { useForm } from "react-hook-form";

const UpdateClass = () => {
   const [process, setProcess] = useState(false);
   const navigate = useNavigate();
   const { user } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      if (data) {
         const updateClass = {
            class_name: data.class_name,
            img: data.img,
            seats: parseInt(data.seats),
            price: parseFloat(data.price),
         };
         setProcess(true);
         axiosSecure
            .post(`/class/:id`, updateClass)
            .then((res) => {
               setProcess(false);
               reset();
               if (res.data.success) {
                  Swal.fire({
                     position: "center",
                     icon: "success",
                     title: "Class Create Successful",
                     showConfirmButton: false,
                     timer: 1500,
                  });
                  navigate("/dashboard/instructor-dashboard/my-classes", {
                     replace: true,
                  });
               } else {
                  Swal.fire({
                     position: "center",
                     icon: "warning",
                     title: "Class Create Failed!",
                     showConfirmButton: false,
                     timer: 1500,
                  });
               }
            })
            .catch((error) => {
               console.log(error);
               setProcess(false);
            });
      }
   };
   return (
      <div className="cs-container py-14">
         <h2 className="text-3xl text-gray-600 font-medium text-center mb-5">
            Add Class
         </h2>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[400px] bg-white p-10 mx-auto shadow-2xl"
         >
            <InputGroup
               name="class_name"
               type="text"
               placeholder="Enter Your class name"
               errorMessage={errors?.class_name?.message}
               register={register}
               validation={{
                  required: "Please Enter Your class name",
               }}
            />
            <InputGroup
               name="img"
               type="text"
               placeholder="Enter Your img URL"
               errorMessage={errors?.img?.message}
               register={register}
               validation={{
                  required: "Please enter img link",
               }}
            />
            <InputGroup
               name="seats"
               type="text"
               placeholder="Enter Your seat number"
               errorMessage={errors?.seats?.message}
               register={register}
               validation={{
                  required: "Please enter Your seat number",
               }}
            />
            <InputGroup
               name="price"
               type="text"
               placeholder="Enter Your class price number"
               errorMessage={errors?.price?.message}
               register={register}
               validation={{
                  required: "Please enter class price",
               }}
            />
            <div className="flex items-center gap-5">
               {process ? (
                  <FcProcess className="text-2xl animate-spin" />
               ) : (
                  <input
                     type="submit"
                     value="Submit"
                     className="py-2 px-5 cursor-pointer disabled:bg-gray-400 bg-teal-600 text-white rounded-md my-3"
                  />
               )}
            </div>
         </form>
      </div>
   );
};

export default UpdateClass;
