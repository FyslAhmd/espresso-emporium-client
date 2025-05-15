import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Context/AuthProvider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-store-server-roan-seven.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-roan-seven.vercel.app/coffees/${params.id}`),
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-roan-seven.vercel.app/coffees/${params.id}`),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/users",
        Component: Users,
        loader: () => fetch("https://coffee-store-server-roan-seven.vercel.app/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
