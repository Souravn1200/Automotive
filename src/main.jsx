import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Root from "./routes/root";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Addproduct from "./Components/Addproduct";

import About from "./Components/About";
import ProductCollection from "./Components/ProductCollection";
import AuthProvider from "./Components/Providers/AuthProvider";
import ProductEachDeatils from "./Components/ProductEachDeatils";

import Cart from "./Components/Cart";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('Products.json'),
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/addproduct",
        element: <Addproduct></Addproduct>
      },
      {
        path:"/cart",
        loader: ({params}) => fetch(`http://localhost:5000/cart${params.email}`),
        element: <Cart></Cart>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: '/products/:brand',
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`),
        element: <ProductCollection></ProductCollection>
      },
      {
        path: '/product/:id',
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <ProductEachDeatils></ProductEachDeatils>

      }
      
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