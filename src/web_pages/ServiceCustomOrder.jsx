import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from "../Header";
import Footer from "../Footer";


function ServiceCustomOrder() {
  return (
    <>
      <title>Custom Order Form</title>
      <Header />
      <main>
        <Container className="py-5">
          <div
            style={{
              backgroundColor: "#d9d9d9",
              borderRadius: "12px",
              padding: "40px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* ================= Header ================= */}
            <h2 style={{ fontWeight: 700 }}>Order information</h2>
            <p style={{ color: "#555", fontSize: "15px" }}>
              At AnyVolt Power, we custom design to suit our customers’ requirements,
              from one-off prototypes to high-volume production. Please provide as
              much detail as possible so we can best understand your project
              requirements and provide a tailored solution.
            </p>

            {/* ================= Contact Info ================= */}
            <h5 style={{ fontWeight: 600, marginTop: "30px" }}>
              Contact Information
            </h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Business Name:</Form.Label>
                <Form.Control type="text" placeholder="Business Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact Person:</Form.Label>
                <Form.Control type="text" placeholder="Contact Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone:</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

            {/* ================= Motor Type ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Motor Type (Select your desired motor type)
              </h5>

            {/* Motor Type Dropdown */}
            <Form.Group className="mb-3" controlId="motorType">
                <Form.Label>Motor Type (Select your desired motor type):</Form.Label>
                <Form.Select>
                    <option value="">Select Motor Type</option>

                    <optgroup label="AC Motor">
                    <option>Asynchronous</option>
                    <option>Synchronous</option>
                    <option>Single Phase</option>
                    <option>Three Phase</option>
                    <option>Line-Start PM</option>
                    <option>Brushless with AC controller</option>
                    </optgroup>

                    <optgroup label="DC Permanent Magnet Motor">
                    <option>Brushed</option>
                    <option>Brushless</option>
                    <option>Shunt</option>
                    <option>Series</option>
                    <option>Cylindrical</option>
                    <option>Axial-Flux</option>
                    </optgroup>

                    <optgroup label="PM-Free Motor">
                    <option>Reluctance</option>
                    <option>Switch Reluctance</option>
                    </optgroup>
                </Form.Select>
                </Form.Group>

              {/* ================= Motor Requirements ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Motor Requirements (Specify below specs)
              </h5>

              {[
                "Available Supply Voltage",
                "Rated Output Power (kW)",
                "Rated Output Torque (nM)",
                "Maximum allowed peak current (A)",
              ].map((label, i) => (
                <Form.Group className="mb-3" key={i}>
                  <Form.Label>{label}:</Form.Label>
                  <Form.Control type="text" placeholder="Value" />
                </Form.Group>
              ))}

              <Form.Group className="mb-3">
                <Form.Label>Duty Cycle:</Form.Label>
                <Form.Select>
                    <option>Select Option</option>
                    <option>Continuous</option>
                    <option>Intermittent S2</option>
                    <option>Intermittent S</option>
                </Form.Select>
              </Form.Group>

              {[
                "Frame Size (IEC)",
                "IP Rating",
                "Brake",
                "Foot or Flange Mount",
                "Gearbox (GB)",
                "Any sizing restrictions to note?",
              ].map((label, i) => (
                <Form.Group className="mb-3" key={i}>
                  <Form.Label>{label}:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={
                      label === "Brake"
                        ? "Specify voltage and holding Torque"
                        : label === "Gearbox (GB)"
                        ? "Specify reduction ratio and type of GB"
                        : label === "Any sizing restrictions to note?"
                        ? "Maximum Length (mm), Maximum Width/Diameter: (mm)"
                        : "Value"
                    }
                  />
                </Form.Group>
              ))}

            {/* Wire Connections */}
            <Form.Group className="mb-3" controlId="wireConnections">
            <Form.Label>Wire Connections:</Form.Label>
            <Form.Select>
                <option>Select Option</option>
                <option>Connection Box</option>
                <option>Loose Cables</option>
            </Form.Select>
            </Form.Group>

            {/* Cooling Requirements */}
            <Form.Group className="mb-3" controlId="coolingRequirements">
            <Form.Label>Cooling Requirements:</Form.Label>
            <Form.Select>
                <option>Select Option</option>
                <option>Fan</option>
                <option>Water</option>
                <option>Liquid</option>
            </Form.Select>
            </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Other Requirements:</Form.Label>
                <Form.Control type="text" placeholder="Enter any additional specifications or notes" />
              </Form.Group>

            {/* ================= Application ================= */}
            <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Application
            </h5>
    
                <div className="d-flex flex-wrap align-items-center gap-4 mb-3">
                <Form.Check
                    type="checkbox"
                    label="Pump"
                    id="app-pump"
                />
                <Form.Check
                    type="checkbox"
                    label="Lifting"
                    id="app-lifting"
                />
                <Form.Check
                    type="checkbox"
                    label="Conveyor"
                    id="app-conveyor"
                />
                <Form.Check
                    type="checkbox"
                    label="Aerospace (Drone)"
                    id="app-aerospace"
                />
                <Form.Check
                    type="checkbox"
                    label="Marine"
                    id="app-marine"
                />
                <Form.Check
                    type="checkbox"
                    label="Generator"
                    id="app-generator"
                />
                
                {/* "Other" with inline text input */}
                <div className="d-flex align-items-center">
                    <Form.Check
                    type="checkbox"
                    id="app-other"
                    label="Other:"
                    className="me-2"
                    />
                    <Form.Control
                    type="text"
                    placeholder="Please specify"
                    style={{ width: "180px" }}
                    />
                </div>
                </div>

              {/* ================= Service Packages ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Service Packages (Please select which service and package)
              </h5>

                <div class="package">
                <label class="pkg-check">
                    <input type="checkbox" id="pkg-silver" />
                    1. Silver
                </label>
                <div class="pkg-details">
                    <div><strong>Inclusions:</strong> Meetings, geometry design, winding configuration, base electromagnetic performance simulation.</div>
                    <div class="pkg-tagline"><em>Feasibility-level design for concept validation.</em></div>
                    <div><strong>Rate (AUD/hr):</strong> $200–300</div>
                    <div><strong>Minimum Engagement Commitment (hrs):</strong> 20</div>
                </div>
                </div>

                <div class="package">
                <label class="pkg-check">
                    <input type="checkbox" id="pkg-gold" />
                    2. Gold
                </label>
                <div class="pkg-details">
                    <div><strong>Inclusions:</strong> Includes Silver + efficiency mapping, preliminary thermal analysis, new core material evaluation.</div>
                    <div class="pkg-tagline"><em>Prototype-ready design guidance.</em></div>
                    <div><strong>Rate (AUD/hr):</strong> $300–400</div>
                    <div><strong>Minimum Engagement Commitment (hrs):</strong> 30</div>
                </div>
                </div>

                <div class="package">
                <label class="pkg-check">
                    <input type="checkbox" id="pkg-diamond" />
                    3. Diamond
                </label>
                <div class="pkg-details">
                    <div><strong>Inclusions:</strong> Includes Gold + multiphysics optimization, advanced diagnostics, prototype-ready design validation.</div>
                    <div class="pkg-tagline"><em>Full optimization package to de-risk production.</em></div>
                    <div><strong>Rate (AUD/hr):</strong> $400–500</div>
                    <div><strong>Minimum Engagement Commitment (hrs):</strong> 50</div>
                </div>
                </div>

              {/* ================= Optional Add-Ons ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Optional Add-On Services (Selectable with any package)
              </h5>

              <Form.Group className="mb-3">
                <Form.Select>
                  <option>
                    Drop Down Menu (Automation-Controller Integration, Automation-Control Program Tuning,
                    Commissioning Automation Support (Remote), Experimental Dyno Test Report, Prototyping Support (on-site))
                  </option>
                </Form.Select>
              </Form.Group>

              {/* ================= Quoting & Delivery ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Quoting and Delivery
              </h5>

              {[
                "Date First Sample Required",
                "Estimated Quantity (yearly)",
                "Delivery Address",
              ].map((label, i) => (
                <Form.Group className="mb-3" key={i}>
                  <Form.Label>{label}:</Form.Label>
                  <Form.Control type="text" placeholder="Value" />
                </Form.Group>
              ))}

              <p style={{ fontSize: "13px", color: "#555" }}>
                Thank you for your enquiry. We will review the information provided and come back with
                a quotation or request further details if required.
              </p>

              {/* ================= Terms ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>Terms</h5>
              <ul style={{ fontSize: "13px", color: "#555" }}>
                <li>
                  Minimum engagement commitment fee is payable in advance to secure project commencement.
                  This retainer is non-refundable but fully credited toward your final invoice.
                </li>
                <li>Fixed-price quotations may be offered for larger and more complex projects.</li>
                <li>
                  Deliverables include 2D/3D geometry in .STEP format for electromagnetic components.
                </li>
                <li>
                  Written confirmation email will be placed as placed order by customer.
                </li>
              </ul>

              {/* ================= Accept + Save ================= */}
              <Form.Check
                type="checkbox"
                label="I accept the terms"
                className="mb-3"
              />
              <a
                href="#"
                style={{
                  display: "block",
                  color: "gray",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                Read our T&Cs
              </a>

              <Button
                variant="dark"
                type="submit"
                className="w-100 rounded-3 py-2"
              >
                Save Information
              </Button>
            </Form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default ServiceCustomOrder;