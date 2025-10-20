import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Sharedlayout from "./Sharedlayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Createaccount from "../Pages/Createaccount/Createaccount";
import Cart from "../Pages/Cart/Cart";
import Notfound from "../Pages/Notfound/Notfound";
import Favorites from "./../Pages/Favorites/Favorites";
import Productdetails from "./../Pages/Poductdetails/Productdetails";
import UserProvider from "../Context/UserProvider";
import "/index.css";
import ShopProvider from "../Context/ShopProvider";
import ProtectedRoute from "./../ProtectedRoute/ProtectedRoute";
import CategoryProducts from './../Pages/CategoryProducts/CategoryProducts';

export default function Mainlayout() {
  return (
    <UserProvider>
      <ShopProvider>
        <BrowserRouter>
          <Routes>
            {/* جميع الصفحات داخل Sharedlayout */}
            <Route path="/" element={<Sharedlayout />}>
              <Route index element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="createaccount" element={<Createaccount />} />
   <Route path="CategoryProducts/:id" element={<CategoryProducts />} />
              <Route
                path="favorites"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Favorites />{" "}
                  </ProtectedRoute>
                }
              />
              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Cart />{" "}
                  </ProtectedRoute>
                }
              />

              <Route path="Productsdetails" element={<Productdetails />} />
              <Route path="*" element={<Notfound />} />
            </Route>

            {/* صفحة 404 */}
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </UserProvider>
  );
}
