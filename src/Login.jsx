import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is Required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid Email Format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPassError("Password Required");
    } else {
      setPassError("");
    }
  };
  const navigateTo = useNavigate();
  const handlelogin = (e) => {
    e?.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passError) {
      console.log("validated data", emailError, passError);
      if (email === "admin.admin@gmail.com" && password === "onlyadmin") {
        navigateTo("/AdminSidebar");
      } else {
        navigateTo("/");
      }
    }
  };

  const [authmode, setAuthMode] = useState("signin");
  const changeAuthMode = () => {
    setAuthMode(authmode === "signin" ? "signup" : "signin");
  };

  if (authmode === "signin") {
    return (
      <div className="login-form-container">
        <Form className="login-form">
          <div className="login-form-content">
            <h3 className="login-form-title">Sign In </h3>
            <div className="text-center">
              Not Registered Yet?
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label className="login-label">Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              {emailError && <span>{emailError}</span>}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
              />
              {passError && <span>{passError}</span>}
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                className="btn btn-dark"
                onClick={handlelogin}
              >
                Submit
              </Button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#">Forgot Password? </a>
            </p>
          </div>
        </Form>
      </div>
    );
  }

  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#"> Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
