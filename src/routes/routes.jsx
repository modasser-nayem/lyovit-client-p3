import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "../routes/PrivateRouter";
import Profile from "../pages/User/Profile/Profile";
import UpdateProfile from "../pages/User/UpdateProfile/UpdateProfile";
import Register from "../pages/User/Register/Register";
import Login from "../pages/User/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDashboard from "../pages/Dashboard/AdmiinDashboard/AdminDashboard";
import Access from "../pages/Access";
import StudentDashboard from "../pages/Dashboard/StudentDashboard/StudentDashboard";
import InstructorDashboard from "../pages/Dashboard/InstructorDashboard/InstructorDashboard";
import ManageUsers from "../pages/Dashboard/AdmiinDashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/AdmiinDashboard/ManageClasses/ManageClasses";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "product-details/:id",
            element: <ProductDetails />,
         },
         {
            path: "register",
            element: <Register />,
         },
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "profile",
            element: (
               <PrivateRoute>
                  <Profile />
               </PrivateRoute>
            ),
         },
         {
            path: "update-profile",
            element: (
               <PrivateRoute>
                  <UpdateProfile />,
               </PrivateRoute>
            ),
         },
         {
            path: "access",
            element: (
               <PrivateRoute>
                  <Access />,
               </PrivateRoute>
            ),
         },
      ],
   },
   {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
         {
            path: "admin-dashboard",
            element: <AdminDashboard />,
            children: [
               {
                  path: "manage-users",
                  element: <ManageUsers />,
               },
               {
                  path: "manage-classes",
                  element: <ManageClasses />,
               },
            ],
         },
         {
            path: "user-dashboard",
            element: <InstructorDashboard />,
         },
         {
            path: "user-dashboard",
            element: <StudentDashboard />,
         },
      ],
   },
]);
