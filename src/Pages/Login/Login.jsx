import React, { useState } from "react";
import { Form, Card, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { handleLogin } from "../../Api/fetchapi";
import * as Yup from "yup";
import { InfinitySpin } from "react-loader-spinner";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  
  const validationSchema = Yup.object().shape({
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
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setisLoading(true);
      try {
        console.log("Form Submitted", values);
        await handleLogin(values);
        const loggedInUser = await handleLogin(values);
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        setisLoading(true);
        navigate("/");
        setErrorMsg("");
      } catch (error) {
        setErrorMsg(
          error.response?.data?.message ||
            error.message ||
            "Something went wrong",
        );
      } finally {
        setisLoading(false);
      }
    },
  });
  return (
    <div>
      <Card className="w-25 mx-auto p-2 m-5 shadow-lg">
        <h2 className="text-center m-3 fw-bolder">Sign in</h2>
        <Card.Body>
          {errorMsg ? (
            <div className="alert alert-danger text-center" role="alert">
              {errorMsg}
            </div>
          ) : null}

          <Form onSubmit={loginForm.handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                autoComplete="username"
                placeholder="Email"
                name="email"
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
              />
              {loginForm.errors.email && loginForm.touched.email && (
                <small className="text-danger">{loginForm.errors.email}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Password"
                  name="password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                />
                <Button variant="outline-success" onClick={togglePassword}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </Button>
              </InputGroup>
              {loginForm.errors.password && loginForm.touched.password && (
                <small className="text-danger">
                  {loginForm.errors.password}
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
                "Log in"
              )}
            </Button>
            <div className="text-center mt-3">
              Don’t have account?{" "}
              <Link
                className="text-success text-decoration-none"
                to="/createaccount"
              >
                Register
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
