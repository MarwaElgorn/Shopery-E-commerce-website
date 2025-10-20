import React from "react";
import Header from "./../Components/Header/Header";
import Footer from "./../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Sharedlayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* محتوى الصفحة ياخد كل المساحة الممكنة */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
