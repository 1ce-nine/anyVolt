// src/web_pages/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Adjust this to match your setup (same as elsewhere in your app)
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    surName: "",   // 👈 matches Strapi field name (case-sensitive)
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Strapi v4/v5: POST to /api/<collection-name> with { data: {...} }
      await axios.post(`${API_BASE_URL}/api/contact-submissions`, {
        data: {
          firstName: form.firstName,
          surName: form.surName,  // 👈 MUST match Strapi: surName
          email: form.email,
          message: form.message,
        },
      });

      setStatus({
        loading: false,
        success: "Thanks! Your message has been sent.",
        error: null,
      });

      // Clear form
      setForm({
        firstName: "",
        surName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("STATUS:", err.response?.status);
        console.log("DATA:", err.response?.data);  // 👈 this is the Strapi error JSON
      } else {
        console.log("UNKNOWN ERROR:", err);
      }

      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <title>Contact</title>
      <Header />
      <main>
        <Container>
          <Row className="align-items-start header-row pt-5 ps-5">
            <Col md={12}>
              <p
                className="anyvolt-logo button-transparent"
                style={{
                  color: "white",
                  fontSize: "44px",
                  fontWeight: "700",
                  marginBottom: 0,
                }}
              >
                Contact Us
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={10} sm={8} md={6} lg={5}>
              {/* Contact form */}
              <div className="login-form">
                <Form onSubmit={handleSubmit}>
                  {/* First name */}
                  <Form.Group className="mb" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Surname */}
                  <Form.Group className="mb-3 pt-3" controlId="surName">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      name="surName"              // 👈 key matches state + Strapi
                      placeholder="Enter surname"
                      value={form.surName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3" controlId="emailAddress">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Message */}
                  <Form.Group className="mb-3 pb-2" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Enter your message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Submit button */}
                  <Button
                    variant="dark"
                    type="submit"
                    className="w-100"
                    disabled={status.loading}
                  >
                    {status.loading ? "Sending..." : "Submit"}
                  </Button>

                  {/* Feedback messages */}
                  {status.success && (
                    <p className="mt-2 text-success">{status.success}</p>
                  )}
                  {status.error && (
                    <p className="mt-2 text-danger">{status.error}</p>
                  )}
                </Form>
              </div>
            </Col>

            <Col className="ps-5 pt-5" style={{ color: "white" }}>
              <div className="no-margin-paragraphs button-transparent">
                <p>Better yet, see us in person!</p>
                <p>We love our customers, so feel free to visit</p>
                <p>during normal business hours.</p>
              </div>

              <div
                className="pt-5 button-transparent"
                style={{ fontWeight: "700" }}
              >
                <p>AnyVolt Power</p>
                <p>0452 648 994</p>
              </div>

              <div className="no-margin-paragraphs button-transparent">
                <p style={{ fontWeight: "700" }}>Hours</p>
                <p>Mon</p>
                <p>9:00 am - 5:00 pm</p>
                <p>Tue</p>
                <p>9:00 am - 5:00 pm</p>
                <p>Wed</p>
                <p>9:00 am - 5:00 pm</p>
                <p>Thu</p>
                <p>9:00 am - 5:00 pm</p>
                <p>Fri</p>
                <p>9:00 am - 5:00 pm</p>
                <p>Sat</p>
                <p>Closed</p>
                <p>Sun</p>
                <p>Closed</p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
