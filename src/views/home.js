import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Da Elmo Gourmet Pizzeria</title>
        <meta property="og:title" content="Da Elmo Gourmet Pizzeria" />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-main">
        <div className="hero-main-wrapper">
          <div className="hero-main-background">
            <img
              alt="Gourmet pizza topped with fresh microgreens"
              src="https://images.pexels.com/photos/6147981/pexels-photo-6147981.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-main-image"
            />
            <div className="hero-main-overlay"></div>
          </div>
          <div className="home-thq-hero-main-content-elm hero-main-content">
            <div className="hero-main-container">
              <div className="hero-main-feature">
                <div className="hero-main-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                  <span>Microgreen-Finished</span>
                </div>
                <h1 className="home-hero-title hero-title">
                  Gourmet Pizza, Delivered.
                </h1>
                <p className="home-hero-subtitle hero-subtitle">
                  {' '}
                  Chef-perfected artisan pizzas with our signature microgreen
                  finish. Uncompromising quality delivered straight to your door
                  via Uber Eats and DoorDash.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-main-cta">
                  <a
                    href="https://www.ubereats.com/ca?msockid=1298bc78b6d86c021899a903b7b56de6"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-thq-btn-elm1 btn-primary btn btn-lg"
                  >
                    Order on Uber Eats
                  </a>
                  <a
                    href="https://www.doordash.com/?msockid=1298bc78b6d86c021899a903b7b56de6"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-thq-btn-elm2 btn-secondary btn btn-lg"
                  >
                    Order on DoorDash
                  </a>
                </div>
              </div>
              <div className="hero-main-features">
                <div className="hero-main-feature-card">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                  <h3 className="hero-main-feature-title">
                    GMO-Free Microgreens
                  </h3>
                  <p className="hero-main-feature-text">
                    {' '}
                    Pesticide-free, hyper-fresh greens that elevate every bite
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="hero-main-feature-card">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                  <h3 className="hero-main-feature-title">Avocado Oil Dough</h3>
                  <p className="hero-main-feature-text">
                    {' '}
                    Premium handcrafted dough for unmatched flavor and texture
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="hero-main-feature-card">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                  <h3 className="hero-main-feature-title">Chef-Curated Menu</h3>
                  <p className="hero-main-feature-text">
                    {' '}
                    Six distinct pizzas perfected in every detail, no
                    customization needed
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="hero-main-feature-card">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                  <h3 className="hero-main-feature-title">Delivery-First</h3>
                  <p className="hero-main-feature-text">
                    {' '}
                    Seamless delivery experience from our kitchen to your table
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
        </div>
      </section>
      <section className="cta-delivery">
        <div className="cta-delivery-wrapper">
          <video
            src="https://videos.pexels.com/video-files/7008562/7008562-hd_1080_1920_25fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="cta-delivery-video"
          ></video>
          <div className="cta-delivery-overlay"></div>
          <div className="cta-delivery-content">
            <div className="cta-delivery-container">
              <h2 className="section-title">Order Now, Delivered Fast</h2>
              <p className="section-subtitle">
                {' '}
                Your gourmet pizza experience is just a tap away. Available
                exclusively on Uber Eats and DoorDash for seamless, reliable
                delivery.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-delivery-buttons">
                <div className="cta-delivery-platform">
                  <div className="cta-delivery-platform-header">
                    <div className="cta-delivery-platform-logo">
                      <span>Uber Eats</span>
                    </div>
                    <span className="cta-delivery-status">Available Now</span>
                  </div>
                  <a
                    href="https://www.ubereats.com/ca?msockid=1298bc78b6d86c021899a903b7b56de6"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-thq-btn-elm3 btn-primary btn btn-xl"
                  >
                    Start Your Order
                  </a>
                </div>
                <div className="cta-delivery-platform">
                  <div className="cta-delivery-platform-header">
                    <div className="cta-delivery-platform-logo">
                      <span>DoorDash</span>
                    </div>
                    <span className="cta-delivery-status">Available Now</span>
                  </div>
                  <a
                    href="https://www.doordash.com/?msockid=1298bc78b6d86c021899a903b7b56de6"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-thq-btn-elm4 btn-accent btn btn-xl"
                  >
                    Start Your Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-menu">
        <div className="gallery-menu-wrapper">
          <div className="gallery-menu-header">
            <h2 className="section-title">Six Signature Pizzas</h2>
            <p className="section-subtitle">
              {' '}
              Each pizza is a chef-driven masterpiece, finished with our
              signature microgreens for the perfect balance of flavor and
              freshness.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="gallery-menu-grid">
            <div className="gallery-menu-item gallery-menu-item-large">
              <img
                alt="Pizza Tricolore with fresh basil"
                src="https://images.pexels.com/photos/6605220/pexels-photo-6605220.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-menu-image"
              />
              <div className="gallery-menu-item-overlay"></div>
              <div className="gallery-menu-item-content">
                <div className="gallery-menu-item-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Fresh Basil</span>
                </div>
                <h3 className="gallery-menu-item-title">Pizza Tricolore</h3>
                <p className="gallery-menu-item-description">
                  <span>
                    {' '}
                    The perfect Italian classic featuring mozzarella, San
                    Marzano
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    tomatoes, and fresh basil leaves. The three colors of the
                    Italian
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    flag in pure form.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  The perfect Italian classic featuring Fior di Latte, San
                  Marzano tomatoes, and fresh basil leaves. The three colors of
                  the Italian flag in pure form.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-menu-item">
              <img
                alt="Pepperoni Rustico with radish microgreens"
                src="/pepperoni3-1500w.jpg"
                className="gallery-menu-image"
              />
              <div className="gallery-menu-item-overlay"></div>
              <div className="gallery-menu-item-content">
                <div className="gallery-menu-item-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Radish Microgreens</span>
                </div>
                <h3 className="gallery-menu-item-title">Pepperoni Rustico</h3>
                <p className="gallery-menu-item-description">
                  {' '}
                  Bold and spicy with premium pepperoni, roasted peppers,
                  mushrooms, and hot honey. Balanced by sharp radish
                  microgreens.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-menu-item">
              <img
                alt="Verde Fresco white pizza with arugula"
                src="/ai-generated/ai-generated-1765657227595-1500w.png"
                className="gallery-menu-image"
              />
              <div className="gallery-menu-item-overlay"></div>
              <div className="gallery-menu-item-content">
                <div className="gallery-menu-item-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Baby Arugula</span>
                </div>
                <h3 className="gallery-menu-item-title">Verde Fresco</h3>
                <p className="gallery-menu-item-description">
                  <span>
                    {' '}
                    Our white pizza with garlic-herb oil, mozzarella, fresh
                    parsley, 
                  </span>
                  <span>
                    and lemon. Finished with Parmigiano Reggiano and peppery
                    baby arugula.
                  </span>
                  Our white pizza with garlic-herb oil, Fior di Latte, fresh
                  parsley, and lemon. Finished with peppery baby arugula.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-menu-item">
              <img
                alt="Mediterranean Coast pizza with feta and olives"
                src="/mediterranean-1500w.jpg"
                className="gallery-menu-image"
              />
              <div className="gallery-menu-item-overlay"></div>
              <div className="gallery-menu-item-content">
                <div className="gallery-menu-item-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Micro Cilantro</span>
                </div>
                <h3 className="gallery-menu-item-title">Mediterranean Coast</h3>
                <p className="gallery-menu-item-description">
                  {' '}
                  Bright and tangy with feta, mixed olives, tomatoes, and red
                  pepper flakes. Baby arugula adds a peppery finish.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-menu-item gallery-menu-item-large">
              <img
                alt="Tuscan Gardener vegetable pizza with broccoli microgreens"
                src="/tuscan1-1500w.jpg"
                className="gallery-menu-image"
              />
              <div className="gallery-menu-item-overlay"></div>
              <div className="gallery-menu-item-content">
                <div className="gallery-menu-item-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Broccoli Microgreens</span>
                </div>
                <h3 className="gallery-menu-item-title">Tuscan Gardener</h3>
                <p className="gallery-menu-item-description">
                  {' '}
                  The ultimate vegetable-forward pizza with roasted broccoli,
                  cauliflower, peppers, and cremini mushrooms. Topped with
                  classic broccoli microgreens.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="gallery-menu-item">
              <img
                alt="Funghi e Cipolla mushroom and onion pizza"
                src="/funghi-1500w.jpg"
                className="gallery-menu-image"
              />
              <div className="gallery-menu-item-overlay"></div>
              <div className="gallery-menu-item-content">
                <div className="gallery-menu-item-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Radish Microgreens &amp; Basil</span>
                </div>
                <h3 className="gallery-menu-item-title">Funghi e Cipolla</h3>
                <p className="gallery-menu-item-description">
                  {' '}
                  Classic Italian pairing of cremini mushrooms and red onion
                  with Parmigiano Reggiano. Double garnish of radish microgreens
                  and basil.
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
      <section className="about-quality">
        <div className="about-quality-wrapper">
          <div className="about-quality-container">
            <div className="about-quality-header">
              <h2 className="section-title">Uncompromising Quality</h2>
              <p className="section-subtitle">
                {' '}
                Every ingredient is chosen for its purity, flavor, and
                integrity. Our philosophy is simple: perfection in every detail,
                from dough to delivery.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="about-quality-timeline">
              <div className="about-quality-timeline-line"></div>
              <div className="about-quality-timeline-item">
                <div className="about-quality-timeline-marker">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                </div>
                <div className="about-quality-timeline-content">
                  <h3 className="about-quality-timeline-title">
                    {' '}
                    Premium Avocado Oil Dough
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="about-quality-timeline-text">
                    {' '}
                    Our signature dough is handcrafted using premium avocado oil
                    and high-quality flour. This unique combination creates a
                    foundation of unmatched flavor, texture, and nutritional
                    value that sets us apart from traditional pizza dough.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="about-quality-timeline-item">
                <div className="about-quality-timeline-marker">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                </div>
                <div className="about-quality-timeline-content">
                  <h3 className="about-quality-timeline-title">
                    {' '}
                    Authentic San Marzano Tomatoes
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="about-quality-timeline-text">
                    {' '}
                    Our rich, vibrant sauce starts with authentic San Marzano
                    tomatoes, ensuring a true Italian base. These prized
                    tomatoes are grown in volcanic soil, delivering the perfect
                    balance of sweetness and acidity that defines exceptional
                    pizza sauce.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="about-quality-timeline-item">
                <div className="about-quality-timeline-marker">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                <div className="about-quality-timeline-content">
                  <h3 className="about-quality-timeline-title">
                    {' '}
                    GMO-Free, Pesticide-Free Microgreens
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="about-quality-timeline-text">
                    {' '}
                    Our hallmark is the final touch of hyper-fresh, GMO-free,
                    pesticide-free microgreens. Each variety is intentionally
                    chosen to balance and elevate its pizza, from peppery radish
                    microgreens to bright micro cilantro, adding the perfect
                    finishing note.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="about-quality-timeline-item">
                <div className="about-quality-timeline-marker">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                </div>
                <div className="about-quality-timeline-content">
                  <h3 className="about-quality-timeline-title">
                    {' '}
                    Chef-Curated, Non-Customizable Menu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="about-quality-timeline-text">
                    {' '}
                    We eliminate the complexity of customization to focus solely
                    on perfecting a curated menu of six distinct, chef-driven
                    pizzas. Every detail is perfected, every ingredient is
                    deliberate, and every bite delivers an uncompromising
                    gourmet experience.
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
        </div>
      </section>
      <section className="features-sustainability">
        <div className="features-sustainability-wrapper">
          <div className="features-sustainability-container">
            <div className="features-sustainability-header">
              <h2 className="section-title">Freshness &amp; Sustainability</h2>
              <p className="section-subtitle">
                {' '}
                Our commitment to quality extends beyond taste to environmental
                responsibility and guaranteed freshness.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-sustainability-carousel">
              <div className="features-sustainability-carousel-track">
                <div className="features-sustainability-card">
                  <div className="features-sustainability-card-image">
                    <img
                      alt="Compostable microgreen packaging"
                      src="https://images.pexels.com/photos/5056624/pexels-photo-5056624.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="features-sustainability-card-icon">
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
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                          <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="features-sustainability-card-content">
                    <h3 className="features-sustainability-card-title">
                      {' '}
                      Compostable Microgreen Cups
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="features-sustainability-card-text">
                      {' '}
                      Your microgreens arrive in clear 3 oz compostable portion
                      cups, ensuring they stay crisp, dry, and vibrant. Never
                      crushed or wilted during transport, they&apos;re ready for
                      the perfect final scatter on your pizza.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="features-sustainability-card">
                  <div className="features-sustainability-card-image">
                    <img
                      alt="Professional pizza preparation"
                      src="https://images.pexels.com/photos/5953490/pexels-photo-5953490.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="features-sustainability-card-icon">
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
                    </div>
                  </div>
                  <div className="features-sustainability-card-content">
                    <h3 className="features-sustainability-card-title">
                      {' '}
                      Freshness Guarantee
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="features-sustainability-card-text">
                      {' '}
                      Every pizza is prepared to order with the freshest
                      ingredients. Our packaging system preserves the perfect
                      temperature and texture from our kitchen to your table,
                      guaranteeing restaurant-quality results every time.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="features-sustainability-card">
                  <div className="features-sustainability-card-image">
                    <img
                      alt="Eco-friendly delivery packaging"
                      src="https://images.pexels.com/photos/2714722/pexels-photo-2714722.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="features-sustainability-card-icon">
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
                          <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"></path>
                          <path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"></path>
                          <path d="m13.378 9.633l4.096 1.098l1.097-4.096"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="features-sustainability-card-content">
                    <h3 className="features-sustainability-card-title">
                      {' '}
                      Sustainable Packaging
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="features-sustainability-card-text">
                      {' '}
                      We&apos;re committed to environmental responsibility with
                      compostable and recyclable packaging materials. Our
                      portion cups and delivery containers are designed to
                      minimize waste while maintaining the highest standards of
                      food safety.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="features-sustainability-card">
                  <div className="features-sustainability-card-image">
                    <img
                      alt="Seamless delivery experience"
                      src="https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="features-sustainability-card-icon">
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
                          <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                          <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="features-sustainability-card-content">
                    <h3 className="features-sustainability-card-title">
                      {' '}
                      Seamless Delivery Process
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="features-sustainability-card-text">
                      {' '}
                      We manage the entire delivery experience through trusted
                      partners Uber Eats and DoorDash. Fast, reliable, and
                      tracked in real-time, your gourmet pizza arrives exactly
                      when you expect it.
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
          </div>
        </div>
      </section>
      <section className="testimonials-reviews">
        <div className="testimonials-reviews-wrapper">
          <div className="testimonials-reviews-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              {' '}
              Real experiences from pizza lovers who&apos;ve discovered the
              Microcrust difference.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="testimonials-reviews-carousel">
            <div className="testimonials-reviews-carousel-track">
              <div className="testimonials-reviews-card">
                <div className="testimonials-reviews-card-stars">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                <p className="testimonials-reviews-card-quote">
                  <span>
                    {' '}
                    The microgreen finish is absolutely genius! I&apos;ve never
                    tasted pizza 
                  </span>
                  <span>
                    this fresh and sophisticated delivered to my door. The
                    Pizza 
                  </span>
                  <span>
                    Tricolore is perfection.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  The microgreen finish is absolutely genius! I&apos;ve never
                  tasted pizza this fresh and sophisticated delivered to my
                  door. The Pizza Tricolore is perfection.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-reviews-card-author">
                  <div className="testimonials-reviews-card-author-info">
                    <h4 className="testimonials-reviews-card-author-name">
                      {' '}
                      Sarah Mitchell
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h4>
                    <p className="testimonials-reviews-card-author-location">
                      {' '}
                      Laval, Canada
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonials-reviews-card">
                <div className="testimonials-reviews-card-stars">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                <p className="testimonials-reviews-card-quote">
                  {' '}
                  Fast delivery and incredible quality. The compostable cups for
                  the greens show they really care about sustainability. The
                  Pepperoni Rustico with radish microgreens is my new obsession!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-reviews-card-author">
                  <div className="testimonials-reviews-card-author-info">
                    <h4 className="testimonials-reviews-card-author-name">
                      Marcus Chen
                    </h4>
                    <p className="testimonials-reviews-card-author-location">
                      {' '}
                      Montreal, Canada
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonials-reviews-card">
                <div className="testimonials-reviews-card-stars">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                <p className="testimonials-reviews-card-quote">
                  {' '}
                  As someone who values quality ingredients, I&apos;m blown away
                  by the avocado oil dough and San Marzano tomatoes. You can
                  taste the difference. The Verde Fresco is restaurant-quality!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-reviews-card-author">
                  <div className="testimonials-reviews-card-author-info">
                    <h4 className="testimonials-reviews-card-author-name">
                      {' '}
                      Elena Rodriguez
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h4>
                    <p className="testimonials-reviews-card-author-location">
                      {' '}
                      Laval, Canada
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonials-reviews-card">
                <div className="testimonials-reviews-card-stars">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                <p className="testimonials-reviews-card-quote">
                  {' '}
                  The curated menu is brilliant. No decision fatigue, just six
                  perfectly crafted options. The Tuscan Gardener with broccoli
                  microgreens is my go-to for a lighter, veggie-packed meal.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-reviews-card-author">
                  <div className="testimonials-reviews-card-author-info">
                    <h4 className="testimonials-reviews-card-author-name">
                      {' '}
                      David Thompson
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h4>
                    <p className="testimonials-reviews-card-author-location">
                      {' '}
                      Seattle, WA
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
            <div className="testimonials-reviews-carousel-controls">
              <button
                aria-label="Previous testimonial"
                className="testimonials-reviews-carousel-button testimonials-reviews-carousel-prev"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m12 19l-7-7l7-7m7 7H5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Next testimonial"
                className="testimonials-reviews-carousel-button testimonials-reviews-carousel-next"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="testimonials-reviews-carousel-indicators">
              <button
                aria-label="Go to testimonial 1"
                className="testimonials-reviews-carousel-indicator-active testimonials-reviews-carousel-indicator"
              ></button>
              <button
                aria-label="Go to testimonial 2"
                className="testimonials-reviews-carousel-indicator"
              ></button>
              <button
                aria-label="Go to testimonial 3"
                className="testimonials-reviews-carousel-indicator"
              ></button>
              <button
                aria-label="Go to testimonial 4"
                className="testimonials-reviews-carousel-indicator"
              ></button>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-main-feature-card, .features-sustainability-card, .features-sustainability-carousel-button, .testimonials-reviews-card, .testimonials-reviews-carousel-button, .services-wine-item, .gallery-menu-image {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="carousel-functionality">
(function(){
  const initCarousel = (carouselSelector) => {
    const carousel = document.querySelector(carouselSelector)
    if (!carousel) return

    const track = carousel.querySelector(\`\${carouselSelector}-track\`)
    const prevButton = carousel.querySelector(\`\${carouselSelector}-prev\`)
    const nextButton = carousel.querySelector(\`\${carouselSelector}-next\`)
    const indicators = carousel.querySelectorAll(
      \`\${carouselSelector}-indicator\`
    )

    let currentIndex = 0

    const updateCarousel = () => {
      const cardWidth = track.firstElementChild.offsetWidth
      const gap = parseInt(getComputedStyle(track).gap)
      const scrollAmount = (cardWidth + gap) * currentIndex

      track.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })

      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add(
            \`\${carouselSelector.substring(1)}-indicator-active\`
          )
        } else {
          indicator.classList.remove(
            \`\${carouselSelector.substring(1)}-indicator-active\`
          )
        }
      })
    }

    const nextSlide = () => {
      const maxIndex = indicators.length - 1
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
      updateCarousel()
    }

    const prevSlide = () => {
      const maxIndex = indicators.length - 1
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1
      updateCarousel()
    }

    nextButton.addEventListener("click", nextSlide)
    prevButton.addEventListener("click", prevSlide)

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index
        updateCarousel()
      })
    })

    let startX = 0
    let endX = 0

    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
    })

    track.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    })
  }

  initCarousel(".features-sustainability-carousel")
  initCarousel(".testimonials-reviews-carousel")
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
