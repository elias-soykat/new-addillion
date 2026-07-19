"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="four">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top-content">
                <div className="footer-logo">
                  <Link href="/">
                    <img className="img-fluid" src="/assets/img/logo.svg" alt="Adillion Logo" />
                  </Link>
                </div>
                <div className="footer-contect">
                  <div className="icon">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1999_295)">
                        <path d="M26.0808 20.4417C25.4052 19.7383 24.5903 19.3622 23.7267 19.3622C22.87 19.3622 22.0481 19.7313 21.3447 20.4348L19.1438 22.6287C18.9627 22.5312 18.7816 22.4407 18.6075 22.3501C18.3568 22.2248 18.12 22.1063 17.918 21.981C15.8564 20.6716 13.9828 18.9652 12.1859 16.7573C11.3153 15.6569 10.7302 14.7305 10.3054 13.7903C10.8765 13.2679 11.4058 12.7247 11.9212 12.2023C12.1162 12.0073 12.3113 11.8053 12.5063 11.6103C13.9689 10.1477 13.9689 8.25321 12.5063 6.79058L10.6049 4.88917C10.3889 4.67326 10.1661 4.45038 9.95713 4.22751C9.53923 3.79569 9.10045 3.34993 8.64773 2.93204C7.97214 2.26341 7.16421 1.9082 6.3145 1.9082C5.46478 1.9082 4.64293 2.26341 3.94644 2.93204C3.93947 2.939 3.93947 2.939 3.93251 2.94597L1.56445 5.33492C0.672947 6.22643 0.164512 7.31295 0.0530735 8.57359C-0.114084 10.6073 0.484896 12.5018 0.944577 13.7415C2.07289 16.7852 3.75839 19.606 6.27271 22.6287C9.32332 26.2713 12.9938 29.1478 17.1867 31.1746C18.7886 31.9338 20.9268 32.8323 23.3158 32.9855C23.462 32.9924 23.6152 32.9994 23.7545 32.9994C25.3634 32.9994 26.7146 32.4213 27.7733 31.2721C27.7802 31.2582 27.7942 31.2512 27.8011 31.2373C28.1633 30.7985 28.5812 30.4015 29.02 29.9767C29.3195 29.6911 29.6259 29.3916 29.9254 29.0782C30.6149 28.3608 30.9771 27.525 30.9771 26.6683C30.9771 25.8047 30.608 24.9759 29.9045 24.2794L26.0808 20.4417Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <span>Call Any Time</span>
                    <h6>
                      <a href="tel:29658718617">2-965-871-8617</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-4 col-sm-6 d-flex">
            <div className="footer-widget">
              <div className="footer-contact mb-40">
                <h4>
                  <svg width="14" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9213 3.4249C11.7076 1.33021 9.55162 0.0504883 7.15416 0.00158203C7.05181 -0.000527344 6.9488 -0.000527344 6.84642 0.00158203C4.449 0.0504883 2.29306 1.33021 1.07923 3.4249C-0.161468 5.566 -0.195414 8.13787 0.988414 10.3047L5.94791 19.3823C5.95013 19.3863 5.95236 19.3904 5.95466 19.3944C6.17287 19.7736 6.56377 20 7.00037 20C7.43693 20 7.82783 19.7736 8.04599 19.3944C8.0483 19.3904 8.05052 19.3863 8.05275 19.3823L13.0122 10.3047C14.196 8.13787 14.162 5.566 12.9213 3.4249ZM7.00029 9.06252C5.44947 9.06252 4.18779 7.80084 4.18779 6.25002C4.18779 4.6992 5.44947 3.43752 7.00029 3.43752C8.55111 3.43752 9.81279 4.6992 9.81279 6.25002C9.81279 7.80084 8.55115 9.06252 7.00029 9.06252Z" />
                  </svg>
                  Address
                </h4>
                <a href="#">House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh</a>
              </div>
              <div className="footer-contact mb-40">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29163 14.6767V18.5417C7.29227 18.6731 7.33422 18.8009 7.41154 18.9071C7.48886 19.0133 7.59764 19.0924 7.72245 19.1334C7.84727 19.1743 7.9818 19.1749 8.10699 19.1351C8.23217 19.0954 8.34167 19.0172 8.41997 18.9117L10.6808 15.8351L7.29163 14.6767ZM19.7375 0.115895C19.6436 0.0490233 19.533 0.00942685 19.418 0.00148505C19.303 -0.00645676 19.188 0.0175656 19.0858 0.0708953L0.3358 9.86256C0.227918 9.91958 0.13903 10.0069 0.0800422 10.1137C0.0210548 10.2205 -0.00546466 10.3422 0.00373833 10.4639C0.0129413 10.5855 0.0574664 10.7019 0.131849 10.7986C0.206232 10.8953 0.307236 10.9683 0.422467 11.0084L5.63497 12.7901L16.7358 3.2984L8.1458 13.6476L16.8816 16.6334C16.9683 16.6625 17.0603 16.6723 17.1512 16.6622C17.2421 16.652 17.3296 16.6221 17.4078 16.5746C17.4859 16.527 17.5526 16.463 17.6034 16.3869C17.6542 16.3108 17.6877 16.2246 17.7016 16.1342L19.9933 0.717562C20.0103 0.603437 19.9953 0.486844 19.9502 0.380665C19.905 0.274486 19.8314 0.182855 19.7375 0.115895Z" />
                  </svg>
                  Say Hello
                </h4>
                <a href="mailto:ifo@example.com">ifo@example.com</a>
                <br />
                <a href="mailto:info@support.com">info@support.com</a>
              </div>
              <div className="footer-contact">
                <h6>See Our New updates</h6>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-inner">
                    <input type="text" placeholder="Email here..." />
                    <button type="submit">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-start justify-content-sm-end">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>Our Solutions</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link href="#services">Web Development</Link>
                  </li>
                  <li>
                    <Link href="#services">Mobile Development</Link>
                  </li>
                  <li>
                    <Link href="#services">Cloud Services</Link>
                  </li>
                  <li>
                    <Link href="#services">Network Connectivity</Link>
                  </li>
                  <li>
                    <Link href="#services">Data analytics</Link>
                  </li>
                  <li>
                    <Link href="#services">Software Development</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>Company</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link href="#about">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Case Study</Link>
                  </li>
                  <li>
                    <Link href="#">News & Article</Link>
                  </li>
                  <li>
                    <Link href="#">Our Team</Link>
                  </li>
                  <li>
                    <Link href="#">All Portfolio</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing Plan</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-end">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>Resources</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link href="#">Support Area</Link>
                  </li>
                  <li>
                    <Link href="#">Support Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Career</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing Plan</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-btn-content">
                <div className="copyright-area">
                  <p>
                    ©Copyright 2023 <a href="#">Adillion</a>
                  </p>
                </div>
                <div className="footer-social">
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
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
