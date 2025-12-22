import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container1">
      <Helmet>
        <title>About-Us - Da Elmo Gourmet Pizzeria</title>
        <meta
          property="og:title"
          content="About-Us - Da Elmo Gourmet Pizzeria"
        />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/about-us"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <video
          src="https://videos.pexels.com/video-files/6091108/6091108-hd_1080_2048_30fps.mp4"
          loop="true"
          muted="true"
          autoPlay="true"
          playsInline="true"
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Gourmet Pizza, Delivered.</h1>
          <p className="about-us-hero-subtitle hero-subtitle">
            {' '}
            Chef-Perfected, Microgreen-Finished. Uncompromising Quality from
            Kitchen to Door.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="hero-cta-group">
            <a
              href="https://www.ubereats.com/ca?msockid=1298bc78b6d86c021899a903b7b56de6"
              target="_blank"
              rel="noreferrer noopener"
              className="about-us-thq-btn-elm1 btn-primary btn btn-lg"
            >
              Order on Uber Eats
            </a>
            <a
              href="https://www.doordash.com/?msockid=1298bc78b6d86c021899a903b7b56de6"
              target="_blank"
              rel="noreferrer noopener"
              className="about-us-thq-btn-elm2 btn btn-outline btn-lg"
            >
              Order on DoorDash
            </a>
          </div>
        </div>
      </section>
      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-content">
            <h2 className="section-title">Our Story</h2>
            <p className="section-content">
              <span>
                {' '}
                Da Elmo Gourmet Pizzeria was born from a singular vision: to
                deliver a true 
              </span>
              <span>
                gourmet pizza experience without compromise. We are a
                delivery-first, 
              </span>
              <span>
                artisan kitchen dedicated to perfecting every element of our
                craft.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              Microcrust Pizza was born from a singular vision: to deliver a
              true gourmet pizza experience without compromise. We are a
              delivery-first, artisan kitchen dedicated to perfecting every
              element of our craft.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="section-content">
              <span>
                {' '}
                We eliminate the complexity of customization, instead focusing
                our
              </span>
              <br></br>
              <span>
                {' '}
                expertise on seven distinct, chef-driven pizzas. Each recipe is
              </span>
              <br></br>
              <span>
                {' '}
                meticulously developed, balancing premium ingredients with our
                signature 
              </span>
              <span>
                microgreen finishes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              We eliminate the complexity of customization, instead focusing our
              expertise on six distinct, chef-driven pizzas. Each recipe is
              meticulously developed, balancing premium ingredients with our
              signature microgreen finishes.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="section-content">
              {' '}
              From the first bite of our avocado oil dough to the vibrant crunch
              of pesticide-free microgreens, we guarantee an experience that
              elevates delivery pizza to haute cuisine.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="about-story-highlights">
              <div className="about-story-highlight-item">
                <div className="about-story-highlight-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="about-story-highlight-text">
                  Chef-Crafted Recipes
                </span>
              </div>
              <div className="about-story-highlight-item">
                <div className="about-story-highlight-icon">
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
                <span className="about-story-highlight-text">
                  Microgreen Finished
                </span>
              </div>
              <div className="about-story-highlight-item">
                <div className="about-story-highlight-icon">
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
                <span className="about-story-highlight-text">
                  Quality Guaranteed
                </span>
              </div>
            </div>
          </div>
          <div className="about-story-image">
            <img
              alt="A cheerful chef presents delicious pizzas in a cozy pizzeria setting, showcasing culinary skills."
              src="https://images.pexels.com/photos/5903447/pexels-photo-5903447.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
          </div>
        </div>
      </section>
      <section className="services-delivery-section">
        <div className="services-delivery-container">
          <h2 className="section-title">Seamless Delivery Experience</h2>
          <p className="section-subtitle">
            {' '}
            We own every step of the journey from our kitchen to your door,
            ensuring your gourmet experience arrives perfectly.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="services-delivery-grid">
            <div className="services-delivery-card">
              <div className="services-delivery-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="services-delivery-card-title">Kitchen Mastery</h3>
              <p className="services-delivery-card-text">
                {' '}
                Every pizza is handcrafted by trained chefs in our artisan
                kitchen, using premium avocado oil dough and San Marzano
                tomatoes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="services-delivery-card">
              <div className="services-delivery-icon">
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
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
                  </g>
                </svg>
              </div>
              <h3 className="services-delivery-card-title">Smart Packaging</h3>
              <p className="services-delivery-card-text">
                {' '}
                Microgreens arrive in compostable portion cups, ensuring they
                stay crisp and vibrant for your final scatter.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="services-delivery-card">
              <div className="services-delivery-icon">
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
                    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                    <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="services-delivery-card-title">
                Uber Eats Partnership
              </h3>
              <p className="services-delivery-card-text">
                {' '}
                Fast, reliable delivery through Uber Eats connects our artisan
                kitchen directly to your location with real-time tracking.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="services-delivery-card">
              <div className="services-delivery-icon">
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
                    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                    <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="services-delivery-card-title">
                DoorDash Integration
              </h3>
              <p className="services-delivery-card-text">
                {' '}
                Access our complete menu through DoorDash for convenient
                delivery with seamless ordering and accurate arrival times.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="services-delivery-card">
              <div className="services-delivery-icon">
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
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="services-delivery-card-title">Optimal Timing</h3>
              <p className="services-delivery-card-text">
                {' '}
                We coordinate baking schedules with delivery windows to ensure
                your pizza arrives at peak freshness and temperature.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="services-delivery-card">
              <div className="services-delivery-icon">
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
              <h3 className="services-delivery-card-title">Quality Control</h3>
              <p className="services-delivery-card-text">
                {' '}
                Each order is inspected before departure, guaranteeing that our
                uncompromising standards reach your door.
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
      <section className="about-philosophy-section">
        <div className="about-philosophy-wrapper">
          <div className="about-philosophy-header">
            <h2 className="section-title">Our Culinary Philosophy</h2>
            <p className="section-subtitle">
              {' '}
              Every ingredient tells a story of purity, flavor, and integrity.
              Discover the foundations that make our pizzas extraordinary.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="about-philosophy-timeline">
            <div className="about-philosophy-timeline-item">
              <div className="about-philosophy-timeline-marker">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              </div>
              <div className="about-philosophy-timeline-content">
                <h3 className="about-philosophy-timeline-title">
                  Avocado Oil Dough
                </h3>
                <p className="about-philosophy-timeline-text">
                  {' '}
                  Our signature dough is handcrafted using premium avocado oil
                  and high-quality flour, creating a foundation that is both
                  flavorful and light. The avocado oil adds a subtle richness
                  and helps achieve the perfect crispy-yet-tender texture.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="about-philosophy-timeline-item">
              <div className="about-philosophy-timeline-marker">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              </div>
              <div className="about-philosophy-timeline-content">
                <h3 className="about-philosophy-timeline-title">
                  {' '}
                  San Marzano Tomato Base
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="about-philosophy-timeline-text">
                  {' '}
                  We start with authentic San Marzano tomatoes, renowned for
                  their sweet flavor and low acidity. Each sauce is seasoned to
                  perfection, providing a rich, vibrant base that honors true
                  Italian tradition.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="about-philosophy-timeline-item">
              <div className="about-philosophy-timeline-marker">
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
              <div className="about-philosophy-timeline-content">
                <h3 className="about-philosophy-timeline-title">
                  Microgreen Mastery
                </h3>
                <p className="about-philosophy-timeline-text">
                  {' '}
                  Our hallmark is the final microgreen finish. GMO-free and
                  pesticide-free, these hyper-fresh greens intentionally balance
                  each pizza. From peppery radish microgreens to bright micro
                  cilantro, each variety is chosen to elevate and complete the
                  flavor profile.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="about-philosophy-timeline-item">
              <div className="about-philosophy-timeline-marker">
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
                    <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle r="6" cx="12" cy="8"></circle>
                  </g>
                </svg>
              </div>
              <div className="about-philosophy-timeline-content">
                <h3 className="about-philosophy-timeline-title">
                  {' '}
                  Premium Cheese Selection
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="about-philosophy-timeline-text">
                  <span>
                    {' '}
                    We use only the finest cheeses: low-moisture mozzarella for
                    perfect 
                  </span>
                  <span className="about-us-text20">
                    melt, tangy feta for Mediterranean flair, and freshly grated
                    Parmigiano Reggiano for that finishing umami touch.
                  </span>
                  We use only the finest cheeses: low-moisture mozzarella for
                  perfect melt, fresh Fior di Latte for authentic Italian taste,
                  tangy feta for Mediterranean flair, and freshly grated
                  Parmigiano Reggiano for that finishing umami touch.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="about-philosophy-timeline-item">
              <div className="about-philosophy-timeline-marker">
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
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </div>
              <div className="about-philosophy-timeline-content">
                <h3 className="about-philosophy-timeline-title">
                  Curated Perfection
                </h3>
                <p className="about-philosophy-timeline-text">
                  <span>
                    {' '}
                    We focus on seven distinct pizzas, eliminating customization
                    to 
                  </span>
                  <span className="about-us-text22">
                    perfect every detail. Each recipe is chef-driven and
                    non-negotiable, ensuring consistent excellence in every
                    bite.
                  </span>
                  We focus on six distinct pizzas, eliminating customization to
                  perfect every detail. Each recipe is chef-driven and
                  non-negotiable, ensuring consistent excellence in every bite.
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
      <section className="features-commitment-section">
        <div className="features-commitment-wrapper">
          <div className="features-commitment-header">
            <h2 className="section-title">Our Quality Commitment</h2>
            <p className="section-subtitle">
              {' '}
              GMO-free, pesticide-free microgreens and high-integrity components
              define our uncompromising standards.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="features-commitment-grid">
            <div className="features-commitment-card">
              <div className="features-commitment-card-icon">
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
              <h3 className="features-commitment-card-title">
                GMO-Free Microgreens
              </h3>
              <p className="features-commitment-card-text">
                {' '}
                Every microgreen we use is guaranteed GMO-free, sourced from
                trusted growers who share our commitment to natural, unmodified
                produce.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-commitment-card">
              <div className="features-commitment-card-icon">
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
              <h3 className="features-commitment-card-title">
                Pesticide-Free Promise
              </h3>
              <p className="features-commitment-card-text">
                {' '}
                Our microgreens are cultivated without synthetic pesticides,
                ensuring the purest, cleanest finish for your pizza.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-commitment-card">
              <div className="features-commitment-card-icon">
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
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="features-commitment-card-title">
                Hyper-Fresh Guarantee
              </h3>
              <p className="features-commitment-card-text">
                {' '}
                Our microgreens are harvested at peak freshness and delivered
                within hours, preserving maximum flavor, nutrition, and vibrant
                color.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-commitment-card">
              <div className="features-commitment-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              </div>
              <h3 className="features-commitment-card-title">
                Premium Avocado Oil
              </h3>
              <p className="features-commitment-card-text">
                {' '}
                We exclusively use high-grade avocado oil in our dough, prized
                for its heart-healthy fats, high smoke point, and subtle flavor
                enhancement.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-commitment-card">
              <div className="features-commitment-card-icon">
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
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </g>
                </svg>
              </div>
              <h3 className="features-commitment-card-title">
                Ingredient Integrity
              </h3>
              <p className="features-commitment-card-text">
                {' '}
                Every component is chosen for purity and flavor. From authentic
                San Marzano tomatoes to artisanal cheeses, we never compromise.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-commitment-card">
              <div className="features-commitment-card-icon">
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
              <h3 className="features-commitment-card-title">
                Chef-Approved Standards
              </h3>
              <p className="features-commitment-card-text">
                {' '}
                Every ingredient passes rigorous chef-led quality checks. We
                refuse anything that doesn&apos;t meet our exacting culinary
                standards.
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
      <section className="gallery-menu-section">
        <div className="about-us-gallery-menu-wrapper">
          <div className="about-us-gallery-menu-header">
            <h2 className="section-title">Our Seven Signature Pizzas</h2>
            <p className="section-subtitle">
              {' '}
              Each pizza is a chef-driven masterpiece, finished with
              precision-selected microgreens. Non-customizable. Perfected.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="gallery-menu-carousel">
            <div className="gallery-menu-track">
              <div className="gallery-menu-slide">
                <div className="gallery-menu-image-wrapper">
                  <img
                    alt="Close-up of a homemade pizza topped with arugula, mozzarella, and tomatoes."
                    src="/funghi%20e%20cipolla-1400w.png"
                    className="about-us-gallery-menu-image"
                  />
                  <div className="gallery-menu-overlay"></div>
                </div>
                <div className="gallery-menu-content">
                  <h3 className="gallery-menu-title">Funghi e Cipolla</h3>
                  <p className="gallery-menu-description">
                    {' '}
                    Sautéed cremini mushrooms and red onion on San Marzano base,
                    crowned with Parmigiano Reggiano. Finished with radish
                    microgreens and fresh basil for a spicy, sharp contrast.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="gallery-menu-badge">
                    <span>Radish Microgreens + Basil</span>
                  </div>
                </div>
              </div>
              <div className="gallery-menu-slide">
                <div className="gallery-menu-image-wrapper">
                  <img
                    alt="Top view of a tasty seafood pizza garnished with fresh herbs and lemon slices."
                    src="/mediterranean%20coast-1400w.png"
                    className="about-us-gallery-menu-image"
                  />
                  <div className="gallery-menu-overlay"></div>
                </div>
                <div className="gallery-menu-content">
                  <h3 className="gallery-menu-title">Mediterranean Coast</h3>
                  <p className="gallery-menu-description">
                    {' '}
                    Mozzarella and crumbled feta with mixed olives, Roma
                    tomatoes, and red pepper flakes. Finished with micro
                    cilantro for a bright, citrusy note that cuts the saltiness.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="gallery-menu-badge">
                    <span>Baby Arugula</span>
                  </div>
                </div>
              </div>
              <div className="gallery-menu-slide">
                <div className="gallery-menu-image-wrapper">
                  <img
                    alt="An overhead view of a homemade pizza being topped with fresh ingredients."
                    src="/the%20tuscan%20gardener-1400w.png"
                    className="about-us-gallery-menu-image"
                  />
                  <div className="gallery-menu-overlay"></div>
                </div>
                <div className="gallery-menu-content">
                  <h3 className="gallery-menu-title">The Tuscan Gardener</h3>
                  <p className="gallery-menu-description">
                    {' '}
                    Loaded with roasted broccoli, cauliflower, peppers, and
                    sautéed mushrooms on mozzarella base. Finished with broccoli
                    microgreens for a classic, earthy balance.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="gallery-menu-badge">
                    <span>Broccoli Microgreens</span>
                  </div>
                </div>
              </div>
              <div className="gallery-menu-slide">
                <div className="gallery-menu-image-wrapper">
                  <img
                    alt="Top view of a delicious Italian pizza with shrimp and zucchini, perfect for food photography."
                    src="/verde%20fresco-1400w.png"
                    className="about-us-gallery-menu-image"
                  />
                  <div className="gallery-menu-overlay"></div>
                </div>
                <div className="gallery-menu-content">
                  <h3 className="gallery-menu-title">Verde Fresco</h3>
                  <p className="gallery-menu-description">
                    <span>
                      {' '}
                      White pizza with olive oil, garlic, parsley, and lemon
                      juice base. 
                    </span>
                    <span className="about-us-text27">
                      Fresh mozzarella, finished with baby arugula for a bright,
                      herbaceous, and peppery note.
                    </span>
                    White pizza with olive oil, garlic, parsley, and lemon juice
                    base. Fresh Fior di Latte mozzarella, finished with baby
                    arugula for a bright, herbaceous, and peppery note.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="gallery-menu-badge">
                    <span>Baby Arugula</span>
                  </div>
                </div>
              </div>
              <div className="gallery-menu-slide">
                <div className="gallery-menu-image-wrapper">
                  <img
                    alt="Close-up of a delicious pizza with pepperoni and cheese, accompanied by baking ingredients on a wooden board."
                    src="/pepperoni%20rustico-1400w.png"
                    className="about-us-gallery-menu-image"
                  />
                  <div className="gallery-menu-overlay"></div>
                </div>
                <div className="gallery-menu-content">
                  <h3 className="gallery-menu-title">Pepperoni Rustico</h3>
                  <p className="gallery-menu-description">
                    {' '}
                    High-quality pepperoni with sautéed mushrooms and roasted
                    peppers on San Marzano base. Hot honey drizzle and radish
                    microgreens deliver bold, spicy contrast.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="gallery-menu-badge">
                    <span>Radish Microgreens</span>
                  </div>
                </div>
              </div>
              <div className="gallery-menu-slide">
                <div className="gallery-menu-image-wrapper">
                  <img
                    alt="A rustic spread featuring pizza, cheese cubes, pomegranate, and olives on a wooden board."
                    src="/ai-generated/ai-generated-1765523778987-1400w.png"
                    className="about-us-gallery-menu-image"
                  />
                  <div className="gallery-menu-overlay"></div>
                </div>
                <div className="gallery-menu-content">
                  <h3 className="gallery-menu-title">Pizza Tricolore</h3>
                  <p className="gallery-menu-description">
                    {' '}
                    The perfect Italian classic. Fresh Fior di Latte on San
                    Marzano sauce, drizzled with extra virgin olive oil.
                    Finished with fresh basil leaves for aromatic perfection.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="gallery-menu-badge">
                    <span>Fresh Basil Leaves</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-sustainability-section">
        <div className="about-us-features-sustainability-container">
          <h2 className="section-title">Sustainable Packaging</h2>
          <p className="section-subtitle">
            {' '}
            Our commitment to the planet is as uncompromising as our commitment
            to quality.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="features-sustainability-carousel">
            <div className="features-sustainability-track">
              <div className="about-us-features-sustainability-card">
                <div className="about-us-features-sustainability-card-icon">
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
                <h3 className="about-us-features-sustainability-card-title">
                  Compostable Cups
                </h3>
                <p className="about-us-features-sustainability-card-text">
                  {' '}
                  Our microgreens arrive in 3 oz compostable portion cups that
                  break down naturally, reducing environmental impact while
                  keeping your garnish crisp and vibrant.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="about-us-features-sustainability-card">
                <div className="about-us-features-sustainability-card-icon">
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
                <h3 className="about-us-features-sustainability-card-title">
                  Zero-Crush Design
                </h3>
                <p className="about-us-features-sustainability-card-text">
                  {' '}
                  Separate packaging ensures your microgreens never get crushed
                  or wilted during transport, arriving at your door as fresh as
                  they left our kitchen.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="about-us-features-sustainability-card">
                <div className="about-us-features-sustainability-card-icon">
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
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                      <path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="about-us-features-sustainability-card-title">
                  Minimal Waste
                </h3>
                <p className="about-us-features-sustainability-card-text">
                  {' '}
                  We design every aspect of our packaging to minimize waste,
                  using recyclable pizza boxes and eliminating unnecessary
                  plastics wherever possible.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="about-us-features-sustainability-card">
                <div className="about-us-features-sustainability-card-icon">
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
                <h3 className="about-us-features-sustainability-card-title">
                  {' '}
                  Protected Freshness
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="about-us-features-sustainability-card-text">
                  {' '}
                  Clear portion cups allow you to see the vibrant color and
                  freshness of your microgreens, guaranteeing quality at first
                  glance.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="about-us-features-sustainability-card">
                <div className="about-us-features-sustainability-card-icon">
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
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="about-us-features-sustainability-card-title">
                  Local Sourcing
                </h3>
                <p className="about-us-features-sustainability-card-text">
                  {' '}
                  We partner with local microgreen growers to reduce
                  transportation emissions and support our community, ensuring
                  the freshest possible product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="about-us-features-sustainability-card">
                <div className="about-us-features-sustainability-card-icon">
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
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="about-us-features-sustainability-card-title">
                  {' '}
                  Continuous Improvement
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="about-us-features-sustainability-card-text">
                  {' '}
                  We continuously research and implement new sustainable
                  practices, from ingredient sourcing to delivery methods,
                  reducing our carbon footprint year over year.
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
      <section className="team-section">
        <div className="team-container">
          <h2 className="section-title">The Head of the Kitchen</h2>
          <p className="section-subtitle">
            <span>
              {' '}
              Meet the Executive Chef and Owner behind every perfectly crafted
              pizza, from dough to
            </span>
            <br></br>
            <span>
              {' '}
              microgreen finish.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            Meet the artisans behind every perfectly crafted pizza, from dough
            to microgreen finish.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="team-carousel">
            <div className="team-track">
              <div className="team-card">
                <div className="team-card-image-wrapper">
                  <img
                    alt="Close-up of a chef adding fresh toppings to a pizza dough in a professional kitchen."
                    src="https://images.pexels.com/photos/8629126/pexels-photo-8629126.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-card-image"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="team-card-title">Executive Chef Elmo</h3>
                  <p className="team-card-role">
                    Founder &amp; Pizza Craftsman
                  </p>
                  <p className="team-card-bio">
                    I am a Pizzaiolo with 10 years of experience, driven by a
                    commitment to true artisanal quality. My entire six-pizza
                    menu is a testament to this, defined by my self-developed,
                    signature avocado oil dough. The philosophy here is simple:
                    control the ingredients. I personally manage all kitchen and
                    business operations, from the exacting process of roasting
                    and seasoning our produce to growing our own microgreens.
                    It&apos;s a complete farm-to-table mindset, ensuring
                    unparalleled freshness in every bite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-us-container2">
        <div className="about-us-container3">
          <Script
            html={`<script defer data-name="carousel-functionality">
(function(){
  const galleryCarousel = document.querySelector(".gallery-menu-carousel")
  if (galleryCarousel) {
    const track = galleryCarousel.querySelector(".gallery-menu-track")
    const slides = Array.from(
      galleryCarousel.querySelectorAll(".gallery-menu-slide")
    )
    const prevBtn = galleryCarousel.querySelector(".gallery-menu-nav-prev")
    const nextBtn = galleryCarousel.querySelector(".gallery-menu-nav-next")
    const indicators = Array.from(
      galleryCarousel.querySelectorAll(".gallery-menu-indicator")
    )

    let currentIndex = 0
    const totalSlides = slides.length

    function updateCarousel() {
      track.style.transform = \`translateX(-\${currentIndex * 100}%)\`
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle(
          "gallery-menu-indicator-active",
          index === currentIndex
        )
      })
    }

    function goToSlide(index) {
      currentIndex = (index + totalSlides) % totalSlides
      updateCarousel()
    }

    prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1))
    nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1))

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => goToSlide(index))
    })
  }

  const sustainabilityCarousel = document.querySelector(
    ".features-sustainability-carousel"
  )
  if (sustainabilityCarousel) {
    const track = sustainabilityCarousel.querySelector(
      ".features-sustainability-track"
    )
    const cards = Array.from(
      sustainabilityCarousel.querySelectorAll(".features-sustainability-card")
    )
    const prevBtn = sustainabilityCarousel.querySelector(
      ".features-sustainability-nav-prev"
    )
    const nextBtn = sustainabilityCarousel.querySelector(
      ".features-sustainability-nav-next"
    )

    let currentPosition = 0

    function getCardsPerView() {
      if (window.innerWidth <= 767) return 1
      if (window.innerWidth <= 991) return 2
      return 3
    }

    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth
      const gap = 24
      track.style.transform = \`translateX(-\${
        currentPosition * (cardWidth + gap)
      }px)\`
    }

    function moveCarousel(direction) {
      const cardsPerView = getCardsPerView()
      const maxPosition = Math.max(0, cards.length - cardsPerView)

      if (direction === "next") {
        currentPosition = Math.min(currentPosition + 1, maxPosition)
      } else {
        currentPosition = Math.max(currentPosition - 1, 0)
      }

      updateCarousel()
    }

    prevBtn.addEventListener("click", () => moveCarousel("prev"))
    nextBtn.addEventListener("click", () => moveCarousel("next"))

    window.addEventListener("resize", () => {
      currentPosition = 0
      updateCarousel()
    })
  }

  const teamCarousel = document.querySelector(".team-carousel")
  if (teamCarousel) {
    const track = teamCarousel.querySelector(".team-track")
    const cards = Array.from(teamCarousel.querySelectorAll(".team-card"))
    const prevBtn = teamCarousel.querySelector(".team-nav-prev")
    const nextBtn = teamCarousel.querySelector(".team-nav-next")

    let currentPosition = 0

    function getCardsPerView() {
      if (window.innerWidth <= 767) return 1
      if (window.innerWidth <= 991) return 2
      return 3
    }

    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth
      const gap = 24
      track.style.transform = \`translateX(-\${
        currentPosition * (cardWidth + gap)
      }px)\`
    }

    function moveCarousel(direction) {
      const cardsPerView = getCardsPerView()
      const maxPosition = Math.max(0, cards.length - cardsPerView)

      if (direction === "next") {
        currentPosition = Math.min(currentPosition + 1, maxPosition)
      } else {
        currentPosition = Math.max(currentPosition - 1, 0)
      }

      updateCarousel()
    }

    prevBtn.addEventListener("click", () => moveCarousel("prev"))
    nextBtn.addEventListener("click", () => moveCarousel("next"))

    window.addEventListener("resize", () => {
      currentPosition = 0
      updateCarousel()
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutUs
