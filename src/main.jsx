import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./Pages/Home/Home";
import AddBrandInfo from "./Pages/BrandInfo/AddBrandInfo";
import CreatProduct from "./Pages/AddProduct/CreatProduct";
import BrandsDetails from "./Pages/BrandInfo/BrandsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/addProducts",
        element: <CreatProduct></CreatProduct>,
      },
      {
        path: "/brands/:brandName",
        element: <BrandsDetails></BrandsDetails>,
        // loader: () => fetch("http://localhost:5000/brands"),
        loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "/addbrand",
        element: <AddBrandInfo></AddBrandInfo>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
