import React, { useContext, useState } from "react";
import { UserContext } from "./../Context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";
import { Modal, Button, Card } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  if (!user) {
    if (!showModal) {
      setShowModal(true);
    }

    return (
      <Modal
        show={true}
        onHide={() => {
          setShowModal(false);
          navigate("/");
        }}
        centered
        backdrop="static"
      >
        <Card
          className="mx-auto shadow-lg p-4"
          style={{
            borderRadius: "18px",
            border: "none",
            background: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
            boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
          }}
        >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5
              style={{
                fontWeight: "700",
                color: "#00B207",
                margin: 0,
                fontSize: "20px",
              }}
            >
              Login Required
            </h5>

            <button
              onClick={() => {
                setShowModal(false);
                navigate("/");
              }}
              aria-label="close"
              style={{
                background: "#f0f0f0",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#555",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e5e5e5")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#f0f0f0")}
            >
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div
            className="text-center mb-4"
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.6",
            }}
          >
            You need to sign in to access this page. Please log in or return to
            the home page.
          </div>

          {/* Footer */}

          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="light"
              onClick={() => {
                setShowModal(false);
                navigate("/");
              }}
              style={{
                border: "1px solid #ddd",
                color: "#333",
                fontWeight: "500",
                borderRadius: "25px",
                padding: "8px 26px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f5f5f5";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                navigate("/login");
              }}
              style={{
                backgroundColor: "#00B207",
                border: "none",
                borderRadius: "25px",
                padding: "8px 26px",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#029d06";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#00B207";
              }}
            >
              Sign in
            </Button>
          </div>
        </Card>
      </Modal>
    );
  } else {
return children;

  }
}
