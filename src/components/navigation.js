import React from 'react'

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
            <li className="navigation-link-item">
              <a href="index.html">
                <div>
                  <div className="thq-navigation-link-elm1 navigation-link">
                    <span>Homepage</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="gourmet-pizza-menu.html">
                <div>
                  <div className="thq-navigation-link-elm2 navigation-link">
                    <span>Gourmet Pizza Menu</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="about-us.html">
                <div>
                  <div className="thq-navigation-link-elm3 navigation-link">
                    <span>About Us</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="delivery-sustainability.html">
                <div>
                  <div className="thq-navigation-link-elm4 navigation-link">
                    <span>Delivery &amp; Sustainability</span>
                  </div>
                </div>
              </a>
            </li>
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
                aria-label="Microcrust Pizza Homepage"
                className="navigation-overlay-logo"
              >
                <span className="section-title navigation-logo-text">
                  Microcrust
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
              <a href="/">
                <div className="navigation-overlay-link">
                  <span>Homepage</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/menu">
                <div className="navigation-overlay-link">
                  <span>Gourmet Pizza Menu</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/about">
                <div className="navigation-overlay-link">
                  <span>About Us</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/delivery">
                <div className="navigation-overlay-link">
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
            </li>
          </ul>
        </div>
      </nav>
      <div className="navigation-container17">
        <div className="navigation-container18">
          <Script
            html={`<style>
        @keyframes navigationSlideIn {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container19">
        <div className="navigation-container20">
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
