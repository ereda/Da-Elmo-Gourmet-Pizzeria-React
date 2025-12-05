import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-decorative-overlay"></div>
        <div className="footer-content-wrapper">
          <div className="footer-brand-section">
            <div className="footer-logo-container">
              <h2 className="footer-brand-name section-title">
                Microcrust Pizza
              </h2>
              <p className="footer-tagline section-content">
                Gourmet Pizza, Delivered.
              </p>
            </div>
          </div>
          <div className="footer-nav-section">
            <nav aria-label="Footer navigation" className="footer-nav">
              <a href="#homepage">
                <div className="footer-nav-link">
                  <span>Homepage</span>
                </div>
              </a>
              <a href="#gourmet-pizza-menu">
                <div className="footer-nav-link">
                  <span>
                    {' '}
                    Gourmet Pizza Menu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#about-us">
                <div className="footer-nav-link">
                  <span>About Us</span>
                </div>
              </a>
              <a href="#delivery-sustainability">
                <div className="footer-nav-link">
                  <span>
                    {' '}
                    Delivery &amp; Sustainability
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </nav>
          </div>
          <div className="footer-contact-section">
            <div className="footer-contact-grid">
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                      <circle r="3" cx="10" cy="10"></circle>
                    </g>
                  </svg>
                </div>
                <span className="footer-contact-text section-content">
                  3954 Boulevard Leman, Laval
                </span>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <a href="tel:+15551234567">
                  <div className="footer-contact-link section-content">
                    <span>
                      {' '}
                      +1 (555) 123-4567
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                </div>
                <a href="mailto:info@microcrustpizza.com?subject=">
                  <div className="footer-contact-link section-content">
                    <span> hello@daelmogourmetpizzeria.ca</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-delivery-section">
            <p className="footer-delivery-text section-content">
              {' '}
              Available exclusively on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="footer-delivery-badges">
              <span className="footer-delivery-badge">Uber Eats</span>
              <span className="footer-delivery-badge">DoorDash</span>
            </div>
          </div>
          <div className="footer-social-section">
            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/daelmogourmetpizzeria/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  aria-label="Follow us on Instagram"
                  className="footer-footer-social-link1 footer-social-link"
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-social-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                        width="20"
                        height="20"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                    </g>
                  </svg>
                </div>
              </a>
              <a href="#facebook">
                <div
                  aria-label="Follow us on Facebook"
                  className="footer-social-link"
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-social-icon"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#twitter">
                <div
                  aria-label="Follow us on Twitter"
                  className="footer-social-link"
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-social-icon"
                  >
                    <path
                      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom-section">
            <p className="footer-legal-text section-content">
              {' '}
              &amp;copy; 2025 Microcrust Pizza. All rights reserved.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="footer-legal-links">
              <a href="#privacy">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <span className="footer-legal-separator">|</span>
              <a href="#terms">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
