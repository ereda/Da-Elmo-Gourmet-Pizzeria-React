import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container10">
      <div className="navigation-container11">
        <div className="navigation-container12">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link::before, .navigation-overlay-link::before, .navigation-logo-text::after {
  transition: none;
}
.navigation-overlay-item {
  animation: none;
  opacity: 1;
  transform: translateY(0);
}
.navigation-toggle:hover, .navigation-close:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation">
        <div className="navigation-thq-navigation-container-elm navigation-container">
          <a href="/">
            <div
              aria-label="Microcrust Pizza Homepage"
              className="navigation-logo"
            >
              <div className="nav-logo-container">
                <div className="navigation-thq-nav-logo-icon-elm nav-logo-icon">
                  <img
                    alt="Gourmet pizza delivery - Chef-perfected artisan pizzas with fresh microgreen garnish"
                    src="/elmo-pizzeria-no-padding-200w.jpg"
                    width="180"
                    height="60"
                    className="navigation-thq-nav-logo-elm nav-logo"
                  />
                </div>
                <div className="navigation-thq-nav-logo-text-elm nav-logo-text">
                  <div className="nav-logo-brand">
                    <span>Da Elmo</span>
                  </div>
                  <div className="nav-logo-descriptor">
                    <span>Gourmet Pizzeria</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <ul className="navigation-links">
            <Link to="/">
              <li className="navigation-thq-navigation-link-item-elm1 navigation-link-item">
                <div>
                  <div className="thq-navigation-link-elm1 navigation-link">
                    <span>Homepage</span>
                  </div>
                </div>
              </li>
            </Link>
            <Link to="/gourmet-pizza-menu">
              <li className="navigation-thq-navigation-link-item-elm2 navigation-link-item">
                <div>
                  <div className="thq-navigation-link-elm2 navigation-link">
                    <span>Gourmet Pizza Menu</span>
                  </div>
                </div>
              </li>
            </Link>
            <Link to="/philosophy">
              <li className="navigation-thq-navigation-link-item-elm3 navigation-link-item">
                <div>
                  <div className="thq-navigation-link-elm2 navigation-link">
                    <span>Our Philosophy</span>
                  </div>
                </div>
              </li>
            </Link>
            <Link to="/about-us">
              <li className="navigation-thq-navigation-link-item-elm4 navigation-link-item">
                <div>
                  <div className="thq-navigation-link-elm3 navigation-link">
                    <span>About Us</span>
                  </div>
                </div>
              </li>
            </Link>
            <Link to="/delivery-sustainability">
              <li className="navigation-thq-navigation-link-item-elm5 navigation-link-item">
                <div>
                  <div className="navigation-link thq-navigation-link-elm4">
                    <span>Delivery &amp; Sustainability</span>
                  </div>
                </div>
              </li>
            </Link>
          </ul>
          <button
            aria-label="Open navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-thq-navigation-toggle-icon-elm"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay">
          <div className="navigation-overlay-header">
            <a href="/">
              <div
                aria-label="Da Elmo Gourmet Pizzeria Homepage"
                className="navigation-overlay-logo"
              >
                <span className="section-title navigation-logo-text">
                  Da Elmo
                </span>
              </div>
            </a>
            <button
              aria-label="Close navigation menu"
              className="navigation-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-thq-navigation-close-icon-elm"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="navigation-overlay-links">
            <li className="navigation-overlay-item">
              <a href="index.html">
                <div>
                  <div className="navigation-overlay-link">
                    <span>Homepage</span>
                  </div>
                </div>
              </a>
            </li>
            <li
              href="gourmet-pizza-menu.html"
              className="navigation-overlay-item"
            >
              <a href="gourmet-pizza-menu.html">
                <div>
                  <div className="navigation-overlay-link">
                    <span>Gourmet Pizza Menu</span>
                  </div>
                </div>
              </a>
            </li>
            <li href="about-us.html" className="navigation-overlay-item">
              <a href="about-us.html">
                <div>
                  <div className="navigation-overlay-link">
                    <span>About Us</span>
                  </div>
                </div>
              </a>
            </li>
            <li
              href="delivery-sustainability.html"
              className="navigation-overlay-item"
            >
              <a href="delivery-sustainability.html">
                <div>
                  <div className="navigation-overlay-link">
                    <span>Delivery &amp; Sustainability</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navigation-container22">
        <div className="navigation-container23">
          <Script
            html={`<style>
        @keyframes navigationSlideIn {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container24">
        <div className="navigation-container25">
          <Script
            html={`<script defer data-name="navigation-toggle">
(function(){
  const navigationToggle = document.querySelector(".navigation-toggle")
  const navigationOverlay = document.querySelector(".navigation-overlay")
  const navigationClose = document.querySelector(".navigation-close")
  const navigationOverlayLinks = document.querySelectorAll(
    ".navigation-overlay-link"
  )

  function openNavigation() {
    navigationOverlay.classList.add("is-open")
    navigationToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeNavigation() {
    navigationOverlay.classList.remove("is-open")
    navigationToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", openNavigation)
  navigationClose.addEventListener("click", closeNavigation)

  navigationOverlayLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation)
  })

  navigationOverlay.addEventListener("click", (e) => {
    if (e.target === navigationOverlay) {
      closeNavigation()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigationOverlay.classList.contains("is-open")) {
      closeNavigation()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
