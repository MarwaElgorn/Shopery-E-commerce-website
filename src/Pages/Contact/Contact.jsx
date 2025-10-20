import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <section className="contact py-5">
        <div className="container">
          <div className="row align-items-stretch h-100">
            {/* Left Side - Contact Info */}
            <div className="col-md-3">
              <div
                className="card border-0 shadow-sm h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                style={{ borderRadius: "12px", minHeight: "100%" }}
              >
                <div className="mb-5 mt-3">
                  <CiLocationOn
                    style={{ color: "#2C742F", fontSize: "50px" }}
                  />
                  <p className="mt-2 mb-0">
                    2715 Ash Dr. San Jose, South <br /> Dakota 83475
                  </p>
                </div>

                <div className="mb-5 mt-3">
                  <TfiEmail style={{ color: "#2C742F", fontSize: "50px" }} />
                  <p className="mt-2 mb-0">
                    Proxy@gmail.com <br />
                    Help.proxy@gmail.com
                  </p>
                </div>

                <div>
                  <FiPhoneCall style={{ color: "#2C742F", fontSize: "50px" }} />
                  <p className="mt-2 mb-0">
                    (219) 555-0114 <br />
                    (164) 333-0487
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="col-md-9">
              <div
                className="card border-0 shadow-sm h-100 p-4 d-flex flex-column justify-content-center"
                style={{ borderRadius: "12px", minHeight: "100%" }}
              >
                <h2 className="fw-bold mb-3">Just Say Hello!</h2>
                <p className="text-secondary">
                  Do you fancy saying hi or want to get started with your
                  project and need help? Feel free to contact me anytime.
                </p>

                <Form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Form.Control type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <Form.Control type="email" placeholder="Your Email" />
                    </div>
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Message"
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    className="px-4 py-2 fw-bold"
                    style={{ backgroundColor: "#00B207", border: "none" }}
                  >
                    Send Message
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map mt-4">
        <div className="map-container" style={{ overflow: "hidden" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153105!3d-37.81627937975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0xf19a3b3b3b3b3b3b!2s123%20Main%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1709876543210!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
