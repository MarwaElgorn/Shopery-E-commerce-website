import React from "react";

export default function Features() {
  return (
    <div>
      <section className="features py-5">
        <div className="row">
          <div className="col-md-3 d-flex flex-row align-items-center">
            <div className="image me-2">
              <img
                src="../../public/images/features/delivery-truck 1.svg"
                alt=""
                className="img-fluid"
                style={{ width: "40px" }}
              />
            </div>
            <div className="content m-1">
              <h6 className="fw-bold mb-1">Free Shipping</h6>
              <p className="m-0" style={{ color: "#999999", fontSize: "14px" }}>
                Free shipping on all your order
              </p>
            </div>
          </div>

          <div className="col-md-3 d-flex flex-row align-items-center">
            <div className="image me-2">
              <img
                src="../../public/images/features/headphones 1.svg"
                alt=""
                className="img-fluid"
                style={{ width: "40px" }}
              />
            </div>
            <div className="content m-1">
              <h6 className="fw-bold mb-1">Customer Support 24/7</h6>
              <p className="m-0" style={{ color: "#999999", fontSize: "14px" }}>
                Instant access to Support
              </p>
            </div>
          </div>

          <div className="col-md-3 d-flex flex-row align-items-center">
            <div className="image me-2">
              <img
                src="../../public/images/features/Group.svg"
                alt=""
                className="img-fluid"
                style={{ width: "40px" }}
              />
            </div>
            <div className="content m-1">
              <h6 className="fw-bold mb-1">100% Secure Payment</h6>
              <p className="m-0" style={{ color: "#999999", fontSize: "14px" }}>
                We ensure your money is save
              </p>
            </div>
          </div>

          <div className="col-md-3 d-flex flex-row align-items-center">
            <div className="image me-2">
              <img
                src="../../public/images/features/Group (1).svg"
                alt=""
                className="img-fluid"
                style={{ width: "40px" }}
              />
            </div>
            <div className="content m-1">
              <h6 className="fw-bold mb-1">Money-Back Guarantee</h6>
              <p className="m-0" style={{ color: "#999999", fontSize: "14px" }}>
                30 Days Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
