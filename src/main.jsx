import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop.jsx';
import Home from './component/Layout/Home.jsx';
import Orders from './component/Orders/Orders.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import Login from './component/Login/Login.jsx';
import NotFound from './component/NotFound/NotFound.jsx';
import cartProductsLoader from './loaders/cartProductsLoader.js';
import Checkout from './component/Checkout/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
