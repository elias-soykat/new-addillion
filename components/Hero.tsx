"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <div className="banner-area6">
      <div className="banner-wrap">
        <div className="social-area">
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
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-pinterest-alt"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-lg-5 d-flex align-items-center">
            <div className="banner-content">
              <h1>
                Set Your <span>Business</span>
                <br />
                New Ideas.
              </h1>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. oltorrent gongi Duis
                a orci nunc. Suspendisse ac convallis sapien, quis commodo libero. Donec nec duomoi luctus,
                pellentesque lacus sed, mollis going leo.
              </p>
              <div className="banner-btn-group">
                <Link className="primary-btn3" href="#contact">
                  Free Consultancy
                </Link>
                <Link className="primary-btn5" href="#services">
                  <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                  </svg>
                  <div className="content">
                    VIEW all work
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-7 d-flex jsutify-content-end">
            <div className="banner-img-wrap">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                speed={3000}
                effect="fade"
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="banner5-slider"
              >
                <SwiperSlide>
                  <div className="banner-img">
                    <img className="img-fluid" src="/assets/img/home-6/home6-banner-img.png" alt="Banner 1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="banner-img">
                    <img className="img-fluid" src="/assets/img/home-6/home6-banner-img.png" alt="Banner 2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="banner-img">
                    <img className="img-fluid" src="/assets/img/home-6/home6-banner-img2.png" alt="Banner 3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="banner-img">
                    <img className="img-fluid" src="/assets/img/home-6/home6-banner-img3.png" alt="Banner 4" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
