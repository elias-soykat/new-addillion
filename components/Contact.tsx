"use client";

import React, { useState } from "react";

export default function Contact() {
  const [activeStep, setActiveStep] = useState<string>("collapseOne");

  const toggleStep = (stepId: string) => {
    setActiveStep((prev) => (prev === stepId ? "" : stepId));
  };

  return (
    <div className="home6-contact-section sec-mar" id="contact">
      <div className="container">
        <div className="row g-lg-4 gy-5 justify-content-center">
          <div
            className="col-lg-6 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="section-title-6 text-center mb-55">
              <span>Contact</span>
              <h2>Contact</h2>
            </div>
            <div className="contact-content">
              <p>
                We’re happy to answer any questions you may have and help determine which of our
                services best fit your needs.
              </p>
              <div className="contact-number">
                <p>
                  Call Us Now: <a href="tel:+8801233456789">+880 123 345 6789</a>
                </p>
              </div>
              <div className="contact-step">
                <div className="accordion" id="accordionExample">
                  {/* Step 01 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={`accordion-button ${activeStep === "collapseOne" ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={activeStep === "collapseOne" ? "true" : "false"}
                        onClick={() => toggleStep("collapseOne")}
                      >
                        Step 01
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className={`accordion-collapse collapse ${activeStep === "collapseOne" ? "show" : ""}`}
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu
                        quis ex. placerat felis non aliquam.
                      </div>
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className={`accordion-button ${activeStep === "collapseTwo" ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={activeStep === "collapseTwo" ? "true" : "false"}
                        onClick={() => toggleStep("collapseTwo")}
                      >
                        Step 02
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className={`accordion-collapse collapse ${activeStep === "collapseTwo" ? "show" : ""}`}
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu
                        quis ex. placerat felis non aliquam.
                      </div>
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className={`accordion-button ${activeStep === "collapseThree" ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={activeStep === "collapseThree" ? "true" : "false"}
                        onClick={() => toggleStep("collapseThree")}
                      >
                        Step 03
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className={`accordion-collapse collapse ${activeStep === "collapseThree" ? "show" : ""}`}
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu
                        quis ex. placerat felis non aliquam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="form-tltle">
                <h5>Make a Free Consulting</h5>
              </div>
              <div className="contact-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6 mb-20">
                      <div className="form-inner">
                        <label>First name</label>
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-20">
                      <div className="form-inner">
                        <label>Last name</label>
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                      <div className="form-inner">
                        <label>Company/Organization</label>
                        <input type="text" placeholder="Company/Organization" />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                      <div className="form-inner">
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                      <div className="form-inner">
                        <label>Phone</label>
                        <input type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                      <div className="form-inner">
                        <label>Message</label>
                        <textarea placeholder="Write your message here..."></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <button className="primary-btn3" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
