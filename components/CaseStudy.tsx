import React from "react";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <div className="home5-case-study mb-130">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-4">
            <div className="section-title-5">
              <span>CASE STUDY</span>
              <h2>Success Stories</h2>
            </div>
            <div className="view-all-btn">
              <Link className="primary-btn3" href="#">
                View All Case
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Item 1 */}
            <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <span>Web Development</span>
                    <h3>
                      <Link href="#">Building a Scalable Cloud Infrastructure</Link>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="/assets/img/home-5/home5-case-01.png"
                        alt="Case Study 1"
                      />
                    </div>
                    <div className="learn-more-btn">
                      <Link className="primary-btn8" href="#">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                        </svg>
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <span>Software development</span>
                    <h3>
                      <Link href="#">Leveraging Data Analytics for Business Insights</Link>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="/assets/img/home-5/home5-case-02.png"
                        alt="Case Study 2"
                      />
                    </div>
                    <div className="learn-more-btn">
                      <Link className="primary-btn8" href="#">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                        </svg>
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <span>Digital marketing</span>
                    <h3>
                      <Link href="#">Optimizing IT Infrastructure for Cost Efficiency</Link>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="/assets/img/home-5/home5-case-03.png"
                        alt="Case Study 3"
                      />
                    </div>
                    <div className="learn-more-btn">
                      <Link className="primary-btn8" href="#">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                        </svg>
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <span>Data analytics</span>
                    <h3>
                      <Link href="#">Enhancing Customer Engagement</Link>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="/assets/img/home-5/home5-case-04.png"
                        alt="Case Study 4"
                      />
                    </div>
                    <div className="learn-more-btn">
                      <Link className="primary-btn8" href="#">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                        </svg>
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
