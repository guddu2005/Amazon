import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import ProductView from "./components/ProductView";
import Payment from "./components/Payment";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ProductProvider } from "./context/ProductContext"
import Account from "./Pages/Account";
import AddressForm from "./Pages/Address";
import AddressList from "./Pages/addressView";
import { AddressProvider } from "./context/AddressContext";
import OrderPage from "./Pages/Orderpage";
import ReviewForm from "./Pages/ReviewfForm";
import { CartProvider } from "./context/CartContext";


function App() {

  const [showHomepage, setShowHomepage] = useState(true); // Default is true

  const toggleHomepage = () => {
    setShowHomepage(!showHomepage);
  };
  const { _id } = useParams();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar toggle={toggleHomepage} show={showHomepage} />
        {showHomepage && <Homepage />}
        <Footer /></>
    },
    {
      path: "/product",
      element: <><ProductPage /><Footer /></>
    },
    {
      path: "/cart",
      element: <><NavBar /><Cart /><Footer /></>
    },
    {
      path: `/view/:_id`,
      element: <><NavBar /><ProductView /><Footer /></>
    }, {
      path: "/payment",
      element: <><Payment /></>
    },
    {
      path: "/login",
      element: <><Login /></>
    }, {
      path: "/signup",
      element: <><Signup /></>
    },
    {
      path: "/account",
      element: <> <NavBar /><Account /><Footer /></>
    }
    ,
    {
      path: "/address",
      element: <> <NavBar /><AddressList /><Footer /></>
    },
    {
      path: "/addaddress",
      element: <> <NavBar /><AddressForm /><Footer /></>
    },
    {
      path: "/orders",
      element: <> <NavBar /><OrderPage /><Footer /></>
    },
    {
      path: "/review",
      element: <> <NavBar /><ReviewForm /><Footer /></>
    }

  ])
  return (
    <div className="bg-gray-100">
      <CartProvider>
        <AddressProvider>
          <ProductProvider>
            <RouterProvider router={router} />
          </ProductProvider>
        </AddressProvider>
      </CartProvider>
    </div>
  );
}

export default App;
