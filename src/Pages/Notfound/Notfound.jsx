import React from "react";
import NotFoundImage from "../../../public/x34 04.svg";

export default function Notfound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <img src={NotFoundImage} alt="Not Found" className="img-fluid mb-4" />
        <h1>Oops! Page not found</h1>
        <p>
          Our store offers fresh and sustainable products sourced from trusted
          farms. <br /> We focus on quality, health, and customer satisfaction
          every day.
        </p>
      </div>
    </div>
  );
}
