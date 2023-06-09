import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import AuthProvider from "./provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
export const server = "http://localhost:4000";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>
);
