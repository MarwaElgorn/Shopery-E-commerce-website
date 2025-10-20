import React from "react";

export default function Deals() {
  return (
    <div>
      <section className=" deals py-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="../../public/images/deals/first.svg"
              alt="vegetables deals"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-4">
            <img
              src="../../public/images/deals/second.svg"
              alt="meat deals"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-4">
            <img
              src="../../public/images/deals/third.svg"
              alt="fruits deals"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
