import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './culinary-philosophy-ingredients.css'

const CulinaryPhilosophyIngredients = (props) => {
  return (
    <div className="culinary-philosophy-ingredients-container10">
      <Helmet>
        <title>
          Culinary-Philosophy-Ingredients - Da Elmo Gourmet Pizzeria
        </title>
        <meta
          property="og:title"
          content="Culinary-Philosophy-Ingredients - Da Elmo Gourmet Pizzeria"
        />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/culinary-philosophy-ingredients"
        />
      </Helmet>
      <Navigation></Navigation>
      <a rel="stylesheet" href="./style.css"></a>
      <div>
        <a rel="stylesheet" href="./culinary-philosophy-ingredients.css"></a>
        <div className="culinary-philosophy-ingredients-container1">
          <section className="philosophy-hero">
            <video
              src="https://videos.pexels.com/video-files/5898377/5898377-hd_2048_1080_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playback="true"
              className="philosophy-hero__video"
            ></video>
            <div className="philosophy-hero__overlay"></div>
            <div className="philosophy-hero__content">
              <h1 className="philosophy-hero__title hero-title">
                {' '}
                Uncompromising Quality From Kitchen To Door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <p className="philosophy-hero__subtitle hero-subtitle">
                {' '}
                Handcrafted avocado oil dough, authentic San Marzano tomatoes,
                and pesticide-free microgreens define every pizza we create
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="philosophy-hero__values">
                <div className="philosophy-hero__value-item">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
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
                  <span>Premium Avocado Oil</span>
                </div>
                <div className="philosophy-hero__value-item">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
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
                  <span>San Marzano Certified</span>
                </div>
                <div className="philosophy-hero__value-item">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
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
                  <span>GMO &amp; Pesticide Free</span>
                </div>
              </div>
            </div>
          </section>
          <section className="philosophy-dough">
            <div className="philosophy-dough__container">
              <div className="philosophy-dough__content">
                <h2 className="philosophy-dough__title section-title">
                  {' '}
                  The Art Of Handcrafted Dough
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="philosophy-dough__description section-content">
                  {' '}
                  Our signature crust begins with premium 100% avocado oil. It’s
                  a heart-healthy choice that handles the heat of our ovens
                  perfectly without turning into something bad for you. No
                  chemicals, just healthy fats. Every batch is mixed at precise
                  hydration levels and cold-fermented for optimal texture and
                  depth of flavour.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="philosophy-dough__features">
                  <div className="philosophy-dough__feature">
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="philosophy-dough__feature-text">
                      <h3 className="philosophy-dough__feature-title">
                        {' '}
                        Premium Avocado Oil
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h3>
                      <p className="philosophy-dough__feature-desc">
                        {' '}
                        Rich in monounsaturated fats, our avocado oil creates an
                        exceptionally tender crumb with a subtle, buttery flavor
                        profile impossible to achieve with conventional oils.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="philosophy-dough__feature">
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 22L16 8M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4"></path>
                        <path d="M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0"></path>
                      </g>
                    </svg>
                    <div className="philosophy-dough__feature-text">
                      <h3 className="philosophy-dough__feature-title">
                        {' '}
                        High-Protein Flour
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h3>
                      <p className="philosophy-dough__feature-desc">
                        {' '}
                        Sourced from specialty mills, our flour delivers the
                        perfect gluten structure for a chewy interior and crisp,
                        golden exterior that holds every topping with grace.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="philosophy-dough__feature">
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 0 24 24"
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
                    <div className="philosophy-dough__feature-text">
                      <h3 className="philosophy-dough__feature-title">
                        {' '}
                        Cold Fermentation Process
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h3>
                      <p className="philosophy-dough__feature-desc">
                        {' '}
                        A slow, 48-hour cold fermentation develops complex
                        flavors, enhances digestibility, and creates those
                        signature air pockets in the perfect artisan crust.
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
              <div className="philosophy-dough__image">
                <img
                  alt="Artisan hands shaping fresh pizza dough with precision"
                  src="https://images.pexels.com/photos/5903441/pexels-photo-5903441.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
            </div>
          </section>
          <section className="philosophy-microgreens">
            <div className="philosophy-microgreens__container">
              <div className="philosophy-microgreens__header">
                <h2 className="philosophy-microgreens__title section-title">
                  {' '}
                  The Microgreen Difference
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="philosophy-microgreens__intro section-content">
                  {' '}
                  Our microgreens aren&apos;t just for decoration. These are
                  superfoods! Whether it’s baby broccoli or radish, these tiny
                  plants can have up to 40 times more vitamins than the
                  full-grown vegetables. It’s the healthiest crunch you’ll ever
                  have on a pizza.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="philosophy-microgreens__grid culinary-philosophy-ingredients-thq-philosophy-microgreensgrid-elm">
                <div className="philosophy-microgreens__card">
                  <div className="philosophy-microgreens__card-icon">
                    <svg
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      viewBox="0 0 24 24"
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
                  <h3 className="philosophy-microgreens__card-title">
                    {' '}
                    Radish Microgreens
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="philosophy-microgreens__card-desc">
                    {' '}
                    Sharp, peppery bite with a hint of horseradish heat. Cuts
                    through rich meats and cheese.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p className="philosophy-microgreens__card-pairing">
                    {' '}
                    Perfect for: Pepperoni Rustico, Funghi e Cipolla
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="philosophy-microgreens__card">
                  <div className="philosophy-microgreens__card-icon">
                    <svg
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="philosophy-microgreens__card-title">
                    Baby Arugula
                  </h3>
                  <p className="philosophy-microgreens__card-desc">
                    {' '}
                    Tender, peppery leaves with a subtle nuttiness. Adds
                    freshness without overpowering delicate flavors.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p className="philosophy-microgreens__card-pairing">
                    {' '}
                    Perfect for: Verde Fresco, Mediterranean Coast
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="philosophy-microgreens__card">
                  <div className="philosophy-microgreens__card-icon">
                    <svg
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="philosophy-microgreens__card-title">
                    {' '}
                    Broccoli Microgreens
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="philosophy-microgreens__card-desc">
                    {' '}
                    Classic, slightly peppery flavor with earthy undertones.
                    Harmonizes beautifully with roasted vegetables.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p className="philosophy-microgreens__card-pairing">
                    {' '}
                    Perfect for: Tuscan Gardener
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="philosophy-microgreens__card">
                  <div className="philosophy-microgreens__card-icon">
                    <svg
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="philosophy-microgreens__card-title">
                    {' '}
                    Fresh Basil Leaves
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="philosophy-microgreens__card-desc">
                    {' '}
                    Aromatic, sweet herbaceous flavor with anise undertones. The
                    classic Italian garnish for Margherita-style pizzas.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p className="philosophy-microgreens__card-pairing">
                    {' '}
                    Perfect for: Pizza Tricolore, Funghi e Cipolla
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="philosophy-procurement">
            <div className="philosophy-procurement__container">
              <div className="philosophy-procurement__header">
                <h2 className="section-title philosophy-procurement__title">
                  {' '}
                  Our Commitment To Sustainability &amp; Excellence
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
              </div>
              <div className="philosophy-procurement__columns">
                <div className="philosophy-procurement__column">
                  <div className="philosophy-procurement__icon">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
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
                  <h3 className="philosophy-procurement__column-title">
                    {' '}
                    Compostable Packaging
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="philosophy-procurement__column-desc">
                    {' '}
                    From our microgreen cups to our pizza boxes, every piece of
                    packaging is designed to break down naturally. We eliminate
                    single-use plastics wherever possible.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <ul className="philosophy-procurement__list">
                    <li className="philosophy-procurement__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
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
                      <span>100% compostable containers</span>
                    </li>
                    <li className="philosophy-procurement__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
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
                      <span>Recycled cardboard boxes</span>
                    </li>
                    <li className="philosophy-procurement__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
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
                      <span>Plant-based inks &amp; adhesives</span>
                    </li>
                  </ul>
                </div>
                <div className="philosophy-procurement__column">
                  <div className="philosophy-procurement__icon">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
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
                  <h3 className="philosophy-procurement__column-title">
                    {' '}
                    Delivery-First Quality
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="philosophy-procurement__column-desc">
                    {' '}
                    We manage the entire process through Uber Eats and DoorDash
                    to ensure consistent temperatures, proper handling, and
                    timely arrival. Our packaging preserves freshness from oven
                    to table.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <ul className="philosophy-procurement__list">
                    <li className="philosophy-procurement__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
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
                      <span>Insulated delivery systems</span>
                    </li>
                    <li className="philosophy-procurement__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
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
                      <span>Tracked order management</span>
                    </li>
                    <li className="philosophy-procurement__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
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
                      <span>Guaranteed freshness protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="philosophy-gallery">
            <div className="philosophy-gallery__grid">
              <div className="philosophy-gallery__item">
                <img
                  alt="Fresh pizza dough being prepared with flour"
                  src="https://images.pexels.com/photos/6287264/pexels-photo-6287264.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="philosophy-gallery__overlay">
                  <span className="philosophy-gallery__label">
                    Handcrafted Dough
                  </span>
                </div>
              </div>
              <div className="philosophy-gallery__item">
                <img
                  alt="San Marzano tomatoes for authentic Italian sauce"
                  src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="philosophy-gallery__overlay">
                  <span className="philosophy-gallery__label">
                    San Marzano Sauce
                  </span>
                </div>
              </div>
              <div className="philosophy-gallery__item">
                <img
                  alt="Fresh microgreens and herbs arranged beautifully"
                  src="https://images.pexels.com/photos/4397249/pexels-photo-4397249.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="philosophy-gallery__overlay">
                  <span className="philosophy-gallery__label">
                    Fresh Microgreens
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="philosophy-video">
            <video
              src="https://videos.pexels.com/video-files/6603829/6603829-hd_720_1280_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playback="true"
              className="philosophy-video__background"
            ></video>
            <div className="philosophy-video__overlay"></div>
            <div className="philosophy-video__content">
              <h2 className="section-title philosophy-video__title">
                {' '}
                Witness Our Craftsmanship
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="philosophy-video__description section-content">
                {' '}
                From dough preparation to microgreen packing, every step is
                executed with precision, care, and dedication to quality that
                you can taste in every bite.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </section>
          <section className="philosophy-cta">
            <div className="philosophy-cta__wrapper">
              <div className="philosophy-cta__content">
                <h2 className="section-title philosophy-cta__title">
                  {' '}
                  Experience Uncompromising Quality
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="philosophy-cta__description section-content">
                  {' '}
                  Order now through Uber Eats or DoorDash and taste the
                  difference that premium ingredients, artisan techniques, and
                  fresh microgreen finishes make. Every pizza arrives with our
                  freshness guarantee.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="philosophy-cta__buttons">
                  <a href="#">
                    <div>
                      <div className="btn-primary philosophy-cta__button btn btn-lg">
                        <span>Order on Uber Eats</span>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <div className="philosophy-cta__button btn-secondary btn btn-lg">
                        <span>Order on DoorDash</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="philosophy-cta__image">
                <img
                  alt="Fresh pizza with arugula microgreens being garnished"
                  src="https://images.pexels.com/photos/5907903/pexels-photo-5907903.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
            </div>
          </section>
          <div className="culinary-philosophy-ingredients-container2">
            <div className="culinary-philosophy-ingredients-container3">
              <div className="culinary-philosophy-ingredients-container14">
                <div className="culinary-philosophy-ingredients-container15">
                  <Script
                    html={`<script defer data-name="philosophy-animations">
(function(){
          document.addEventListener('DOMContentLoaded', function() {
                (function(){
                  const observerOptions = {
                    threshold: 0.15,
                    rootMargin: "0px",
                  }

                  const fadeInObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        entry.target.style.opacity = "1"
                        entry.target.style.transform = "translateY(0)"
                      }
                    })
                  }, observerOptions)

                  const animatedElements = document.querySelectorAll(".philosophy-dough__feature, .philosophy-sourcing__item, .philosophy-microgreens__card, .philosophy-procurement__column")

                  animatedElements.forEach((el) => {
                    el.style.opacity = "0"
                    el.style.transform = "translateY(20px)"
                    el.style.transition = "opacity 0.5s ease, transform 0.5s ease"
                    fadeInObserver.observe(el)
                  })

                  const staggerDelay = 100
                  document.querySelectorAll(".philosophy-microgreens__card").forEach((card, index) => {
                    card.style.transitionDelay = \`\${index * staggerDelay}ms\`
                  })

                  document.querySelectorAll(".philosophy-procurement__column").forEach((col, index) => {
                    col.style.transitionDelay = \`\${index * staggerDelay}ms\`
                  })
                })()
              });
        })()
</script>`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
          <div className="culinary-philosophy-ingredients-thq-footer-wrapper-elm footer-wrapper">
            <div className="footer-container">
              <footer className="footer">
                <div className="footer-decorative-overlay"></div>
                <div className="footer-content-wrapper">
                  <div className="footer-brand-section">
                    <div className="footer-logo-container footer-thq-footer-logo-container-elm">
                      <img
                        alt="image"
                        src="public/elmo-pizzeria-transparent-200w.png"
                        className="footer-image"
                      />
                      <p className="footer-tagline section-content">
                        {' '}
                        Gourmet Pizza, Delivered.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="footer-nav-section">
                    <nav aria-label="Footer navigation" className="footer-nav">
                      <a href="index.html">
                        <div>
                          <div className="footer-thq-footer-nav-link-elm1 footer-nav-link">
                            <span>Homepage</span>
                          </div>
                        </div>
                      </a>
                      <a href="gourmet-pizza-menu.html">
                        <div>
                          <div className="footer-thq-footer-nav-link-elm2 footer-nav-link">
                            <span>Gourmet Pizza Menu</span>
                          </div>
                        </div>
                      </a>
                      <a href="about-us.html">
                        <div>
                          <div className="footer-thq-footer-nav-link-elm3 footer-nav-link">
                            <span>About Us</span>
                          </div>
                        </div>
                      </a>
                      <a href="delivery-sustainability.html">
                        <div>
                          <div className="footer-thq-footer-nav-link-elm4 footer-nav-link">
                            <span>Delivery &amp; Sustainability</span>
                          </div>
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
                          {' '}
                          3954 Boulevard Leman, Laval
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
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
                              <rect
                                x="2"
                                y="4"
                                rx="2"
                                width="20"
                                height="16"
                              ></rect>
                            </g>
                          </svg>
                        </div>
                        <a href="mailto:hello@daelmogourmetpizzeria.ca?subject=?subject=">
                          <div>
                            <div className="footer-contact-link section-content">
                              <span>hello@daelmogourmetpizzeria.ca</span>
                            </div>
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
                      >
                        <div
                          rel="noreferrer noopener"
                          target="_blank"
                          className="footer-thq-footer-delivery-badge-elm1 footer-delivery-badge"
                        >
                          <span>
                            {' '}
                            Uber Eats
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                      <a
                        href="https://www.doordash.com/?msockid=1298bc78b6d86c021899a903b7b56de6"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div
                          rel="noreferrer noopener"
                          target="_blank"
                          className="footer-thq-footer-delivery-badge-elm2 footer-delivery-badge"
                        >
                          <span>
                            {' '}
                            DoorDash
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
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
                        <div rel="noreferrer noopener" target="_blank">
                          <div
                            aria-label="Follow us on Instagram"
                            className="footer-social-link footer-thq-footer-social-link-elm"
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
                      <a href="privacy.html">
                        <div>
                          <div className="footer-thq-footer-legal-link-elm1 footer-legal-link">
                            <span>Privacy Policy</span>
                          </div>
                        </div>
                      </a>
                      <span className="footer-legal-separator">|</span>
                      <a href="terms.html">
                        <div>
                          <div className="footer-legal-link footer-thq-footer-legal-link-elm2">
                            <span>Terms of Service</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <a
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/culinary-philosophy-ingredients"
        ></a>
      </div>
      <div className="culinary-philosophy-ingredients-container24">
        <div className="culinary-philosophy-ingredients-container25">
          <Script
            html={`<script defer src="https://unpkg.com/@teleporthq/teleport-custom-scripts">

</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default CulinaryPhilosophyIngredients
