import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
   baseURL: "http://localhost:4000",
});

const useAxiosSecure = () => {
   const { logoutUser } = useAuth();
   const navigate = useNavigate();
   useEffect(() => {
      // request
      axiosSecure.interceptors.request.use(function (config) {
         const token = localStorage.getItem("access-token");
         if (token) {
            config.headers.Authorization = token;
         }
         return config;
      });

      // response
      axiosSecure.interceptors.response.use(
         (response) => response,
         async (error) => {
            if (
               error.response &&
               (error.response.status === 401 || error.response.status === 403)
            ) {
               await logoutUser("");
               navigate("/login", { replace: true });
            }
            return Promise.reject(error);
         }
      );
   }, []);
   return [axiosSecure];
};

export default useAxiosSecure;
