import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "Mateo Daniel",
      role: "Founder, CTO",
      img: "/assets/img/home-4/experts-01.png",
      delay: "200ms",
    },
    {
      name: "Elias Josiah",
      role: "Co-Founder, CEO",
      img: "/assets/img/home-4/experts-02.png",
      delay: "300ms",
    },
    {
      name: "Miles Jaxon",
      role: "Head of HR & Manager",
      img: "/assets/img/home-4/experts-03.png",
      delay: "400ms",
    },
    {
      name: "Silas Nicholas",
      role: "Software Engineer",
      img: "/assets/img/home-4/experts-04.png",
      delay: "500ms",
    },
  ];

  return (
    <div className="home3-team-area sec-mar">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title-3 text-center">
              <h2>Team Members</h2>
              <p>
                Services are professional offerings provided by businesses to meet specific needs or
                solve problems for their customers. Services can range from your budject.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="col-lg-3 col-sm-6 experts wow animate fadeInUp"
              data-wow-delay={member.delay}
              data-wow-duration="1500ms"
            >
              <div className="experts-card magnetic-item">
                <div className="experts-img">
                  <img className="img-fluid" src={member.img} alt={member.name} />
                  <div className="expert-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
