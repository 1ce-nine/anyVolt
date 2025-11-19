{/* */}
{/* Import necessary libraries, components etc */}
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import anyvoltLogo from "/src/assets/anyvolt_pic.webp";
import { useAuth } from "../AuthContext";
import Breadcrumbs from "../components/Breadcrumbs";

export default function SignupPage() {
  {/* Retrieve signup function from AuthContext*/}
  const { signup } = useAuth();

  {/* Retrieve the navigate feature from React router dom*/}
  const nav = useNavigate();

  {/* Empty string for state of username */}
  const [username, setUsername] = useState("");

  {/* Empty string for state of email */}
  const [email, setEmail] = useState("");

  {/* Empty string for state of password */}
  const [password, setPassword] = useState("");

  {/* Initialise state for errors */}
  const [err, setErr] = useState(null);

  {/* State to control the visibility of the success message. Starts as false. */}
  const [showSuccess, setShowSuccess] = useState(false);

  {/* State to track if the form is currently submitting */}
  const [loading, setLoading] = useState(false);

  {/* The `onSubmit` function runs when the user submits the form. 
    It prevents the page from reloading, sets a loading state, 
    and then uses a `try...catch` block to attempt to create a new user account.
    If successful, it shows a success message and redirects. 
    If it fails, it catches the error and displays it to the user. 
    The `finally` block ensures the loading state is always turned off*/}
  async function onSubmit(e) {
    e.preventDefault();
    setErr(null); 
    setLoading(true);

    try {
      await signup(username, email, password); // calls /api/auth/local/register (creates user in Strapi)
      setShowSuccess(true);
      setTimeout(() => { setShowSuccess(false); nav("/"); }, 1500);
    } catch (e) {
      setErr(e?.response?.data?.error?.message ?? "Sign up failed");
    } finally {
      setLoading(false);
    }
  }

  {/* This is the main content area. The form is built here, with its input fields linked to the state variables.
  It also includes logic to conditionally display success or error alerts based on the component's state, 
  and the submit button's text and disabled status change depending on the `loading` state.*/}
  return (
    <>
      <title>Sign Up</title>
      <Header />
      <main>
        <Container>
        <Breadcrumbs labels={{ "signup": "Sign up" }} />
          <Row className="justify-content-center pt-5">
            <Col xs={10} sm={8} md={6} lg={4}>
              <img src={anyvoltLogo} alt="Anyvolt Logo" style={{ width: "100%", height: "auto" }} />
            </Col>
          </Row>

          <Row className="justify-content-center pt-3">
            <Col xs={10} sm={8} md={6} lg={4}>
              <div className="login-form">
                {showSuccess && <Alert variant="success" className="text-center">✅ Account created! Redirecting…</Alert>}
                {err && <Alert variant="danger">{err}</Alert>}

                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                  </Form.Group>

                  <Button className="w-100" variant="dark" type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create account"}
                  </Button>

                  <div className="text-center mt-3">
                    Already have an account? <Link to="/login">Sign in</Link>
                  </div>
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
