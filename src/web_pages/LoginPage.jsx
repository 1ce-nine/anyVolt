import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import anyvoltLogo from "/src/assets/anyvolt_pic.webp";
import { useAuth } from "../AuthContext";

export default function LogInPage() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    console.log("Submitting login", { identifier });

    try {
      await login(identifier, password);

      // ✅ Success message and redirect
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
                {/* ✅ Success + error messages */}
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
