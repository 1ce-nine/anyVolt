// src/web_pages/ServiceCustomOrder.jsx
import React, { useState } from "react";
import axios from "axios";
import { Container, Button, Form } from "react-bootstrap";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

function ServiceCustomOrder() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const form = new FormData(e.currentTarget);

      // Build rawFormData, supporting multiple values for checkbox groups
      const rawFormData = {};
      for (const [key, value] of form.entries()) {
        if (rawFormData[key] === undefined) {
          rawFormData[key] = value;
        } else if (Array.isArray(rawFormData[key])) {
          rawFormData[key].push(value);
        } else {
          rawFormData[key] = [rawFormData[key], value];
        }
      }

      // Top-level fields that also exist as Strapi fields
      const businessName = rawFormData.businessName || "";
      const contactPerson = rawFormData.contactPerson || "";
      const email = rawFormData.email || "";
      const phone = rawFormData.phone || "";

      const toArray = (val) => {
        if (!val) return [];
        return Array.isArray(val) ? val : [val];
      };

      // Applications – including "Other" with free text
      let applications = toArray(rawFormData.applications);
      const applicationsOtherText = rawFormData.applications_otherText || "";
      if (applications.includes("Other") && applicationsOtherText) {
        applications = applications.map((app) =>
          app === "Other" ? `Other: ${applicationsOtherText}` : app
        );
      }

      // Packages (Silver / Gold / Diamond)
      const packages = toArray(rawFormData.packages);

      // Build a nice, structured object for formData
      const structuredFormData = {
        contact: {
          businessName,
          contactPerson,
          email,
          phone,
        },
        motor: {
          motorType: rawFormData.motorType || "",
          supplyVoltage: rawFormData.supplyVoltage || "",
          ratedOutputPowerKW: rawFormData.ratedOutputPowerKW || "",
          ratedOutputTorqueNM: rawFormData.ratedOutputTorqueNM || "",
          peakCurrentA: rawFormData.peakCurrentA || "",
          dutyCycle: rawFormData.dutyCycle || "",
        },
        mechanics: {
          frameSizeIEC: rawFormData.frameSizeIEC || "",
          ipRating: rawFormData.ipRating || "",
          brakeDetails: rawFormData.brakeDetails || "",
          mountType: rawFormData.mountType || "",
          gearboxType: rawFormData.gearboxType || "",
          sizingRestrictions: rawFormData.sizingRestrictions || "",
        },
        wiringAndCooling: {
          wireConnections: rawFormData.wireConnections || "",
          coolingRequirements: rawFormData.coolingRequirements || "",
          otherRequirements: rawFormData.otherRequirements || "",
        },
        applications,
        packages,
        optionalAddon: rawFormData.optionalAddon || "",
        quotingAndDelivery: {
          dateFirstSampleRequired: rawFormData.dateFirstSampleRequired || "",
          estimatedQuantityYearly: rawFormData.estimatedQuantityYearly || "",
          deliveryAddress: rawFormData.deliveryAddress || "",
        },
        termsAccepted:
          rawFormData.acceptTerms === "true" ||
          rawFormData.acceptTerms === true,
        meta: {
          submittedAt: new Date().toISOString(),
        },
      };

      const payload = {
        businessName,
        contactPerson,
        email,
        phone,
        statusCustomOrder: "new",
        formData: structuredFormData,
      };

      console.log("Sending to Strapi:", payload);

      await axios.post(`${API_URL}/api/custom-orders`, {
        data: payload,
      });

      setMessage({ type: "success", text: "Order saved successfully." });
      e.target.reset();
    } catch (err) {
      console.error("Error saving order:", err);
      setMessage({
        type: "danger",
        text: "There was an error saving your order.",
      });
    } finally {
      setSubmitting(false);
    }
  };

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
              At AnyVolt Power, we custom design to suit our customers’
              requirements, from one-off prototypes to high-volume production.
              Please provide as much detail as possible so we can best
              understand your project requirements and provide a tailored
              solution.
            </p>

            {/* ================= Contact Info ================= */}
            <h5 style={{ fontWeight: 600, marginTop: "30px" }}>
              Contact Information
            </h5>

            <Form onSubmit={handleSubmit}>
              {message && (
                <div className={`alert alert-${message.type}`} role="alert">
                  {message.text}
                </div>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Business Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contact Person:</Form.Label>
                <Form.Control
                  type="text"
                  name="contactPerson"
                  placeholder="Contact Name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
              </Form.Group>

              {/* ================= Motor Type ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Motor Type (Select your desired motor type)
              </h5>

              <Form.Group className="mb-3" controlId="motorType">
                <Form.Label>Motor Type:</Form.Label>
                <Form.Select name="motorType">
                  <option value="">Select Motor Type</option>

                  <optgroup label="AC Motor">
                    <option value="Asynchronous">Asynchronous</option>
                    <option value="Synchronous">Synchronous</option>
                    <option value="Single Phase">Single Phase</option>
                    <option value="Three Phase">Three Phase</option>
                    <option value="Line-Start PM">Line-Start PM</option>
                    <option value="Brushless with AC controller">
                      Brushless with AC controller
                    </option>
                  </optgroup>

                  <optgroup label="DC Permanent Magnet Motor">
                    <option value="Brushed">Brushed</option>
                    <option value="Brushless">Brushless</option>
                    <option value="Shunt">Shunt</option>
                    <option value="Series">Series</option>
                    <option value="Cylindrical">Cylindrical</option>
                    <option value="Axial-Flux">Axial-Flux</option>
                  </optgroup>

                  <optgroup label="PM-Free Motor">
                    <option value="Reluctance">Reluctance</option>
                    <option value="Switch Reluctance">Switch Reluctance</option>
                  </optgroup>
                </Form.Select>
              </Form.Group>

              {/* ================= Motor Requirements ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Motor Requirements (Specify below specs)
              </h5>

              <Form.Group className="mb-3">
                <Form.Label>Available Supply Voltage:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Value"
                  name="supplyVoltage"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rated Output Power (kW):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Value"
                  name="ratedOutputPowerKW"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rated Output Torque (Nm):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Value"
                  name="ratedOutputTorqueNM"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Maximum allowed peak current (A):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Value"
                  name="peakCurrentA"
                />
              </Form.Group>

              {/* ================= Duty Cycle ================= */}
              <Form.Group className="mb-3">
                <Form.Label>Duty Cycle:</Form.Label>
                <Form.Select name="dutyCycle">
                  <option value="">Select Option</option>
                  <option value="Continuous">Continuous</option>
                  <option value="Intermittent S2">Intermittent S2</option>
                  <option value="Intermittent S">Intermittent S</option>
                </Form.Select>
              </Form.Group>

              {/* ================= Additional Motor Specs ================= */}
              <Form.Group className="mb-3">
                <Form.Label>Frame Size (IEC):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Value"
                  name="frameSizeIEC"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>IP Rating:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Value"
                  name="ipRating"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Brake:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Specify voltage and holding torque"
                  name="brakeDetails"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Foot or Flange Mount:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Specify mounting type"
                  name="mountType"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gearbox (GB):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Specify reduction ratio and type"
                  name="gearboxType"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Any sizing restrictions to note?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Maximum Length (mm), Width/Diameter (mm)"
                  name="sizingRestrictions"
                />
              </Form.Group>

              {/* ================= Wire Connections ================= */}
              <Form.Group className="mb-3" controlId="wireConnections">
                <Form.Label>Wire Connections:</Form.Label>
                <Form.Select name="wireConnections">
                  <option value="">Select Option</option>
                  <option value="Connection Box">Connection Box</option>
                  <option value="Loose Cables">Loose Cables</option>
                </Form.Select>
              </Form.Group>

              {/* ================= Cooling Requirements ================= */}
              <Form.Group className="mb-3" controlId="coolingRequirements">
                <Form.Label>Cooling Requirements:</Form.Label>
                <Form.Select name="coolingRequirements">
                  <option value="">Select Option</option>
                  <option value="Fan">Fan</option>
                  <option value="Water">Water</option>
                  <option value="Liquid">Liquid</option>
                </Form.Select>
              </Form.Group>

              {/* ================= Other Requirements ================= */}
              <Form.Group className="mb-3">
                <Form.Label>Other Requirements:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="otherRequirements"
                  placeholder="Enter any additional specifications or notes"
                />
              </Form.Group>

              {/* ================= Application ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Application
              </h5>

              <div className="mb-3 mt-3">
                <div className="d-flex flex-wrap align-items-center gap-4">
                  <Form.Check
                    type="checkbox"
                    id="app-pump"
                    label="Pump"
                    name="applications"
                    value="Pump"
                  />
                  <Form.Check
                    type="checkbox"
                    id="app-lifting"
                    label="Lifting"
                    name="applications"
                    value="Lifting"
                  />
                  <Form.Check
                    type="checkbox"
                    id="app-conveyor"
                    label="Conveyor"
                    name="applications"
                    value="Conveyor"
                  />
                  <Form.Check
                    type="checkbox"
                    id="app-aerospace"
                    label="Aerospace (Drone)"
                    name="applications"
                    value="Aerospace (Drone)"
                  />
                  <Form.Check
                    type="checkbox"
                    id="app-marine"
                    label="Marine"
                    name="applications"
                    value="Marine"
                  />
                  <Form.Check
                    type="checkbox"
                    id="app-generator"
                    label="Generator"
                    name="applications"
                    value="Generator"
                  />
                  <div className="d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      id="app-other"
                      name="applications"
                      value="Other"
                      label="Other:"
                      className="me-2"
                    />
                    <Form.Control
                      type="text"
                      name="applications_otherText"
                      placeholder="Please specify"
                      style={{ width: "180px" }}
                    />
                  </div>
                </div>
              </div>

              {/* ================= Service Packages ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Service Packages (Please select which service and package)
              </h5>

              <div className="package mb-3">
                <label className="pkg-check">
                  <input type="checkbox" name="packages" value="Silver" /> 1.
                  Silver
                </label>
                <div className="pkg-details">
                  <div>
                    <strong>Inclusions:</strong> Meetings, geometry design,
                    winding configuration, base electromagnetic performance
                    simulation.
                  </div>
                  <div className="pkg-tagline">
                    <em>
                      Feasibility-level design for concept validation.
                    </em>
                  </div>
                  <div>
                    <strong>Rate (AUD/hr):</strong> $200–300
                  </div>
                  <div>
                    <strong>Minimum Engagement Commitment (hrs):</strong> 20
                  </div>
                </div>
              </div>

              <div className="package mb-3">
                <label className="pkg-check">
                  <input type="checkbox" name="packages" value="Gold" /> 2. Gold
                </label>
                <div className="pkg-details">
                  <div>
                    <strong>Inclusions:</strong> Includes Silver + efficiency
                    mapping, preliminary thermal analysis, new core material
                    evaluation.
                  </div>
                  <div className="pkg-tagline">
                    <em>Prototype-ready design guidance.</em>
                  </div>
                  <div>
                    <strong>Rate (AUD/hr):</strong> $300–400
                  </div>
                  <div>
                    <strong>Minimum Engagement Commitment (hrs):</strong> 30
                  </div>
                </div>
              </div>

              <div className="package mb-3">
                <label className="pkg-check">
                  <input type="checkbox" name="packages" value="Diamond" /> 3.
                  Diamond
                </label>
                <div className="pkg-details">
                  <div>
                    <strong>Inclusions:</strong> Includes Gold + multiphysics
                    optimization, advanced diagnostics, prototype-ready design
                    validation.
                  </div>
                  <div className="pkg-tagline">
                    <em>Full optimization package to de-risk production.</em>
                  </div>
                  <div>
                    <strong>Rate (AUD/hr):</strong> $400–500
                  </div>
                  <div>
                    <strong>Minimum Engagement Commitment (hrs):</strong> 50
                  </div>
                </div>
              </div>

              {/* ================= Optional Add-On Services ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Optional Add-On Services (Selectable with any package)
              </h5>

              <Form.Group className="mb-3">
                <Form.Label>Add-On Service:</Form.Label>
                <Form.Select name="optionalAddon">
                  <option value="">
                    Drop Down Menu (Automation-Controller Integration,
                    Automation-Control Program Tuning, Commissioning Automation
                    Support (Remote), Experimental Dyno Test Report, Prototyping
                    Support (on-site))
                  </option>
                  <option value="Automation-Controller Integration">
                    Automation-Controller Integration
                  </option>
                  <option value="Automation-Control Program Tuning">
                    Automation-Control Program Tuning
                  </option>
                  <option value="Commissioning Automation Support (Remote)">
                    Commissioning Automation Support (Remote)
                  </option>
                  <option value="Experimental Dyno Test Report">
                    Experimental Dyno Test Report
                  </option>
                  <option value="Prototyping Support (on-site)">
                    Prototyping Support (on-site)
                  </option>
                </Form.Select>
              </Form.Group>

              {/* ================= Quoting & Delivery ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>
                Quoting and Delivery
              </h5>

              <Form.Group className="mb-3">
                <Form.Label>Date First Sample Required:</Form.Label>
                <Form.Control
                  type="date"
                  name="dateFirstSampleRequired"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Estimated Quantity (yearly):</Form.Label>
                <Form.Control
                  type="number"
                  name="estimatedQuantityYearly"
                  placeholder="Enter expected yearly quantity"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Delivery Address:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="deliveryAddress"
                  placeholder="Enter delivery destination"
                />
              </Form.Group>

              <p style={{ fontSize: "13px", color: "#555" }}>
                Thank you for your enquiry. We will review the information
                provided and come back with a quotation or request further
                details if required.
              </p>

              {/* ================= Terms ================= */}
              <h5 style={{ fontWeight: 600, marginTop: "40px" }}>Terms</h5>
              <ul style={{ fontSize: "13px", color: "#555" }}>
                <li>
                  Minimum engagement commitment fee is payable in advance to
                  secure project commencement. This retainer is non-refundable
                  but fully credited toward your final invoice.
                </li>
                <li>
                  Fixed-price quotations may be offered for larger and more
                  complex projects.
                </li>
                <li>
                  Deliverables include 2D/3D geometry in .STEP format for
                  electromagnetic components.
                </li>
                <li>
                  Written confirmation email will be placed as placed order by
                  customer.
                </li>
              </ul>

              <Form.Check
                type="checkbox"
                label="I accept the terms"
                className="mb-3"
                name="acceptTerms"
                value="true"
                required
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
                disabled={submitting}
              >
                {submitting ? "Saving..." : "Save Information"}
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
