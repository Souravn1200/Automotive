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
import ProductUpdate from "./Components/ProductUpdate";
import PageNotFound from "./Components/PageNotFound";
import PrivateRoute from "./Components/Privateroute/PrivateRoute";



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
        element: <PrivateRoute><Addproduct></Addproduct></PrivateRoute>
      },
      {
        path:"/cart",
        loader: ({params}) => fetch(`https://automotive-server-theta.vercel.app/cart/${params.email}`),
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: '/products/:brand',
        loader: ({params}) => fetch(`https://automotive-server-theta.vercel.app/products/${params.brand}`),
        element: <ProductCollection></ProductCollection>
      },
      {
        path: '/product/:id',
        loader: ({params}) => fetch(`https://automotive-server-theta.vercel.app/product/${params.id}`),
        element: <PrivateRoute><ProductEachDeatils></ProductEachDeatils></PrivateRoute>

      },{
        path: '/update/:id',
        element: <ProductUpdate></ProductUpdate>,
        loader: ({params}) => fetch(`https://automotive-server-theta.vercel.app/product/${params.id}`)
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>
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