import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-decorative-overlay"></div>
        <div className="footer-content-wrapper">
          <div className="footer-brand-section">
            <div className="footer-thq-footer-logo-container-elm footer-logo-container">
              <img
                alt={props.imageAlt4}
                src={props.imageSrc4}
                className="footer-image"
              />
              <p className="footer-tagline section-content">
                Gourmet Pizza, Delivered.
              </p>
            </div>
          </div>
          <div className="footer-nav-section">
            <nav aria-label="Footer navigation" className="footer-nav">
              <Link to="/">
                <div className="footer-thq-footer-nav-link-elm1 footer-nav-link">
                  <span>Homepage</span>
                </div>
              </Link>
              <Link to="/gourmet-pizza-menu">
                <div className="footer-thq-footer-nav-link-elm2 footer-nav-link">
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
              </Link>
              <Link to="/about-us">
                <div className="footer-thq-footer-nav-link-elm3 footer-nav-link">
                  <span>About Us</span>
                </div>
              </Link>
              <Link to="/delivery-sustainability">
                <div className="footer-thq-footer-nav-link-elm4 footer-nav-link">
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
              </Link>
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
                <a href="mailto:hello@daelmogourmetpizzeria.ca?subject=">
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
              <a
                href="https://www.ubereats.com/ca?msockid=1298bc78b6d86c021899a903b7b56de6"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-thq-footer-delivery-badge-elm1 footer-delivery-badge"
              >
                Uber Eats
              </a>
              <a
                href="https://www.doordash.com/?msockid=1298bc78b6d86c021899a903b7b56de6"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-thq-footer-delivery-badge-elm2 footer-delivery-badge"
              >
                DoorDash
              </a>
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
                  className="footer-thq-footer-social-link-elm footer-social-link"
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
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom-section">
            <p className="footer-legal-text section-content">
              {' '}
              2025 Da Elmo Gourmet Pizzeria Inc. All rights reserved.
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

Footer.defaultProps = {
  imageAlt4: 'image',
  imageSrc4: '/elmo-pizzeria-transparent-200w.png',
}

Footer.propTypes = {
  imageAlt4: PropTypes.string,
  imageSrc4: PropTypes.string,
}

export default Footer
