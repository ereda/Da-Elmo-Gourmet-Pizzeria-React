import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './delivery-sustainability.css'

const DeliverySustainability = (props) => {
  return (
    <div className="delivery-sustainability-container1">
      <Helmet>
        <title>Delivery-Sustainability - Da Elmo Gourmet Pizzeria</title>
        <meta
          property="og:title"
          content="Delivery-Sustainability - Da Elmo Gourmet Pizzeria"
        />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/delivery-sustainability"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="delivery-sustainability-container2">
        <div className="delivery-sustainability-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-parallax-bg, .hero-slide, .sustainability-card, .microgreens-card, .menu-timeline-content, .gallery-item img, .gallery-overlay {
  transition: none;
}
.hero-parallax-bg {
  transform: scale(1);
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="hero-carousel-container">
        <div className="hero-carousel-track">
          <div className="hero-slide-active hero-slide">
            <div className="delivery-sustainability-thq-hero-parallax-bg-elm1 hero-parallax-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content-wrapper">
              <div className="delivery---sustainability-hero-content">
                <h1 className="hero-title delivery---sustainability-hero-title">
                  Gourmet Pizza, Delivered to Perfection
                </h1>
                <p className="delivery---sustainability-hero-subtitle hero-subtitle">
                  {' '}
                  Uncompromising quality from our kitchen to your door.
                  Experience the freshness of microgreen-finished artisan pizzas
                  through Uber Eats and DoorDash.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-buttons">
                  <a
                    href="https://www.ubereats.com/ca?msockid=1298bc78b6d86c021899a903b7b56de6"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="delivery-sustainability-thq-btn-elm1 btn-primary btn btn-lg"
                  >
                    Order on Uber Eats
                  </a>
                  <a
                    href="https://www.doordash.com/?msockid=1298bc78b6d86c021899a903b7b56de6"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="delivery-sustainability-thq-btn-elm2 btn btn-outline btn-lg"
                  >
                    Order on DoorDash
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide">
            <div className="delivery-sustainability-thq-hero-parallax-bg-elm2 hero-parallax-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content-wrapper">
              <div className="delivery---sustainability-hero-content">
                <h1 className="hero-title delivery---sustainability-hero-title">
                  Freshness Guaranteed in Every Bite
                </h1>
                <p className="delivery---sustainability-hero-subtitle hero-subtitle">
                  {' '}
                  Our signature microgreens arrive in compostable cups, ensuring
                  crisp, vibrant garnishes that elevate every slice.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-buttons">
                  <button className="btn-secondary btn btn-lg">
                    Explore Our Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide">
            <div className="delivery-sustainability-thq-hero-parallax-bg-elm3 hero-parallax-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content-wrapper">
              <div className="delivery---sustainability-hero-content">
                <h1 className="hero-title delivery---sustainability-hero-title">
                  Seamless Delivery, Sustainable Practices
                </h1>
                <p className="delivery---sustainability-hero-subtitle hero-subtitle">
                  {' '}
                  Chef-perfected pizzas delivered with eco-friendly packaging.
                  Taste the difference of delivery-first gourmet cuisine.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-buttons">
                  <button className="btn-accent btn btn-lg">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="delivery-process-section">
        <div className="delivery-process-header">
          <h2 className="section-title">From Kitchen to Your Doorstep</h2>
          <p className="section-subtitle">
            {' '}
            Our seamless delivery process ensures every pizza arrives fresh,
            hot, and perfectly garnished with our signature microgreens.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="delivery-accordion-wrapper">
          <details className="delivery-accordion-item">
            <summary className="delivery-accordion-summary">
              <div className="delivery-accordion-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewbox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                  </g>
                </svg>
              </div>
              <div className="delivery-accordion-header">
                <h3 className="delivery-accordion-title">
                  Chef-Perfected Preparation
                </h3>
                <p className="delivery-accordion-meta">Step 1</p>
              </div>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
                className="delivery-accordion-chevron"
              >
                <path
                  d="m18 15l-6-6l-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </summary>
            <div className="delivery-accordion-content">
              <p className="accordion-paragraph section-content">
                Each pizza is handcrafted in our artisan kitchen using premium
                avocado oil dough and authentic San Marzano tomato sauce. We
                meticulously select and prepare every topping to ensure perfect
                flavor balance.
              </p>
              <img
                alt="Chef spreading tomato sauce on pizza dough"
                src="https://images.pexels.com/photos/5903539/pexels-photo-5903539.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="delivery-accordion-image"
              />
            </div>
          </details>
          <details className="delivery-accordion-item">
            <summary className="delivery-accordion-summary">
              <div className="delivery-accordion-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="delivery-sustainability-container4">
                <h3 className="delivery-accordion-title">
                  Eco-Friendly Packaging
                </h3>
                <p className="delivery-accordion-meta">Step 2</p>
              </div>
            </summary>
            <div className="delivery-sustainability-thq-delivery-accordion-header-elm2 delivery-accordion-header"></div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewbox="0 0 24 24"
              className="delivery-accordion-chevron"
            >
              <path
                d="m18 15l-6-6l-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="delivery-accordion-content">
              <p className="section-content">
                {' '}
                Your hot pizza is carefully placed in premium delivery boxes,
                while our signature GMO-free, pesticide-free microgreens are
                sealed in clear 3 oz compostable cups. This innovative packaging
                ensures your garnish arrives crisp, vibrant, and never crushed.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <img
                alt="Fresh microgreens and gourmet ingredients"
                src="/ai-generated/ai-generated-1765611440507-600w.png"
                loading="lazy"
                className="delivery-accordion-image"
              />
            </div>
          </details>
          <details className="delivery-accordion-item">
            <summary className="delivery-accordion-summary">
              <div className="delivery-accordion-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewbox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <div className="delivery-accordion-header">
                <h3 className="delivery-accordion-title">Real-Time Tracking</h3>
                <p className="delivery-accordion-meta">Step 3</p>
              </div>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
                className="delivery-accordion-chevron"
              >
                <path
                  d="m18 15l-6-6l-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </summary>
            <div className="delivery-accordion-content">
              <p className="section-content">
                {' '}
                Track your order in real-time through Uber Eats or DoorDash.
                From the moment your pizza enters the oven to arrival at your
                door, you&apos;ll know exactly when to expect your gourmet meal.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="delivery-tracking-visual">
                <div className="delivery-tracking-step">
                  <div className="delivery-tracking-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="section-content">Order Confirmed</span>
                </div>
                <div className="delivery-tracking-step">
                  <div className="delivery-tracking-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="section-content">Preparing</span>
                </div>
                <div className="delivery-tracking-step">
                  <div className="delivery-tracking-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="section-content">En Route</span>
                </div>
              </div>
            </div>
          </details>
          <details className="delivery-accordion-item">
            <summary className="delivery-accordion-summary">
              <div className="delivery-accordion-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewbox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                  </g>
                </svg>
              </div>
              <div className="delivery-accordion-header">
                <h3 className="delivery-accordion-title">
                  Arrival &amp; Final Touch
                </h3>
                <p className="delivery-accordion-meta">Step 4</p>
              </div>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
                className="delivery-accordion-chevron"
              >
                <path
                  d="m18 15l-6-6l-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </summary>
            <div className="delivery-accordion-content">
              <p className="section-content">
                Your pizza arrives hot and ready. Simply scatter the vibrant
                microgreens from the compostable cup over your pizza for that
                final chef&apos;s touch. Experience the explosive freshness that
                defines Da Elmo Gourmet Pizzeria.
              </p>
              <img
                alt="Gourmet pizza slice being lifted"
                src="/ai-generated/ai-generated-1765593723632-600w.png"
                loading="lazy"
                className="delivery-accordion-image"
              />
            </div>
          </details>
        </div>
      </section>
      <section className="sustainability-section">
        <div className="sustainability-container">
          <div className="sustainability-header">
            <h2 className="section-title">Our Commitment to Sustainability</h2>
            <p className="section-subtitle">
              {' '}
              Every element of our packaging is designed with the planet in
              mind, from compostable cups to eco-friendly materials.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="sustainability-carousel-wrapper">
            <div className="sustainability-carousel-track">
              <div className="sustainability-carousel-item">
                <div className="sustainability-card">
                  <div className="sustainability-card-image">
                    <img
                      alt="Fresh microgreens in sustainable packaging"
                      src="/ai-generated/ai-generated-1765593992635-1500w.png"
                      loading="lazy"
                    />
                    <div className="sustainability-card-badge">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"></path>
                          <path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"></path>
                          <path d="m13.378 9.633l4.096 1.098l1.097-4.096"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="sustainability-card-content">
                    <h3 className="sustainability-card-title">
                      {' '}
                      Compostable Microgreen Cups
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="section-content">
                      {' '}
                      Our clear 3 oz portion cups are 100% compostable, breaking
                      down naturally without harming the environment. They keep
                      your microgreens fresh while reducing plastic waste.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">
                        100% Compostable Material
                      </span>
                    </div>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">
                        Crystal Clear Visibility
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sustainability-carousel-item">
                <div className="sustainability-card">
                  <div className="sustainability-card-image">
                    <img
                      alt="Eco-friendly pizza delivery box"
                      src="/ai-generated/ai-generated-1765594142205-1500w.png"
                      loading="lazy"
                    />
                    <div className="sustainability-card-badge">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="sustainability-card-content">
                    <h3 className="sustainability-card-title">
                      Recycled Delivery Boxes
                    </h3>
                    <p className="section-content">
                      {' '}
                      Our pizza boxes are made from 100% recycled cardboard and
                      are fully recyclable. Heat-resistant and grease-proof
                      without harmful chemicals.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">
                        100% Recycled Content
                      </span>
                    </div>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">Food-Safe Coating</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sustainability-carousel-item">
                <div className="sustainability-card">
                  <div className="sustainability-card-image">
                    <img
                      alt="Sustainable packaging materials"
                      src="https://images.pexels.com/photos/3651044/pexels-photo-3651044.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                    />
                    <div className="sustainability-card-badge">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="sustainability-card-content">
                    <h3 className="sustainability-card-title">
                      Zero-Plastic Commitment
                    </h3>
                    <p className="section-content">
                      {' '}
                      We&apos;ve eliminated single-use plastics from our entire
                      operation. Every utensil, napkin, and container is either
                      compostable or recyclable.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">
                        No Single-Use Plastics
                      </span>
                    </div>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">
                        Plant-Based Alternatives
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sustainability-carousel-item">
                <div className="sustainability-card">
                  <div className="sustainability-card-image">
                    <img
                      alt="Local sourcing fresh ingredients"
                      src="https://images.pexels.com/photos/1346381/pexels-photo-1346381.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                    />
                    <div className="sustainability-card-badge">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="sustainability-card-content">
                    <h3 className="sustainability-card-title">
                      {' '}
                      Local &amp; Ethical Sourcing
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="section-content">
                      {' '}
                      We partner with local farms for our microgreens and
                      prioritize suppliers who share our commitment to
                      sustainable, ethical practices.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">
                        Local Farm Partnerships
                      </span>
                    </div>
                    <div className="sustainability-card-feature">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="section-content">
                        Reduced Carbon Footprint
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="microgreens-section">
        <div className="microgreens-header">
          <h2 className="section-title">The Microgreen Difference</h2>
          <p className="section-subtitle">
            {' '}
            GMO-free, pesticide-free microgreens that transform every pizza into
            a gourmet experience, delivered fresh and vibrant.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="microgreens-grid">
          <div className="microgreens-card">
            <div className="microgreens-card-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewbox="0 0 24 24"
              >
                <path
                  d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="microgreens-card-title">Hyper-Fresh Garnish</h3>
            <p className="section-content">
              {' '}
              Our microgreens are harvested at peak freshness and packaged
              immediately. The result is explosive flavor and vibrant color that
              elevates every bite.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="microgreens-card">
            <div className="microgreens-card-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewbox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="microgreens-card-title">GMO-Free Standards</h3>
            <p className="section-content">
              {' '}
              Every microgreen is certified GMO-free, ensuring you receive only
              natural, unmodified greens. We source from trusted growers who
              share our commitment to purity.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="microgreens-card">
            <div className="microgreens-card-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewbox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </g>
              </svg>
            </div>
            <h3 className="microgreens-card-title">Pesticide-Free Growth</h3>
            <p className="section-content">
              {' '}
              Grown without synthetic pesticides or chemicals, our microgreens
              are cultivated in controlled environments using organic practices
              for the safest, cleanest greens.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="microgreens-card">
            <div className="microgreens-card-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewbox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                  <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                </g>
              </svg>
            </div>
            <h3 className="microgreens-card-title">Crush-Proof Packaging</h3>
            <p className="section-content">
              {' '}
              Our innovative 3 oz compostable cups protect your microgreens
              during transit. They arrive crisp, dry, and ready to scatter for
              that perfect finishing touch.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="microgreens-card">
            <div className="microgreens-card-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewbox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="microgreens-card-title">Commitment to Freshness</h3>
            <p className="section-content">
              We guarantee your microgreens will arrive vibrant and fresh. Our
              packaging system maintains optimal moisture and temperature
              throughout delivery.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="microgreens-card">
            <div className="microgreens-card-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewbox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="microgreens-card-title">Chef-Curated Pairings</h3>
            <p className="section-content">
              {' '}
              Each pizza features a specifically chosen microgreen variety that
              balances and enhances its unique flavor profile. From peppery
              radish to earthy broccoli microgreens, every pairing is
              intentional.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
        </div>
      </section>
      <section className="menu-philosophy-section">
        <div className="menu-philosophy-header">
          <h2 className="section-title">Why No Customization?</h2>
          <p className="section-subtitle">
            Our curated menu of seven chef-driven pizzas represents years of
            culinary refinement. Every ingredient, every ratio, every topping is
            perfectly balanced for the ultimate gourmet experience.
          </p>
        </div>
        <div className="menu-timeline">
          <div className="menu-timeline-left menu-timeline-item">
            <div className="menu-timeline-marker"></div>
            <div className="menu-timeline-content">
              <div className="menu-timeline-number">
                <span>01</span>
              </div>
              <h3 className="menu-timeline-title">Perfected Flavor Balance</h3>
              <p className="section-content">
                {' '}
                Each pizza is the result of countless hours of testing and
                refinement. Our chefs have calibrated every element to create
                harmonious flavor profiles that can&apos;t be improved by
                customization.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="menu-timeline-image">
                <img
                  alt="Chef perfecting pizza preparation"
                  src="https://images.pexels.com/photos/5903539/pexels-photo-5903539.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="menu-timeline-item menu-timeline-right">
            <div className="menu-timeline-marker"></div>
            <div className="menu-timeline-content">
              <div className="menu-timeline-number">
                <span>02</span>
              </div>
              <h3 className="menu-timeline-title">Consistent Excellence</h3>
              <p className="section-content">
                {' '}
                By eliminating customization, we ensure every pizza meets our
                exact standards every time. You&apos;ll never experience a
                poorly executed order or unbalanced toppings.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="menu-timeline-image">
                <img
                  alt="Perfectly crafted pizza slice"
                  src="https://images.pexels.com/photos/5903447/pexels-photo-5903447.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="menu-timeline-left menu-timeline-item">
            <div className="menu-timeline-marker"></div>
            <div className="menu-timeline-content">
              <div className="menu-timeline-number">
                <span>03</span>
              </div>
              <h3 className="menu-timeline-title">Speed &amp; Efficiency</h3>
              <p className="section-content">
                {' '}
                Without the complexity of customization, our kitchen operates
                with precision and speed. Your order is prepared faster,
                delivered hotter, and arrives exactly as the chef intended.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="menu-timeline-image">
                <img
                  alt="Chef slicing fresh pizza"
                  src="https://images.pexels.com/photos/5953531/pexels-photo-5953531.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="menu-timeline-item menu-timeline-right">
            <div className="menu-timeline-marker"></div>
            <div className="menu-timeline-content">
              <div className="menu-timeline-number">
                <span>04</span>
              </div>
              <h3 className="menu-timeline-title">Ingredient Integrity</h3>
              <p className="section-content">
                {' '}
                Each ingredient is chosen for its specific role in the
                pizza&apos;s flavor architecture. From authentic San Marzano
                tomatoes to premium avocado oil dough, nothing is arbitrary.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="menu-timeline-image">
                <img
                  alt="Handcrafted pizza dough preparation"
                  src="https://images.pexels.com/photos/5903441/pexels-photo-5903441.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="menu-timeline-left menu-timeline-item">
            <div className="menu-timeline-marker"></div>
            <div className="menu-timeline-content">
              <div className="menu-timeline-number">
                <span>05</span>
              </div>
              <h3 className="menu-timeline-title">The Microgreen Signature</h3>
              <p className="section-content">
                {' '}
                Each pizza features a meticulously paired microgreen garnish
                that cuts, balances, or elevates its specific flavor profile.
                These pairings are the result of culinary expertise, not
                guesswork.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="menu-timeline-image">
                <img
                  alt="Fresh microgreens garnish"
                  src="/ai-generated/ai-generated-1765594884501-1500w.png"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="menu-timeline-item menu-timeline-right">
            <div className="menu-timeline-marker"></div>
            <div className="menu-timeline-content">
              <div className="menu-timeline-number">
                <span>06</span>
              </div>
              <h3 className="menu-timeline-title">Trust the Chef</h3>
              <p className="section-content">
                {' '}
                Our menu represents a chef-driven philosophy: trust in
                expertise, precision, and the pursuit of perfection. Every pizza
                is a complete culinary statement that needs no modification.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="menu-timeline-image">
                <img
                  alt="Chef presenting gourmet pizza"
                  src="https://images.pexels.com/photos/6605176/pexels-photo-6605176.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="section-title">Signature Pizza Gallery</h2>
            <p className="section-subtitle">
              {' '}
              Experience the visual artistry of our chef-perfected pizzas and
              vibrant microgreen finishes.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                alt="Pepperoni Rustico with radish microgreens"
                src="/ai-generated/ai-generated-1765596494514-1500w.png"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Pepperoni Rustico</h3>
                <p className="gallery-description">
                  {' '}
                  Bold pepperoni balanced by sharp radish microgreens
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Verde Fresco white pizza with baby arugula"
                src="/ai-generated/ai-generated-1765596235275-1500w.png"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Verde Fresco</h3>
                <p className="gallery-description">
                  {' '}
                  White pizza finished with peppery baby arugula
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Pizza Tricolore with fresh basil"
                src="https://images.pexels.com/photos/6605176/pexels-photo-6605176.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Pizza Tricolore</h3>
                <p className="gallery-description">
                  {' '}
                  Classic Italian perfection with fresh basil leaves
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Tuscan Gardener with broccoli microgreens"
                src="/ai-generated/ai-generated-1765596622157-1500w.png"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Tuscan Gardener</h3>
                <p className="gallery-description">
                  {' '}
                  Roasted vegetables crowned with broccoli microgreens
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="delivery-sustainability-container5">
        <div className="delivery-sustainability-container6">
          <Script
            html={`<style>
        @keyframes slideDown {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="delivery-sustainability-container7">
        <div className="delivery-sustainability-container8">
          <Script
            html={`<script defer data-name="delivery-sustainability-interactions">
(function(){
  const heroSlides = document.querySelectorAll(".hero-slide")
  const heroDots = document.querySelectorAll(".hero-dot")
  const heroPrevBtn = document.querySelector(".hero-carousel-prev")
  const heroNextBtn = document.querySelector(".hero-carousel-next")
  let currentHeroSlide = 0
  let heroInterval

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle("hero-slide-active", i === index)
    })
    heroDots.forEach((dot, i) => {
      dot.classList.toggle("hero-dot-active", i === index)
    })
  }

  function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length
    showHeroSlide(currentHeroSlide)
  }

  function prevHeroSlide() {
    currentHeroSlide =
      (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length
    showHeroSlide(currentHeroSlide)
  }

  function startHeroAutoplay() {
    heroInterval = setInterval(nextHeroSlide, 6000)
  }

  function stopHeroAutoplay() {
    clearInterval(heroInterval)
  }

  heroNextBtn.addEventListener("click", () => {
    nextHeroSlide()
    stopHeroAutoplay()
    startHeroAutoplay()
  })

  heroPrevBtn.addEventListener("click", () => {
    prevHeroSlide()
    stopHeroAutoplay()
    startHeroAutoplay()
  })

  heroDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentHeroSlide = index
      showHeroSlide(currentHeroSlide)
      stopHeroAutoplay()
      startHeroAutoplay()
    })
  })

  startHeroAutoplay()

  const sustainabilityTrack = document.querySelector(
    ".sustainability-carousel-track"
  )
  const sustainabilityPrevBtn = document.querySelector(
    ".sustainability-carousel-prev"
  )
  const sustainabilityNextBtn = document.querySelector(
    ".sustainability-carousel-next"
  )
  const sustainabilityDots = document.querySelectorAll(".sustainability-dot")
  const sustainabilityItems = document.querySelectorAll(
    ".sustainability-carousel-item"
  )
  let currentSustainabilityIndex = 0

  function scrollSustainabilityTo(index) {
    const itemWidth = sustainabilityItems[0].offsetWidth
    const gap = parseInt(getComputedStyle(sustainabilityTrack).gap)
    const scrollPosition = index * (itemWidth + gap)
    sustainabilityTrack.scrollTo({ left: scrollPosition, behavior: "smooth" })
    currentSustainabilityIndex = index

    sustainabilityDots.forEach((dot, i) => {
      dot.classList.toggle("sustainability-dot-active", i === index)
    })
  }

  sustainabilityNextBtn.addEventListener("click", () => {
    const maxIndex = sustainabilityItems.length - 1
    const nextIndex = Math.min(currentSustainabilityIndex + 1, maxIndex)
    scrollSustainabilityTo(nextIndex)
  })

  sustainabilityPrevBtn.addEventListener("click", () => {
    const prevIndex = Math.max(currentSustainabilityIndex - 1, 0)
    scrollSustainabilityTo(prevIndex)
  })

  sustainabilityDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollSustainabilityTo(index)
    })
  })

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const microgreensCards = document.querySelectorAll(".microgreens-card")
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animation = "slideUp 0.5s ease-out forwards"
        }, index * 100)
        cardObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  microgreensCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    cardObserver.observe(card)
  })

  const timelineItems = document.querySelectorAll(".menu-timeline-item")
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideUp 0.6s ease-out forwards"
        timelineObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  timelineItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(40px)"
    timelineObserver.observe(item)
  })

  const accordionItems = document.querySelectorAll(".delivery-accordion-item")
  accordionItems.forEach((item) => {
    item.addEventListener("toggle", (e) => {
      if (e.target.open) {
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false
          }
        })
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DeliverySustainability
