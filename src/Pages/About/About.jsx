import React from "react";
import { PiLeafThin } from "react-icons/pi";
import { GiPolarStar } from "react-icons/gi";
import { FiCheck } from "react-icons/fi";
import { LuTruck, LuHeadphones, LuLock, LuBox } from "react-icons/lu";
import { SiComma } from "react-icons/si";
import Vector from "./../../Components/Vector/Vector";

export default function About() {
  return (
    <>
      <section className="first py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="content col-md-6">
              <h2 className="fw-bold fs-1">
                100% Trusted <br /> Organic Food Store
              </h2>
              <p className="mt-4">
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>

            <div className="img col-md-6">
              <img
                className="img-fluid w-100 rounded"
                src="../../public/images/about/image (1).svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="second py-5 position-relative">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="img col-md-8 p-0 m-0">
              <img
                className="img-fluid w-100"
                src="../../public/images/about/image (2).svg"
                alt=""
              />
            </div>

            <div
              className="content col-md-4"
              style={{ position: "absolute", right: "10%" }}
            >
              <h2 className="fw-bold fs-1">
                100% Trusted <br /> Organic Food Store
              </h2>
              <p className="mt-4">
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                feugiat.
              </p>

              <div className="row mt-4 gy-3">
                {[
                  {
                    icon: <PiLeafThin />,
                    title: "100% Organic food",
                    text: "100% healthy & Fresh food.",
                  },
                  {
                    icon: <LuHeadphones />,
                    title: "Great Support 24/7",
                    text: "Instant access to contact.",
                  },
                  {
                    icon: <GiPolarStar />,
                    title: "Customer Feedback",
                    text: "Our happy customers.",
                  },
                  {
                    icon: <LuLock />,
                    title: "100% Secure Payment",
                    text: "We ensure your money is safe.",
                  },
                  {
                    icon: <LuTruck />,
                    title: "Free Shipping",
                    text: "Free shipping with discount.",
                  },
                  {
                    icon: <LuBox />,
                    title: "Fresh Products",
                    text: "We deliver fresh every day.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="col-sm-6 d-flex align-items-center"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "#E6F6EC",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        color: "#00B207",
                        marginRight: "12px",
                        fontSize: "24px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">{item.title}</h6>
                      <small className="text-secondary">{item.text}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third py-5">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="content col-md-4">
              <h2 className="fw-bold fs-1">
                100% Trusted <br /> Organic Food Store
              </h2>
              <p className="mt-4">
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                auctor bibendum nunc eget elementum.
              </p>

              <ul className="mt-4 list-unstyled">
                {[
                  "ed in metus pellentesque.",
                  "Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.",
                  "Maecenas ut nunc fringilla erat varius.",
                ].map((text, index) => (
                  <li key={index} className="d-flex align-items-start mb-2">
                    <FiCheck
                      style={{
                        color: "#00B207",
                        fontSize: "20px",
                        marginRight: "8px",
                        marginTop: "3px",
                      }}
                    />
                    <p className="m-0">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="img col-md-6">
              <img
                className="img-fluid w-100 rounded"
                src="../../public/images/about/image (3).svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="team py-5">
        <div className="container">
          <h2 className="fw-bold fs-1 text-center">Our Awesome Team</h2>
          <p className="text-center">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>

          <div className="row mt-5 p-4">
            {[
              {
                img: "../../public/images/about/image (4).svg",
                name: "Jenny Wilson",
                position: "CEO & Founder",
              },
              {
                img: "../../public/images/about/image (5).svg",
                name: "Jane Cooper",
                position: "Worker",
              },
              {
                img: "../../public/images/about/image (6).svg",
                name: "John Cody Fisher",
                position: "Security Guard",
              },
              {
                img: "../../public/images/about/image (7).svg",
                name: "Robert Fox",
                position: "Senior Farm Manager",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4 p-4">
                <div
                  className="card border-0 text-center shadow-sm"
                  style={{ borderRadius: "12px" }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-img-top img-fluid w-100 h-100 object-fit-cover"
                    style={{
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">{item.name}</h5>
                    <p className="card-text text-secondary mb-0">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="testimonials py-5"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div className="container">
          <h2 className="fw-bold fs-1 text-start">Client Testimonail</h2>
          <div>
            <div className="row">
              {[
                {
                  comment:
                    "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
                  name: "Dianne Russell",
                  position: "Customer",
                  img: "../../public/images/about/image (8).svg",
                },
                {
                  comment:
                    "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
                  name: "Robert Fox",
                  position: "Customer",
                  img: "../../public/images/about/image (9).svg",
                },
                {
                  comment:
                    "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
                  name: "Eleanor Pena",
                  position: "Customer",
                  img: "../../public/images/about/image (10).svg",
                },
              ].map((item, index) => (
                <div key={index} className="col-md-4 p-4">
                  <div
                    className="card border-0 shadow-sm h-100 text-center"
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{ color: "#00B207", fontSize: "20px" }}
                      className="text-start p-2"
                    >
                      {" "}
                      <SiComma /> <SiComma />
                    </div>
                    <p
                      className="text-secondary mb-4"
                      style={{ fontSize: "15px" }}
                    >
                      “{item.comment}”
                    </p>
                    <div className="text-start p-2 d-flex align-items-center justify-content-start ms-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-circle me-4"
                        width="40"
                        height="40"
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <h6 className="fw-bold mb-0">{item.name}</h6>
                        <small className="text-muted">{item.position}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="vector  container py-4">
        <Vector />
      </section>
    </>
  );
}
