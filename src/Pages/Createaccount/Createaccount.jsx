import React, { useState } from "react";
import { Form, Card, Button, InputGroup, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { handleRegister } from "../../Api/fetchapi";
import * as Yup from "yup";
import { InfinitySpin } from "react-loader-spinner";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function Createaccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => setShowPassword((prev) => !prev);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format",
      ),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character",
      ),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Confirm Password is required"),
  });
  const { setUser } = useContext(UserContext);
  const registerForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setisLoading(true);
      try {
        console.log("Form Submitted", values);

        const newUser = await handleRegister(values);
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        setisLoading(true);
        navigate("/login");
        setErrorMsg("");
      } catch (error) {
        setErrorMsg(error.message);
        setUser(null);
      } finally {
        setisLoading(false);
      }
    },
  });

  return (
    <div>
      <Card className="w-25 mx-auto p-2 m-5 shadow-lg">
        <h2 className="text-center m-3 fw-bolder">Sign Up</h2>
        <Card.Body>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

          <Form onSubmit={registerForm.handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                name="name"
                value={registerForm.values.name}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.name && registerForm.touched.name && (
                <small className="text-danger">
                  {registerForm.errors.name}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                autoComplete="username"
                placeholder="Email"
                name="email"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.email && registerForm.touched.email && (
                <small className="text-danger">
                  {registerForm.errors.email}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Password"
                  name="password"
                  value={registerForm.values.password}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <Button
                  variant="outline-success"
                  onClick={togglePassword}
                  type="button"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </Button>
              </InputGroup>
              {registerForm.errors.password &&
                registerForm.touched.password && (
                  <small className="text-danger">
                    {registerForm.errors.password}
                  </small>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirmed Password"
                  autoComplete="new-password"
                  name="confirmPassword"
                  value={registerForm.values.confirmPassword}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <Button
                  variant="outline-success"
                  onClick={togglePassword}
                  type="button"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </Button>
              </InputGroup>
              {registerForm.errors.confirmPassword &&
                registerForm.touched.confirmPassword && (
                  <small className="text-danger">
                    {registerForm.errors.confirmPassword}
                  </small>
                )}
            </Form.Group>

            <Button
              disabled={isLoading}
              style={{ backgroundColor: "#28a745" }}
              className="w-100 rounded-pill"
              variant="success"
              type="submit"
            >
              {isLoading ? (
                <InfinitySpin
                  visible={true}
                  width="200"
                  color="#ffffff"
                  ariaLabel="infinity-spin-loading"
                />
              ) : (
                "Sign Up"
              )}
            </Button>

            <div className="text-center mt-3">
              Already have an account?{" "}
              <Link className="text-success text-decoration-none" to="/login">
                Login
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
