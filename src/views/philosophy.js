import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './philosophy.css'

const Philosophy = (props) => {
  return (
    <div className="philosophy-container1">
      <Helmet>
        <title>Philosophy - Da Elmo Gourmet Pizzeria</title>
        <meta
          property="og:title"
          content="Philosophy - Da Elmo Gourmet Pizzeria"
        />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/philosophy"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-quality">
        <div className="hero-quality__media-container">
          <img
            src="https://images.pexels.com/photos/5903439/pexels-photo-5903439.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="Hand pouring olive oil onto a freshly prepared pizza with tomato sauce"
            className="hero-quality__image"
          />
          <div className="hero-quality__overlay"></div>
        </div>
        <div className="hero-quality__content-wrapper">
          <div className="hero-quality__content">
            <div className="hero-quality__badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
              <span>Uncompromising Quality</span>
            </div>
            <h1 className="hero-quality__title hero-title">
              Our Culinary Philosophy: Purity in Every Ingredient
            </h1>
            <p className="hero-quality__subtitle hero-subtitle">
              From San Marzano tomatoes to the pristine essence of avocado oil
              dough, every element of our craft is chosen with intention. Our
              signature GMO-free, pesticide-free microgreens complete each pizza
              with a finishing touch that transforms flavor into art.
            </p>
            <div className="hero-quality__pillars">
              <div className="hero-quality__pillar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7"
                  ></path>
                </svg>
                <span>Avocado Oil Dough</span>
              </div>
              <div className="hero-quality__pillar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
                <span>San Marzano Tomatoes</span>
              </div>
              <div className="hero-quality__pillar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"
                  ></path>
                </svg>
                <span>Microgreen Finishing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="foundation-quality">
        <div className="foundation-quality__container">
          <div className="foundation-quality__split">
            <div className="foundation-quality__column foundation-quality__column--media">
              <img
                src="https://images.pexels.com/photos/10332298/pexels-photo-10332298.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Close-up of fresh and vibrant red San Marzano tomatoes"
                className="foundation-quality__image"
              />
              <div className="foundation-quality__detail-badge">
                <span className="foundation-quality__detail-label">Origin</span>
                <span className="foundation-quality__detail-value">
                  San Marzano DOP
                </span>
              </div>
            </div>
            <div className="foundation-quality__column foundation-quality__column--content">
              <div className="foundation-quality__header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
                <h2 className="foundation-quality__heading section-title">
                  San Marzano Tomatoes: The Heart of Authenticity
                </h2>
              </div>
              <div className="foundation-quality__text section-content">
                <p>
                  Our sauce begins with certified San Marzano tomatoes. These
                  legendary tomatoes possess a naturally lower acidity, thicker
                  flesh, and fewer seeds, delivering a rich, balanced sweetness
                  that defines true Italian pizza.
                </p>
                <p>
                  We slow-simmer our tomatoes with a minimal blend of sea salt,
                  extra virgin olive oil, and fresh basil, allowing the pure
                  fruit flavor to shine. No added sugars, no preservatives—just
                  the essence of the world&apos;s finest tomatoes, brought to
                  your table.
                </p>
              </div>
              <div className="foundation-quality__features">
                <div className="foundation-quality__feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span>DOP Certified</span>
                </div>
                <div className="foundation-quality__feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span>No Preservatives</span>
                </div>
              </div>
            </div>
          </div>
          <div className="foundation-quality__split foundation-quality__split--reverse">
            <div className="foundation-quality__column foundation-quality__column--media">
              <img
                src="https://images.pexels.com/photos/9685252/pexels-photo-9685252.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Hands crafting pizza dough with flour on a marble countertop"
                className="foundation-quality__image"
              />
              <div className="foundation-quality__detail-badge">
                <span className="foundation-quality__detail-label">
                  Key Ingredient
                </span>
                <span className="foundation-quality__detail-value">
                  Premium Avocado Oil
                </span>
              </div>
            </div>
            <div className="foundation-quality__column foundation-quality__column--content">
              <div className="foundation-quality__header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7"
                  ></path>
                </svg>
                <h2 className="foundation-quality__heading section-title">
                  Avocado Oil Dough: The Foundation of Flavor
                </h2>
              </div>
              <div className="foundation-quality__text section-content">
                <p>
                  Our signature dough is handcrafted daily using premium avocado
                  oil—a deliberate choice that elevates both nutrition and
                  taste. Unlike traditional olive oil or butter-based doughs,
                  avocado oil provides a subtle, buttery richness with a higher
                  smoke point, creating a perfectly crisp exterior while
                  maintaining a tender, airy crumb.
                </p>
                <p>
                  We blend our avocado oil with high-protein flour, sea salt,
                  and a carefully balanced fermentation process that develops
                  complex flavours over 48 hours. The result is a crust
                  that&apos;s both indulgent and light, with a delicate golden
                  finish that holds up beautifully during delivery.
                </p>
              </div>
              <div className="foundation-quality__features">
                <div className="foundation-quality__feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span>48-Hour Fermentation</span>
                </div>
                <div className="foundation-quality__feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span>High-Protein Flour</span>
                </div>
                <div className="foundation-quality__feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span>Handcrafted Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="microgreens-quality">
        <div className="microgreens-quality__container">
          <div className="microgreens-quality__header-wrapper">
            <h2 className="microgreens-quality__title section-title">
              The Microgreen Finishing Touch: Purity, Freshness, Perfection
            </h2>
            <p className="microgreens-quality__subtitle section-subtitle">
              Our signature garnish transforms each pizza into a complete
              culinary experience
            </p>
          </div>
          <div className="microgreens-quality__grid">
            <div className="microgreens-quality__card">
              <div className="microgreens-quality__card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="microgreens-quality__card-title">
                GMO-Free &amp; Pesticide-Free
              </h3>
              <p className="microgreens-quality__card-text section-content">
                Every microgreen we use is sourced from certified organic
                growers who guarantee zero GMOs and zero pesticide use. We audit
                our suppliers regularly to ensure complete transparency and
                unwavering purity standards.
              </p>
            </div>
            <div className="microgreens-quality__card">
              <div className="microgreens-quality__card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"
                  ></path>
                </svg>
              </div>
              <h3 className="microgreens-quality__card-title">
                Curated Varieties for Each Pizza
              </h3>
              <p className="microgreens-quality__card-text section-content">
                Radish microgreens cut through rich pepperoni, broccoli
                microgreens harmonize with roasted vegetables, baby arugula
                brightens our white pizza, and micro cilantro refreshes salty
                Mediterranean flavors. Each pairing is intentional and
                perfected.
              </p>
            </div>
            <div className="microgreens-quality__card">
              <div className="microgreens-quality__card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12m-4.533-4.786L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843m-4.096 7.902l4.096 1.098l1.097-4.096M14 16l-3 3l3 3"
                  ></path>
                </svg>
              </div>
              <h3 className="microgreens-quality__card-title">
                Compostable Portion Cups
              </h3>
              <p className="microgreens-quality__card-text section-content">
                To guarantee your microgreens arrive as fresh and vibrant as the
                moment they were harvested, we package them in clear, 3 oz
                compostable portion cups. This ensures they remain crisp, dry,
                and never wilted or crushed during transport.
              </p>
            </div>
            <div className="microgreens-quality__card">
              <div className="microgreens-quality__card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
              </div>
              <h3 className="microgreens-quality__card-title">
                The Final Scatter: Your Role
              </h3>
              <p className="microgreens-quality__card-text section-content">
                We deliver your microgreens separately so you control the moment
                of finishing. Simply scatter them over your hot pizza just
                before serving for maximum aromatic impact, visual beauty, and
                that signature Microcrust crunch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sustainability-quality">
        <div className="sustainability-quality__container">
          <div className="sustainability-quality__header-wrapper">
            <h2 className="sustainability-quality__title section-title">
              Sustainable Sourcing &amp; Delivery Excellence
            </h2>
            <p className="sustainability-quality__subtitle section-subtitle">
              Our commitment extends beyond flavor to environmental
              responsibility
            </p>
          </div>
          <div className="sustainability-quality__columns">
            <div className="sustainability-quality__column">
              <div className="sustainability-quality__icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="sustainability-quality__column-title">
                Delivery-Only Model
              </h3>
              <p className="sustainability-quality__column-text section-content">
                Our entire operation is designed for delivery excellence via
                Uber Eats and DoorDash. We manage timing, packaging, and quality
                control to ensure every pizza arrives at your door as if it just
                left our oven—hot, fresh, and perfectly presented with your
                microgreens ready to finish.
              </p>
              <div className="sustainability-quality__tags">
                <span className="sustainability-quality__tag">
                  Temperature Controlled
                </span>
                <span className="sustainability-quality__tag">
                  Optimized Packaging
                </span>
              </div>
            </div>
            <div className="sustainability-quality__column">
              <div className="sustainability-quality__icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                  ></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="sustainability-quality__column-title">
                Compostable Packaging
              </h3>
              <p className="sustainability-quality__column-text section-content">
                From our microgreen cups to our pizza boxes, every piece of
                packaging is designed to break down naturally. We eliminate
                single-use plastics wherever possible.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="sustainability-quality__tags">
                <span className="sustainability-quality__tag">
                  FSC Certified
                </span>
                <span className="sustainability-quality__tag">
                  Zero Plastic
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-quality">
        <div className="philosophy-thq-gallery-qualitygrid-elm gallery-quality__grid">
          <div className="gallery-quality__item">
            <img
              src="https://images.pexels.com/photos/10332298/pexels-photo-10332298.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Close-up of fresh and vibrant red San Marzano tomatoes"
              className="gallery-quality__image"
            />
            <div className="gallery-quality__caption">
              <span className="gallery-quality__label">
                San Marzano Tomatoes
              </span>
            </div>
          </div>
          <div className="gallery-quality__item">
            <img
              src="https://images.pexels.com/photos/28945107/pexels-photo-28945107.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Hands adding basil on pizza dough with tomato sauce"
              className="gallery-quality__image"
            />
            <div className="gallery-quality__caption">
              <span className="gallery-quality__label">
                Handcrafted Avocado Oil Dough
              </span>
            </div>
          </div>
          <div className="gallery-quality__item">
            <img
              src="https://images.pexels.com/photos/2694050/pexels-photo-2694050.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Four bowls of fresh microgreens showcasing healthy eating"
              className="gallery-quality__image"
            />
            <div className="gallery-quality__caption">
              <span className="gallery-quality__label">
                Microgreen Varieties
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-quality">
        <div className="cta-quality__split">
          <div className="cta-quality__column cta-quality__column--content">
            <div className="cta-quality__content">
              <h2 className="cta-quality__title section-title">
                Experience Uncompromising Quality Delivered to Your Door
              </h2>
              <p className="cta-quality__text section-content">
                Every pizza arrives with our freshness guarantee: hot crust,
                vibrant sauce, perfectly melted cheese, and crisp microgreens
                packaged separately in compostable cups. Order now via Uber Eats
                or DoorDash and taste the difference that ingredient purity
                makes.
              </p>
              <div className="cta-quality__buttons">
                <button className="cta-quality__button btn btn-accent btn-lg">
                  Order on Uber Eats
                </button>
                <button className="cta-quality__button btn btn-lg btn-secondary">
                  Order on DoorDash
                </button>
              </div>
              <div className="cta-quality__guarantee">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
                <span>
                  Microgreens Packaged Separately. Compostable Materials.
                </span>
              </div>
            </div>
          </div>
          <div className="cta-quality__column cta-quality__column--media">
            <img
              src="https://images.pexels.com/photos/29327348/pexels-photo-29327348.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Close-up of artisan pizza with melted cheese and fresh vegetables"
              className="cta-quality__image"
            />
            <div className="cta-quality__badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"
                ></path>
              </svg>
              <span>Signature Microgreen Finish</span>
            </div>
          </div>
        </div>
      </section>
      <div className="philosophy-container2">
        <div className="philosophy-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.microgreens-quality__card, .testimonials-quality__card, .gallery-quality__image {
  transition: none;
}
.microgreens-quality__card:hover, .testimonials-quality__card:hover {
  transform: none;
}
.gallery-quality__item:hover .gallery-quality__image {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="philosophy-container4">
        <div className="philosophy-container5">
          <Script
            html={`<script defer data-name="quality-page-interactions">

</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Philosophy
