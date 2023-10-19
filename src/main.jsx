import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./Pages/Home/Home";
import AddBrandInfo from "./Pages/BrandInfo/AddBrandInfo";
import CreatProduct from "./Pages/AddProduct/CreatProduct";
import BrandsDetails from "./Pages/BrandInfo/BrandsDetails";
import UpdateProduct from "./Pages/AddProduct/UpdateProduct";
import DetailProduct from "./Pages/AddProduct/DetailProduct";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
// import BrandDetails from "./Pages/BrandInfo/BrandDetails";

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
        loader: () => fetch("http://localhost:5000/cars"),
      },
      // {
      //   path: "/brands/:id",
      //   element: <BrandDetails></BrandDetails>,
      //   loader: () => fetch("http://localhost:5000/brands"),
      // },
      {
        path: "/addbrand",
        element: <AddBrandInfo></AddBrandInfo>,
      },
      {
        path: "brands/:brandName/updateCar/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/brands/:brandName/details/:id",
        element: <DetailProduct></DetailProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
