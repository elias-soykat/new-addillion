import React from "react";

export default function Network() {
  const partners = [
    "partner-01.svg",
    "partner-02.svg",
    "partner-03.svg",
    "partner-04.svg",
    "partner-05.svg",
    "partner-06.svg",
    "partner-07.svg",
    "partner-08.svg",
    "partner-09.svg",
    "partner-10.svg",
    "partner-11.svg",
    "partner-12.svg",
  ];

  return (
    <div className="home5-partner-area mb-130">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="section-title-5">
              <span>Partnerships</span>
              <h2>Our Network</h2>
            </div>
            <div className="section-content">
              <p>
                Morbi interdum pellentesque nunc, luctusongi pretium nulla
                luctus at Aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12 wow animate fadeInUp"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="partner-wrap">
              <ul>
                {partners.map((partner, idx) => (
                  <li key={idx}>
                    <img src={`/assets/img/home-5/${partner}`} alt={`Partner ${idx + 1}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
