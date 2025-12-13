import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './gourmet-pizza-menu.css'

const GourmetPizzaMenu = (props) => {
  return (
    <div className="gourmet-pizza-menu-container1">
      <Helmet>
        <title>Gourmet-Pizza-Menu - Da Elmo Gourmet Pizzeria</title>
        <meta
          property="og:title"
          content="Gourmet-Pizza-Menu - Da Elmo Gourmet Pizzeria"
        />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/gourmet-pizza-menu"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-carousel">
        <div className="hero-carousel__wrapper">
          <div className="hero-carousel__slides">
            <div className="hero-carousel__slide--active hero-carousel__slide">
              <div className="gourmet-pizza-menu-thq-hero-carouselbg-layer-elm1 hero-carousel__bg-layer"></div>
              <div className="hero-carousel__overlay"></div>
              <div className="hero-carousel__content-container">
                <div className="hero-carousel__content">
                  <h1 className="hero-title">Gourmet Pizza, Delivered</h1>
                  <p className="hero-subtitle">
                    Chef-Perfected, Microgreen-Finished
                  </p>
                  <p className="section-content">
                    {' '}
                    Experience delivery-first artisan pizza crafted with premium
                    avocado oil dough and finished with GMO-free microgreens.
                    Six signature pizzas, exclusively via Uber Eats and
                    DoorDash.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="hero-carousel__cta-group">
                    <button className="btn-primary btn btn-lg">
                      Order on Uber Eats
                    </button>
                    <button className="btn btn-outline btn-lg">
                      Order on DoorDash
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-carousel__slide">
              <div className="gourmet-pizza-menu-thq-hero-carouselbg-layer-elm2 hero-carousel__bg-layer"></div>
              <div className="hero-carousel__overlay"></div>
              <div className="hero-carousel__content-container">
                <div className="hero-carousel__content">
                  <h1 className="hero-title">Six Chef-Driven Pizzas</h1>
                  <p className="hero-subtitle">Non-Customizable Perfection</p>
                  <p className="section-content">
                    {' '}
                    From Pepperoni Rustico to Verde Fresco, each pizza is a
                    carefully curated masterpiece crafted with San Marzano
                    tomatoes and finished with signature microgreens.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="hero-carousel__cta-group">
                    <button className="btn-primary btn btn-lg">
                      Explore the Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-carousel__slide">
              <div className="gourmet-pizza-menu-thq-hero-carouselbg-layer-elm3 hero-carousel__bg-layer"></div>
              <div className="hero-carousel__overlay"></div>
              <div className="hero-carousel__content-container">
                <div className="hero-carousel__content">
                  <h1 className="hero-title">The Microgreen Difference</h1>
                  <p className="hero-subtitle">
                    GMO-Free, Pesticide-Free Excellence
                  </p>
                  <p className="section-content">
                    {' '}
                    Fresh microgreens delivered separately in compostable cups.
                    Scatter them on your pizza for the perfect finish that
                    balances every bite with vibrant, living flavor.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="hero-carousel__cta-group">
                    <button className="btn-primary btn btn-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-list">
        <div className="menu-list__wrapper">
          <div className="menu-list__header">
            <h2 className="section-title">Six Chef-Driven Pizzas</h2>
            <p className="section-subtitle">
              {' '}
              Each pizza is a non-customizable masterpiece featuring
              high-quality ingredients and signature microgreen finishes
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="menu-list__items">
            <div className="menu-list__item">
              <div className="menu-list__item-image">
                <img
                  alt="Funghi e Cipolla Pizza with mushrooms and onions"
                  src="/ai-generated/ai-generated-1765076038197-1500w.png"
                />
                <div className="menu-list__item-badge">
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
              <div className="menu-list__item-content">
                <h3 className="menu-list__item-title">Funghi e Cipolla</h3>
                <p className="menu-list__item-subtitle">Mushroom and Onion</p>
                <p className="section-content">
                  <span>
                    {' '}
                    Rich, earthy cremini mushrooms and sweet red onions on San
                    Marzano
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    sauce with mozzarella and Parmigiano Reggiano.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Rich, earthy cremini mushrooms and sweet red onions on San
                  Marzano sauce with mozzarella and Parmigiano Reggiano.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="menu-list__item-garnish">
                  <span className="menu-list__garnish-label">
                    Signature Finish:
                  </span>
                  <span className="menu-list__garnish-text">
                    {' '}
                    Radish Microgreens &amp; Fresh Basil
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__item-image">
                <img
                  alt="Mediterranean Coast Pizza with olives and feta"
                  src="/feta3-1500w.jpg"
                />
                <div className="menu-list__item-badge">
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
              <div className="menu-list__item-content">
                <h3 className="menu-list__item-title">Mediterranean Coast</h3>
                <p className="menu-list__item-subtitle">
                  Bright, Citrusy &amp; Vibrant
                </p>
                <p className="section-content">
                  <span>
                    Mozzarella, tangy feta cheese, mixed olives, and fresh
                    tomatoes on San Marzano
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    sauce with a pinch of red pepper flakes.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Tangy feta cheese, mixed olives, and fresh tomatoes on San
                  Marzano sauce with a pinch of red pepper flakes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="menu-list__item-garnish">
                  <span className="menu-list__garnish-label">
                    Signature Finish:
                  </span>
                  <span className="menu-list__garnish-text">
                    Micro Cilantro
                  </span>
                </div>
              </div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__item-image">
                <img
                  alt="The Tuscan Gardener Pizza loaded with vegetables"
                  src="/tuscan2-1500w.jpg"
                />
                <div className="menu-list__item-badge">
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
              <div className="menu-list__item-content">
                <h3 className="menu-list__item-title">The Tuscan Gardener</h3>
                <p className="menu-list__item-subtitle">
                  Vegetable-Forward Excellence
                </p>
                <p className="section-content">
                  <span>
                    {' '}
                    Roasted broccoli, cauliflower, peppers, and sautéed
                    mushrooms on San
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    Marzano sauce with mozzarella and Parmigiano Reggiano.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Roasted broccoli, cauliflower, peppers, and sautéed mushrooms
                  on San Marzano sauce with mozzarella and Parmigiano Reggiano.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="menu-list__item-garnish">
                  <span className="menu-list__garnish-label">
                    Signature Finish:
                  </span>
                  <span className="menu-list__garnish-text">
                    Broccoli Microgreens
                  </span>
                </div>
              </div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__item-image">
                <img
                  alt="Verde Fresco white pizza"
                  src="/ai-generated/ai-generated-1765077563070-1500w.png"
                />
                <div className="menu-list__item-badge">
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
              <div className="menu-list__item-content">
                <h3 className="menu-list__item-title">Verde Fresco</h3>
                <p className="menu-list__item-subtitle">
                  Fresh Green White Pizza
                </p>
                <p className="section-content">
                  <span>
                    {' '}
                    Garlic-infused olive oil with fresh parsley, lemon juice,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    mozzarella cheese and Parmigiano Reggiano. No tomato sauce.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Garlic-infused olive oil with fresh parsley, lemon juice, Fior
                  di Latte mozzarella, and Parmigiano Reggiano. No tomato sauce.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="menu-list__item-garnish">
                  <span className="menu-list__garnish-label">
                    Signature Finish:
                  </span>
                  <span className="menu-list__garnish-text">Baby Arugula</span>
                </div>
              </div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__item-image">
                <img
                  alt="Pepperoni Rustico Pizza"
                  src="/pepperoni2-1500w.jpg"
                />
                <div className="menu-list__item-badge">
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
              <div className="menu-list__item-content">
                <h3 className="menu-list__item-title">Pepperoni Rustico</h3>
                <p className="menu-list__item-subtitle">
                  Spicy, Rich &amp; Bold
                </p>
                <p className="section-content">
                  <span>
                    {' '}
                    High-quality pepperoni with sautéed mushrooms and roasted
                    peppers, mozzarella cheese
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    finished with hot honey for gourmet contrast.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  High-quality pepperoni with sautéed mushrooms and roasted
                  peppers, finished with hot honey or chili oil for gourmet
                  contrast.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="menu-list__item-garnish">
                  <span className="menu-list__garnish-label">
                    Signature Finish:
                  </span>
                  <span className="menu-list__garnish-text">
                    Radish Microgreens
                  </span>
                </div>
              </div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__item-image">
                <img
                  alt="Pizza Tricolore"
                  src="/ai-generated/ai-generated-1765077951111-1500w.png"
                />
                <div className="menu-list__item-badge">
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
              <div className="menu-list__item-content">
                <h3 className="menu-list__item-title">Pizza Tricolore</h3>
                <p className="menu-list__item-subtitle">
                  The Perfect Italian Classic
                </p>
                <p className="section-content">
                  <span>
                    {' '}
                    San Marzano tomatoes, mozzarella cheese, and extra virgin
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    olive oil. A celebration of Italy&apos;s finest ingredients.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  San Marzano tomatoes, Fior di Latte mozzarella, and extra
                  virgin olive oil. A celebration of Italy&apos;s finest
                  ingredients.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="menu-list__item-garnish">
                  <span className="menu-list__garnish-label">
                    Signature Finish:
                  </span>
                  <span className="menu-list__garnish-text">
                    Fresh Basil Leaves
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="microgreen-story">
        <div className="microgreen-story__wrapper">
          <div className="microgreen-story__header">
            <h2 className="section-title">The Microgreen Difference</h2>
            <p className="section-subtitle">
              {' '}
              GMO-Free, Pesticide-Free Excellence That Elevates Every Bite
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="microgreen-story__timeline">
            <div className="microgreen-story__timeline-line"></div>
            <div className="microgreen-story__timeline-item">
              <div className="microgreen-story__timeline-marker">
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
              <div className="microgreen-story__timeline-content">
                <div className="microgreen-story__timeline-image">
                  <img
                    alt="Fresh microgreens growing"
                    src="https://images.pexels.com/photos/11678841/pexels-photo-11678841.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <h3 className="microgreen-story__timeline-title">
                  {' '}
                  Hyper-Fresh Living Greens
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="section-content">
                  {' '}
                  Our microgreens are harvested at peak freshness and delivered
                  separately to ensure they arrive crisp, vibrant, and full of
                  life. No wilting, no crushing—just living flavor ready to
                  finish your pizza.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="microgreen-story__timeline-item">
              <div className="microgreen-story__timeline-marker">
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
              <div className="microgreen-story__timeline-content">
                <div className="microgreen-story__timeline-image">
                  <img
                    alt="GMO-free pesticide-free certification"
                    src="/ai-generated/ai-generated-1765597400517-1000w.png"
                  />
                </div>
                <h3 className="microgreen-story__timeline-title">
                  {' '}
                  GMO-Free &amp; Pesticide-Free
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="section-content">
                  {' '}
                  We source only the purest microgreens, grown without GMOs or
                  pesticides. Every leaf represents our commitment to
                  uncompromising quality and integrity, ensuring you taste
                  nothing but clean, vibrant flavor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="microgreen-story__timeline-item">
              <div className="microgreen-story__timeline-marker">
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
              <div className="microgreen-story__timeline-content">
                <div className="microgreen-story__timeline-image">
                  <img
                    alt="Microgreens on bruschetta"
                    src="/ai-generated/ai-generated-1765134329588-1000w.png"
                  />
                </div>
                <h3 className="microgreen-story__timeline-title">
                  {' '}
                  Intentionally Balanced Flavor
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="section-content">
                  {' '}
                  Each pizza receives a signature microgreen that&apos;s
                  specifically chosen to balance and elevate its profile. Radish
                  microgreens cut through rich pepperoni, micro cilantro
                  brightens salty feta, and baby arugula adds peppery freshness
                  to white pizza.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="microgreen-story__timeline-item">
              <div className="microgreen-story__timeline-marker">
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
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </g>
                </svg>
              </div>
              <div className="microgreen-story__timeline-content">
                <div className="microgreen-story__timeline-image">
                  <img
                    alt="Final microgreen garnish"
                    src="/ai-generated/ai-generated-1765134544945-1000w.png"
                  />
                </div>
                <h3 className="microgreen-story__timeline-title">
                  {' '}
                  The Perfect Final Touch
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="section-content">
                  {' '}
                  Scatter your microgreens just before serving to experience the
                  vibrant crunch and explosive flavor that transforms each bite.
                  It&apos;s the chef&apos;s signature finish, now in your hands,
                  completing the gourmet experience we&apos;ve perfected.
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
      <section className="packaging-delivery">
        <div className="packaging-delivery__container">
          <div className="packaging-delivery__header">
            <h2 className="section-title">
              Packaging &amp; Delivery Excellence
            </h2>
            <p className="section-subtitle">
              {' '}
              From our kitchen to your table, every detail is perfected
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="packaging-delivery__carousel">
            <div className="packaging-delivery__carousel-track">
              <div className="packaging-delivery__carousel-item--active packaging-delivery__carousel-item">
                <div className="packaging-delivery__item-media">
                  <video
                    src="https://videos.pexels.com/video-files/5898377/5898377-hd_2048_1080_30fps.mp4"
                    loop="true"
                    muted="true"
                    poster="https://images.pexels.com/videos/5898377/pictures/preview-0.jpg"
                    autoPlay="true"
                    playsInline="true"
                  ></video>
                </div>
                <div className="packaging-delivery__item-content">
                  <div className="packaging-delivery__item-icon">
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
                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                        <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="packaging-delivery__item-title">
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
                    Your signature microgreens arrive in clear 3 oz compostable
                    portion cups, ensuring they stay crisp, dry, and vibrant
                    throughout delivery. Never crushed, never wilted—just ready
                    to scatter.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="packaging-delivery__carousel-item">
                <div className="packaging-delivery__item-media">
                  <video
                    src="https://videos.pexels.com/video-files/8627114/8627114-hd_1920_1080_25fps.mp4"
                    loop="true"
                    muted="true"
                    poster="https://images.pexels.com/videos/8627114/pictures/preview-0.jpeg"
                    autoPlay="true"
                    playsInline="true"
                  ></video>
                </div>
                <div className="packaging-delivery__item-content">
                  <div className="packaging-delivery__item-icon">
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
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                        <circle r="2" cx="17" cy="18"></circle>
                        <circle r="2" cx="7" cy="18"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3 className="packaging-delivery__item-title">
                    {' '}
                    Seamless Delivery Partners
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="section-content">
                    {' '}
                    Order our complete menu exclusively through Uber Eats and
                    DoorDash. We manage the entire process, ensuring fast,
                    reliable delivery from our kitchen to your door with
                    precision timing.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="packaging-delivery__carousel-item">
                <div className="packaging-delivery__item-media">
                  <video
                    src="https://videos.pexels.com/video-files/6603829/6603829-hd_720_1280_25fps.mp4"
                    loop="true"
                    muted="true"
                    poster="https://images.pexels.com/videos/6603829/pictures/preview-0.jpeg"
                    autoPlay="true"
                    playsInline="true"
                  ></video>
                </div>
                <div className="packaging-delivery__item-content">
                  <div className="packaging-delivery__item-icon">
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
                  <h3 className="packaging-delivery__item-title">
                    Freshness Guarantee
                  </h3>
                  <p className="section-content">
                    {' '}
                    Our packaging system is designed to preserve every element
                    of your pizza experience. Hot pizza arrives hot, microgreens
                    arrive fresh, and quality arrives uncompromised—every single
                    time.
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
      <section className="craftsmanship">
        <div className="craftsmanship__container">
          <div className="craftsmanship__header">
            <h2 className="section-title">Uncompromising Craft</h2>
            <p className="section-subtitle">
              {' '}
              Every ingredient chosen for purity, flavor, and integrity
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="craftsmanship__grid">
            <div className="craftsmanship__card">
              <div className="craftsmanship__card-icon">
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
                    <path d="m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"></path>
                    <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path>
                  </g>
                </svg>
              </div>
              <h3 className="craftsmanship__card-title">Avocado Oil Dough</h3>
              <p className="section-content">
                {' '}
                Our signature handcrafted dough uses premium avocado oil for a
                lighter, healthier base with exceptional flavor and texture.
                Every crust is made fresh daily with high-quality flour for the
                perfect foundation.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="craftsmanship__card">
              <div className="craftsmanship__card-icon">
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
              <h3 className="craftsmanship__card-title">
                San Marzano Tomatoes
              </h3>
              <p className="section-content">
                {' '}
                Our rich, vibrant sauce starts with authentic San Marzano
                tomatoes from Italy. Known for their sweet flavor and low
                acidity, they provide the true Italian base that defines gourmet
                pizza excellence.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="craftsmanship__card">
              <div className="craftsmanship__card-icon">
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
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </g>
                </svg>
              </div>
              <h3 className="craftsmanship__card-title">Fresh Mozzarella</h3>
              <p className="section-content">
                {' '}
                We source a superior, low-moisture mozzarella that is carefully
                selected for its rich, clean flavour and exceptional melting
                characteristics. The result is a final texture that melts into a
                golden, cohesive blanket without compromising the crispness of
                our crust.
              </p>
            </div>
            <div className="craftsmanship__card">
              <div className="craftsmanship__card-icon">
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
              <h3 className="craftsmanship__card-title">
                Chef-Led, Non-Customizable
              </h3>
              <p className="section-content">
                {' '}
                We eliminate the complexity of customization to focus solely on
                perfecting six distinct, chef-driven pizzas. Every ingredient
                combination is intentionally balanced and tested to deliver an
                uncompromising gourmet experience.
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
      <section className="pizza-gallery">
        <div className="pizza-gallery__wrapper">
          <div className="pizza-gallery__header">
            <h2 className="section-title">Our Six Signature Pizzas</h2>
            <p className="section-subtitle">
              {' '}
              Detailed profiles with signature garnishes and finishing touches
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="pizza-gallery__carousel">
            <div className="gourmet-pizza-menu-thq-pizza-gallerycarousel-track-elm pizza-gallery__carousel-track">
              <div className="gourmet-pizza-menu-thq-pizza-gallerycarousel-item-elm1 pizza-gallery__carousel-item pizza-gallery__carousel-item--active">
                <div className="gourmet-pizza-menu-thq-pizza-galleryitem-bg-elm1 pizza-gallery__item-bg"></div>
                <div className="pizza-gallery__item-overlay"></div>
                <div className="pizza-gallery__item-content">
                  <div className="pizza-gallery__item-number">
                    <span>01</span>
                  </div>
                  <h3 className="pizza-gallery__item-title">
                    Funghi e Cipolla
                  </h3>
                  <p className="pizza-gallery__item-subtitle">
                    Mushroom and Onion
                  </p>
                  <div className="gourmet-pizza-menu-thq-pizza-galleryitem-details-elm1 pizza-gallery__item-details">
                    <div className="gourmet-pizza-menu-thq-pizza-gallerydetail-section-elm10 pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Foundation
                      </h4>
                      <p className="section-content">
                        {' '}
                        San Marzano tomato sauce, low-moisture mozzarella,
                        sautéed cremini mushrooms (moisture evaporated for
                        concentrated umami), thinly sliced red onion (lightly
                        sautéed), freshly grated Parmigiano Reggiano
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="gourmet-pizza-menu-thq-pizza-gallerydetail-section-elm11 pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Signature Garnish
                      </h4>
                      <p className="section-content">
                        {' '}
                        Radish Microgreens &amp; Fresh Basil Leaves to cut
                        through the savory richness
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="gourmet-pizza-menu-thq-pizza-gallerydetail-section-elm12 pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">The Vibe</h4>
                      <p className="section-content">
                        {' '}
                        Spicy, sharp contrast to umami. Rich, earthy flavors
                        brilliantly balanced by complex, peppery garnish
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
              <div className="gourmet-pizza-menu-thq-pizza-gallerycarousel-item-elm2 pizza-gallery__carousel-item">
                <div className="gourmet-pizza-menu-thq-pizza-galleryitem-bg-elm2 pizza-gallery__item-bg"></div>
                <div className="pizza-gallery__item-overlay"></div>
                <div className="pizza-gallery__item-content">
                  <div className="pizza-gallery__item-number">
                    <span>02</span>
                  </div>
                  <h3 className="pizza-gallery__item-title">
                    Mediterranean Coast
                  </h3>
                  <p className="pizza-gallery__item-subtitle">
                    {' '}
                    Bright, Citrusy &amp; Vibrant
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="pizza-gallery__item-details">
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Foundation
                      </h4>
                      <p className="section-content">
                        {' '}
                        San Marzano tomato sauce, low-moisture mozzarella,
                        crumbled feta cheese, mixed black and green olives,
                        sliced Roma or cherry tomatoes, red pepper flakes
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Signature Garnish
                      </h4>
                      <p className="section-content">
                        {' '}
                        Micro Cilantro with bright, citrusy flavor that cuts the
                        saltiness of feta and olives
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">The Vibe</h4>
                      <p className="section-content">
                        {' '}
                        A vibrant, sunny pizza balancing tangy Mediterranean
                        flavors with fresh, herbaceous garnish
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
              <div className="gourmet-pizza-menu-thq-pizza-gallerycarousel-item-elm3 pizza-gallery__carousel-item">
                <div className="gourmet-pizza-menu-thq-pizza-galleryitem-bg-elm3 pizza-gallery__item-bg"></div>
                <div className="pizza-gallery__item-overlay"></div>
                <div className="pizza-gallery__item-content">
                  <div className="pizza-gallery__item-number">
                    <span>03</span>
                  </div>
                  <h3 className="pizza-gallery__item-title">
                    The Tuscan Gardener
                  </h3>
                  <p className="pizza-gallery__item-subtitle">
                    {' '}
                    Vegetable-Forward Excellence
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="pizza-gallery__item-details">
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Foundation
                      </h4>
                      <p className="section-content">
                        <span>
                          {' '}
                          San Marzano tomato sauce, low-moisture mozzarella,
                          roasted 
                        </span>
                        <span className="gourmet-pizza-menu-text31">
                          seasonal vegetables (broccoli, cauliflower, peppers
                          and Italian herbs), sautéed cremini mushrooms,
                          Parmigiano Reggiano
                        </span>
                        San Marzano tomato sauce, low-moisture mozzarella,
                        roasted seasonal vegetables (broccoli, cauliflower,
                        peppers at 400°F with olive oil and Italian herbs),
                        sautéed cremini mushrooms, Parmigiano Reggiano
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Signature Garnish
                      </h4>
                      <p className="section-content">
                        {' '}
                        Broccoli Microgreens with classic, slightly peppery
                        flavor that harmonizes with roasted vegetables
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">The Vibe</h4>
                      <p className="section-content">
                        {' '}
                        The ultimate vegetable-forward pizza balancing sweet
                        roasted vegetables with savory mushrooms
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
              <div className="gourmet-pizza-menu-thq-pizza-gallerycarousel-item-elm4 pizza-gallery__carousel-item">
                <div className="gourmet-pizza-menu-thq-pizza-galleryitem-bg-elm4 pizza-gallery__item-bg"></div>
                <div className="pizza-gallery__item-overlay"></div>
                <div className="pizza-gallery__item-content">
                  <div className="pizza-gallery__item-number">
                    <span>04</span>
                  </div>
                  <h3 className="pizza-gallery__item-title">Verde Fresco</h3>
                  <p className="pizza-gallery__item-subtitle">
                    Fresh Green White Pizza
                  </p>
                  <div className="pizza-gallery__item-details">
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Foundation
                      </h4>
                      <p className="section-content">
                        <span>
                          {' '}
                          No tomato sauce. Olive oil infused with minced fresh
                          garlic, 
                        </span>
                        <span className="gourmet-pizza-menu-text34">
                          finely chopped fresh parsley, touch of fresh lemon
                          juice, fresh mozzarella, Parmigiano Reggiano
                        </span>
                        No tomato sauce. Olive oil infused with minced fresh
                        garlic, finely chopped fresh parsley, touch of fresh
                        lemon juice, 6 oz Fior di Latte fresh mozzarella,
                        Parmigiano Reggiano
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Signature Garnish
                      </h4>
                      <p className="section-content">
                        {' '}
                        Baby Arugula adding a lively, peppery note that
                        complements the herbaceous garlic oil
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">The Vibe</h4>
                      <p className="section-content">
                        {' '}
                        Bright, herbaceous, and refreshing. Pure flavors of
                        fresh garlic, herbs, and lemon
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
              <div className="gourmet-pizza-menu-thq-pizza-gallerycarousel-item-elm5 pizza-gallery__carousel-item">
                <div className="gourmet-pizza-menu-thq-pizza-galleryitem-bg-elm5 pizza-gallery__item-bg"></div>
                <div className="pizza-gallery__item-overlay"></div>
                <div className="pizza-gallery__item-content">
                  <div className="pizza-gallery__item-number">
                    <span>05</span>
                  </div>
                  <h3 className="pizza-gallery__item-title">
                    Pepperoni Rustico
                  </h3>
                  <p className="pizza-gallery__item-subtitle">
                    Spicy, Rich &amp; Bold
                  </p>
                  <div className="pizza-gallery__item-details">
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Foundation
                      </h4>
                      <p className="section-content">
                        {' '}
                        San Marzano tomato sauce, low-moisture mozzarella,
                        high-quality thinly sliced pepperoni, dry-sautéed
                        mushrooms, roasted peppers, hot honey or chili oil
                        drizzle
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Signature Garnish
                      </h4>
                      <p className="section-content">
                        {' '}
                        Radish Microgreens delivering a sharp, horseradish-like
                        kick to cut through richness
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">The Vibe</h4>
                      <p className="section-content">
                        {' '}
                        A hearty pizza defined by salty pepperoni, balanced by
                        heat and a sharp, refreshing garnish
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
              <div className="gourmet-pizza-menu-thq-pizza-gallerycarousel-item-elm6 pizza-gallery__carousel-item">
                <div className="gourmet-pizza-menu-thq-pizza-galleryitem-bg-elm6 pizza-gallery__item-bg"></div>
                <div className="pizza-gallery__item-overlay"></div>
                <div className="pizza-gallery__item-content">
                  <div className="pizza-gallery__item-number">
                    <span>06</span>
                  </div>
                  <h3 className="pizza-gallery__item-title">Pizza Tricolore</h3>
                  <p className="pizza-gallery__item-subtitle">
                    {' '}
                    The Perfect Italian Classic
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="pizza-gallery__item-details">
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Foundation
                      </h4>
                      <p className="section-content">
                        <span>
                          {' '}
                          Lightly seasoned San Marzano tomato sauce, fresh 
                        </span>
                        <span className="gourmet-pizza-menu-text38">
                          mozzarella, light drizzle of
                        </span>
                        <br></br>
                        <span>
                          {' '}
                          extra virgin olive oil
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        Lightly seasoned San Marzano tomato sauce, Fior di Latte
                        fresh mozzarella (sliced thin and patted dry), light
                        drizzle of extra virgin olive oil
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">
                        Signature Garnish
                      </h4>
                      <p className="section-content">
                        {' '}
                        Fresh Basil Leaves scattered whole or gently torn for
                        aromatic freshness
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="pizza-gallery__detail-section">
                      <h4 className="pizza-gallery__detail-label">The Vibe</h4>
                      <p className="section-content">
                        {' '}
                        A simple masterpiece celebrating the purity of
                        high-quality ingredients and the Italian flag&apos;s
                        three colors
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
        </div>
      </section>
      <div>
        <section className="wine-pairing">
          <div className="wine-pairing__wrapper">
            <div className="wine-pairing__header">
              <h2 className="section-title">Curated Wine Pairings</h2>
              <p className="section-subtitle">
                {' '}
                Elevate your gourmet experience with perfectly matched wines
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="wine-pairing__carousel">
              <div className="gourmet-pizza-menu-wine-pairing__carousel-track1">
                <div className="wine-pairing__card">
                  <div className="wine-pairing__card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  <h3 className="wine-pairing__card-title">Funghi e Cipolla</h3>
                  <p className="wine-pairing__card-pizza">Mushroom and Onion</p>
                  <div className="wine-pairing__divider"></div>
                  <p className="section-content">
                    {' '}
                    Pairs beautifully with the subtle, earthy complexity of a
                    Pinot Noir or the savory, herbaceous notes of a Cabernet
                    Franc. Both enhance the umami richness.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="wine-pairing__card">
                  <div className="wine-pairing__card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  <h3 className="wine-pairing__card-title">
                    Mediterranean Coast
                  </h3>
                  <p className="wine-pairing__card-pizza">Feta &amp; Olives</p>
                  <div className="wine-pairing__divider"></div>
                  <p className="section-content">
                    {' '}
                    Complements the crisp, fruity acidity of a Pinot Grigio or a
                    bright, herbal Sauvignon Blanc for a refreshing palate
                    cleanse with Mediterranean vibrancy.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="wine-pairing__card">
                  <div className="wine-pairing__card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  <h3 className="wine-pairing__card-title">
                    The Tuscan Gardener
                  </h3>
                  <p className="wine-pairing__card-pizza">Roasted Vegetables</p>
                  <div className="wine-pairing__divider"></div>
                  <p className="section-content">
                    {' '}
                    Pairs beautifully with the bright acidity and herbaceous
                    notes of a Sauvignon Blanc or a lighter, earthy Pinot Noir
                    that won&amp;apos;t overpower the vegetables.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="wine-pairing__card">
                  <div className="wine-pairing__card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  <h3 className="wine-pairing__card-title">Verde Fresco</h3>
                  <p className="wine-pairing__card-pizza">
                    White Pizza with Garlic
                  </p>
                  <div className="wine-pairing__divider"></div>
                  <p className="section-content">
                    {' '}
                    Pairs well with a crisp, unoaked Chardonnay that complements
                    the creamy mozzarella. A light-bodied Pinot Noir also
                    balances the garlic and oil perfectly.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="wine-pairing__card">
                  <div className="wine-pairing__card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  <h3 className="wine-pairing__card-title">
                    Pepperoni Rustico
                  </h3>
                  <p className="wine-pairing__card-pizza">Spicy &amp; Bold</p>
                  <div className="wine-pairing__divider"></div>
                  <p className="section-content">
                    {' '}
                    Pairs perfectly with Barbera, the quintessential pizza wine
                    with high acidity. A rich, fruity Zinfandel also holds up to
                    the bold, spicy flavors beautifully.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="wine-pairing__card">
                  <div className="wine-pairing__card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  <h3 className="wine-pairing__card-title">Pizza Tricolore</h3>
                  <p className="wine-pairing__card-pizza">Classic Italian</p>
                  <div className="wine-pairing__divider"></div>
                  <p className="section-content">
                    {' '}
                    The high acidity of Chianti Classico (Sangiovese) perfectly
                    matches the San Marzano tomatoes. A crisp Pinot Grigio is a
                    light alternative for delicate flavors.
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
      </div>
      <div className="gourmet-pizza-menu-container3">
        <div className="gourmet-pizza-menu-container4">
          <Script
            html={`<script defer data-name="wine-pairing-carousel">
(function(){
  ;(function () {
    const track = document.getElementById("wineCarouselTrack")
    const prevBtn = document.getElementById("wineCarouselPrev")
    const nextBtn = document.getElementById("wineCarouselNext")

    if (!track) {
      const fallbackTrack = document.querySelector(
        ".wine-pairing__carousel-track"
      )
      if (fallbackTrack) {
        fallbackTrack.id = "wineCarouselTrack"
      }
    }

    const carouselTrack =
      document.getElementById("wineCarouselTrack") ||
      document.querySelector(".wine-pairing__carousel-track")
    const prevButton =
      prevBtn || document.querySelector(".wine-pairing__carousel-btn--prev")
    const nextButton =
      nextBtn || document.querySelector(".wine-pairing__carousel-btn--next")

    if (!carouselTrack || !prevButton || !nextButton) return

    const scrollAmount = 370

    function updateButtonStates() {
      const scrollLeft = carouselTrack.scrollLeft
      const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth

      prevButton.style.opacity = scrollLeft <= 0 ? "0.3" : "1"
      prevButton.style.cursor = scrollLeft <= 0 ? "default" : "pointer"

      nextButton.style.opacity = scrollLeft >= maxScroll - 1 ? "0.3" : "1"
      nextButton.style.cursor =
        scrollLeft >= maxScroll - 1 ? "default" : "pointer"
    }

    prevButton.addEventListener("click", function () {
      carouselTrack.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    })

    nextButton.addEventListener("click", function () {
      carouselTrack.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })

    carouselTrack.addEventListener("scroll", updateButtonStates)

    updateButtonStates()
  })()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section className="cta-order">
        <div className="cta-order__wrapper">
          <div className="cta-order__card">
            <div className="cta-order__card-content">
              <div className="cta-order__icon">
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
                    <path d="m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"></path>
                    <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path>
                  </g>
                </svg>
              </div>
              <h2 className="section-title">Order Gourmet Pizza Now</h2>
              <p className="section-subtitle">
                {' '}
                Experience chef-perfected artisan pizza with microgreen finishes
                delivered straight to your door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-order__buttons">
                <button className="btn-primary btn btn-xl">
                  Order on Uber Eats
                </button>
                <button className="btn-secondary btn btn-xl">
                  Order on DoorDash
                </button>
              </div>
            </div>
            <div className="cta-order__decorative"></div>
          </div>
        </div>
      </section>
      <div className="gourmet-pizza-menu-container5">
        <div className="gourmet-pizza-menu-container6">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-carousel__bg-layer, .pizza-gallery__item-bg, .hero-carousel__slide, .pizza-gallery__carousel-item {
  transition: none;
}
.hero-carousel__slide--active .hero-carousel__bg-layer, .pizza-gallery__carousel-item--active .pizza-gallery__item-bg {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="gourmet-pizza-menu-container7">
        <div className="gourmet-pizza-menu-container8">
          <Script
            html={`<script defer data-name="carousel-controls">
(function(){
  const heroCarousel = document.querySelector(".hero-carousel")
  const heroSlides = heroCarousel.querySelectorAll(".hero-carousel__slide")
  const heroIndicators = heroCarousel.querySelectorAll(
    ".hero-carousel__indicator"
  )
  const heroPrevBtn = heroCarousel.querySelector(".hero-carousel__nav--prev")
  const heroNextBtn = heroCarousel.querySelector(".hero-carousel__nav--next")
  let heroCurrentIndex = 0

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle("hero-carousel__slide--active", i === index)
    })
    heroIndicators.forEach((indicator, i) => {
      indicator.classList.toggle(
        "hero-carousel__indicator--active",
        i === index
      )
    })
  }

  function nextHeroSlide() {
    heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length
    showHeroSlide(heroCurrentIndex)
  }

  function prevHeroSlide() {
    heroCurrentIndex =
      (heroCurrentIndex - 1 + heroSlides.length) % heroSlides.length
    showHeroSlide(heroCurrentIndex)
  }

  heroNextBtn.addEventListener("click", nextHeroSlide)
  heroPrevBtn.addEventListener("click", prevHeroSlide)

  heroIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      heroCurrentIndex = index
      showHeroSlide(heroCurrentIndex)
    })
  })

  setInterval(nextHeroSlide, 6000)

  const packagingCarousel = document.querySelector(
    ".packaging-delivery__carousel"
  )
  const packagingItems = packagingCarousel.querySelectorAll(
    ".packaging-delivery__carousel-item"
  )
  const packagingPrevBtn = packagingCarousel.querySelector(
    ".packaging-delivery__carousel-btn--prev"
  )
  const packagingNextBtn = packagingCarousel.querySelector(
    ".packaging-delivery__carousel-btn--next"
  )
  let packagingCurrentIndex = 0

  function showPackagingItem(index) {
    packagingItems.forEach((item, i) => {
      item.classList.toggle(
        "packaging-delivery__carousel-item--active",
        i === index
      )
    })
  }

  function nextPackagingItem() {
    packagingCurrentIndex = (packagingCurrentIndex + 1) % packagingItems.length
    showPackagingItem(packagingCurrentIndex)
  }

  function prevPackagingItem() {
    packagingCurrentIndex =
      (packagingCurrentIndex - 1 + packagingItems.length) %
      packagingItems.length
    showPackagingItem(packagingCurrentIndex)
  }

  packagingNextBtn.addEventListener("click", nextPackagingItem)
  packagingPrevBtn.addEventListener("click", prevPackagingItem)

  const pizzaGallery = document.querySelector(".pizza-gallery")
  const pizzaSlides = pizzaGallery.querySelectorAll(
    ".pizza-gallery__carousel-item"
  )
  const pizzaIndicators = pizzaGallery.querySelectorAll(
    ".pizza-gallery__indicator"
  )
  const pizzaPrevBtn = pizzaGallery.querySelector(".pizza-gallery__nav--prev")
  const pizzaNextBtn = pizzaGallery.querySelector(".pizza-gallery__nav--next")
  let pizzaCurrentIndex = 0

  function showPizzaSlide(index) {
    pizzaSlides.forEach((slide, i) => {
      slide.classList.toggle(
        "pizza-gallery__carousel-item--active",
        i === index
      )
    })
    pizzaIndicators.forEach((indicator, i) => {
      indicator.classList.toggle(
        "pizza-gallery__indicator--active",
        i === index
      )
    })
  }

  function nextPizzaSlide() {
    pizzaCurrentIndex = (pizzaCurrentIndex + 1) % pizzaSlides.length
    showPizzaSlide(pizzaCurrentIndex)
  }

  function prevPizzaSlide() {
    pizzaCurrentIndex =
      (pizzaCurrentIndex - 1 + pizzaSlides.length) % pizzaSlides.length
    showPizzaSlide(pizzaCurrentIndex)
  }

  pizzaNextBtn.addEventListener("click", nextPizzaSlide)
  pizzaPrevBtn.addEventListener("click", prevPizzaSlide)

  pizzaIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      pizzaCurrentIndex = index
      showPizzaSlide(pizzaCurrentIndex)
    })
  })

  const wineCarousel = document.querySelector(".wine-pairing__carousel-track")
  const winePrevBtn = document.querySelector(
    ".wine-pairing__carousel-btn--prev"
  )
  const wineNextBtn = document.querySelector(
    ".wine-pairing__carousel-btn--next"
  )

  function scrollWineCarousel(direction) {
    const scrollAmount = 370
    wineCarousel.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    })
  }

  wineNextBtn.addEventListener("click", () => scrollWineCarousel("next"))
  winePrevBtn.addEventListener("click", () => scrollWineCarousel("prev"))
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default GourmetPizzaMenu
