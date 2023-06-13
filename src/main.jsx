import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const server = "http://localhost:4000";
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
