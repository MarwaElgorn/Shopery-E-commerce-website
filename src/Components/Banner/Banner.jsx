import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="banner py-5">
        <div
          className="row justify-content-between align-items-center m-auto"
          style={{ maxHeight: "600px" }}
        >
          <div className="col-md-8">
            <img
              src="../../public/images/Banner/bannarbig.svg"
              alt="Banner Big"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <img
              src="../../public/images/Banner/bannar.svg"
              alt="Banner 1"
              className="img-fluid mb-3"
            />
            <img
              src="../../public/images/Banner/bannar1.svg"
              alt="Banner 2"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
