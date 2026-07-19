"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function Testimonial() {
  return (
    <div className="home5-testimonial-area mb-130">
      <div className="container">
        <div className="row g-lg-4 gy-5 align-items-center">
          <div
            className="col-lg-4 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="section-title-5">
              <span>CLIENT REVIEW</span>
              <h2>Happy Client</h2>
              <div className="testimolial-left">
                <p>
                  Integer purus odio, placerat nec rhoncus in, ullamcorperon nec doloroei. aptent
                  taciti sociosqu ad litora torquent pero conubia nostra persento.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 position-relative wow animate fadeInUp"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <Swiper
              loop={true}
              spaceBetween={0}
              speed={2000}
              centeredSlides={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".nextbtn3",
                prevEl: ".prevbtn3",
              }}
              modules={[Autoplay, Navigation]}
              className="home5-testimonial-slider"
            >
              <SwiperSlide>
                <div className="testimonial-wrapper">
                  <div className="testimonial-top">
                    <div className="author-img">
                      <img src="/assets/img/home-5/author-img.png" alt="Watson Bekaryn" />
                    </div>
                    <div className="review">
                      <img src="/assets/img/home-5/trustpilot-2.svg" alt="Trustpilot" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “I cannot express enough how satisfied I am with the web developmet
                      services provided by Egens Lab. They are very good and User friendly and
                      they work very nice and creative”
                    </p>
                  </div>
                  <div className="testimonial-btm">
                    <div className="author-content">
                      <h4>Watson Bekaryn</h4>
                      <span>CEO At atlantis.com</span>
                    </div>
                    <div className="quote-icon">
                      <img src="/assets/img/home-5/left-quote.svg" alt="Quote" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-wrapper">
                  <div className="testimonial-top">
                    <div className="author-img">
                      <img src="/assets/img/home-5/author-img2.png" alt="Doland Skrml" />
                    </div>
                    <div className="review">
                      <img src="/assets/img/home-5/trustpilot-2.svg" alt="Trustpilot" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “I cannot express enough how satisfied I am with the web developmet
                      services provided by Egens Lab. They are very good and User friendly and
                      they work very nice and creative”
                    </p>
                  </div>
                  <div className="testimonial-btm">
                    <div className="author-content">
                      <h4>Doland Skrml</h4>
                      <span>CEO At atlantis.com</span>
                    </div>
                    <div className="quote-icon">
                      <img src="/assets/img/home-5/left-quote.svg" alt="Quote" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-wrapper">
                  <div className="testimonial-top">
                    <div className="author-img">
                      <img src="/assets/img/home-5/author-img3.png" alt="Josh Bush" />
                    </div>
                    <div className="review">
                      <img src="/assets/img/home-5/trustpilot-2.svg" alt="Trustpilot" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “I cannot express enough how satisfied I am with the web developmet
                      services provided by Egens Lab. They are very good and User friendly and
                      they work very nice and creative”
                    </p>
                  </div>
                  <div className="testimonial-btm">
                    <div className="author-content">
                      <h4>Josh Bush</h4>
                      <span>CEO At atlantis.com</span>
                    </div>
                    <div className="quote-icon">
                      <img src="/assets/img/home-5/left-quote.svg" alt="Quote" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn3">arrow up</div>
              <div className="swiper-btn nextbtn3">arrow down</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
