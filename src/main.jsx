import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Users from "./components/users/Users.jsx";
import UserDetails from "./components/userDetails/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
