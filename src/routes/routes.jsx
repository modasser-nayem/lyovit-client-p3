import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import PrivateRoute from "../routes/PrivateRouter";
import Profile from "../pages/User/Profile/Profile";
import UpdateProfile from "../pages/User/UpdateProfile/UpdateProfile";
import Register from "../pages/User/Register/Register";
import Login from "../pages/User/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDashboard from "../pages/Dashboard/AdmiinDashboard/AdminDashboard";
import StudentDashboard from "../pages/Dashboard/StudentDashboard/StudentDashboard";
import InstructorDashboard from "../pages/Dashboard/InstructorDashboard/InstructorDashboard";
import ManageUsers from "../pages/Dashboard/AdmiinDashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/AdmiinDashboard/ManageClasses/ManageClasses";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import UpdateClass from "../pages/Dashboard/InstructorDashboard/UpdateClass/UpdateClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import MySelectedClasses from "../pages/Dashboard/StudentDashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses/MyEnrolledClasses";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import ClassDetails from "../pages/ClassDetails/ClassDetails";
import StudentPrivateRoute from "./StudentPrivateRoute";
import InstructorPrivateRoute from "./InstructorPrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Payment from "../pages/Dashboard/StudentDashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";

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
            path: "/instructors",
            element: <Instructors />,
         },
         {
            path: "/classes",
            element: <Classes />,
         },
         {
            path: "class-details/:id",
            element: (
               <PrivateRoute>
                  <ClassDetails />,
               </PrivateRoute>
            ),
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
      ],
   },
   {
      path: "dashboard",
      element: (
         <PrivateRoute>
            <DashboardLayout />
         </PrivateRoute>
      ),
      errorElement: <Error />,
      children: [
         {
            path: "admin-dashboard",
            element: (
               <AdminPrivateRoute>
                  <AdminDashboard />
               </AdminPrivateRoute>
            ),
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
            path: "instructor-dashboard",
            element: (
               <InstructorPrivateRoute>
                  <InstructorDashboard />
               </InstructorPrivateRoute>
            ),
            children: [
               { path: "add-class", element: <AddClass /> },
               {
                  path: "update-class/:id",
                  element: <UpdateClass />,
               },
               { path: "my-classes", element: <MyClasses /> },
            ],
         },
         {
            path: "student-dashboard",
            element: (
               <StudentPrivateRoute>
                  <StudentDashboard />
               </StudentPrivateRoute>
            ),
            children: [
               { path: "my-selected-classes", element: <MySelectedClasses /> },
               {
                  path: "my-enrolled-classes",
                  element: <MyEnrolledClasses />,
               },
               { path: "payment/:id", element: <Payment /> },
               { path: "payment-history", element: <PaymentHistory /> },
            ],
         },
      ],
   },
]);
