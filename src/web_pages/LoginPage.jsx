{/* */}
{/* Import necessary libraries, components etc */}
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import anyvoltLogo from "/src/assets/anyvolt_pic.webp";
import { useAuth } from "../AuthContext";

export default function LogInPage() {
  {/* Retrieve login function from AuthContext*/}
  const { login } = useAuth();
  {/* Retrieve the navigate feature from React router dom*/}
  const nav = useNavigate();

  {/* Empty string for state of username/email */}
  const [identifier, setIdentifier] = useState("");

  {/* Empty string for state of password */}
  const [password, setPassword] = useState("");

  {/* Initialise state for errors */}  
  const [err, setErr] = useState(null);

  {/* State to control the visibility of the success message. Starts as false. */}  
  const [showSuccess, setShowSuccess] = useState(false);

  {/* State to track if the form is currently submitting */}  
  const [loading, setLoading] = useState(false);

  {/* The `onSubmit` function runs when the user submits the form. 
    It prevents the page from reloading, sets a loading state, and then uses a `try...catch` block to attempt the login. 
    If successful, it shows a success message and redirects. If it fails, it catches the error and displays it to the user. 
    The `finally` block ensures the loading state is always turned off. */}
  async function onSubmit(e) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    console.log("Submitting login", { identifier });

    try {
      await login(identifier, password);

      // Success message and redirect
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        nav("/"); // redirect to home (change if you want)
      }, 1500);
    } catch (e) {
      setErr(e?.response?.data?.error?.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  {/* This is the main content area. The form is built here, with its input fields linked to the state variables.
    It also includes logic to conditionally display success or error alerts based on the component's state, 
    and the submit button's text and disabled status change depending on the `loading` state.*/}
  return (
    <>
      <title>Log In</title>
      <Header />
      <main>
        <Container>
          <Row className="justify-content-center pt-5">
            <Col xs={10} sm={8} md={6} lg={4}>
              <img
                src={anyvoltLogo}
                alt="Anyvolt Logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
          </Row>

          <Row className="justify-content-center pt-3">
            <Col xs={10} sm={8} md={6} lg={4}>
              <div className="login-form">
                {/* Success + error messages */}
                {showSuccess && (
                  <Alert variant="success" className="text-center">
                    ✅ Login successful! Redirecting…
                  </Alert>
                )}
                {err && <Alert variant="danger">{err}</Alert>}

                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb" controlId="formBasicIdentifier">
                    <Form.Label>Email or Username</Form.Label>
                    <Form.Control
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Enter email or username"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 pt-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="dark"
                    type="submit"
                    className="w-100"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>

                  <div className="text-center mt-3">
                    <Link to="/signup">Create an account</Link>
                  </div>
                  <div className="text-center mt-2">Forgot Password?</div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </>
  );
}
