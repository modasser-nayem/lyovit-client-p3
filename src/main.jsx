import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import AuthProvider from "./provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const server = "https://lyovit.onrender.com";
import { router } from "./routes/routes";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
         </QueryClientProvider>
      </AuthProvider>
   </React.StrictMode>
);
