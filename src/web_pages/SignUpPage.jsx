import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import anyvoltLogo from "/src/assets/anyvolt_pic.webp";
import { useAuth } from "../AuthContext";

export default function SignupPage() {
  const { signup } = useAuth();
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr(null); setLoading(true);
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

  return (
    <>
      <title>Sign Up</title>
      <Header />
      <main>
        <Container>
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
