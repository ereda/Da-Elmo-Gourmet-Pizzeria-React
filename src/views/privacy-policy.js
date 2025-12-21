import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container1">
      <Helmet>
        <title>Privacy-Policy - Da Elmo Gourmet Pizzeria</title>
        <meta
          property="og:title"
          content="Privacy-Policy - Da Elmo Gourmet Pizzeria"
        />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/privacy-policy"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="privacy-policy-container2">
        <div className="privacy-policy-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.services-section__card, .gallery-section__item, .contact-section__column, .testimonials-section__accordion-item, .services-section__card-image, .gallery-section__image {
  transition: none;
}
.testimonials-section__accordion-icon {
  transition: none;
}
.testimonials-section__accordion-content {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="privacy-policy-hero-section">
        <video
          src="https://videos.pexels.com/video-files/6091108/6091108-hd_1080_2048_30fps.mp4"
          loop="true"
          muted="true"
          autoPlay="true"
          playsInline="true"
          className="hero-section__background-video"
        ></video>
        <div className="hero-section__overlay"></div>
        <div className="hero-section__content">
          <div className="hero-section__text-wrapper">
            <h1 className="hero-title hero-section__title">Privacy Policy</h1>
            <p className="hero-section__subtitle hero-subtitle">
              Your trust is the foundation of our gourmet experience. We protect
              your data with the same care we craft our pizzas.
            </p>
            <div className="hero-section__meta">
              <div className="hero-section__meta-item">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
                <span>Secure &amp; Encrypted</span>
              </div>
              <div className="hero-section__meta-item">
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
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-section__container">
          <div className="about-section__header">
            <h2 className="section-title">Our Commitment to Your Privacy</h2>
            <p className="section-subtitle">Transparency in Every Detail</p>
          </div>
          <div className="about-section__columns">
            <div className="about-section__column">
              <div className="about-section__icon-wrapper">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="about-section__column-title">Data Protection</h3>
              <p className="about-section__column-text section-content">
                We use industry-standard encryption to protect your personal
                information. Your data is stored securely and never shared with
                third parties without your explicit consent.
              </p>
            </div>
            <div className="about-section__column">
              <div className="about-section__icon-wrapper">
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
              </div>
              <h3 className="about-section__column-title">
                Minimal Collection
              </h3>
              <p className="about-section__column-text section-content">
                We only collect information necessary to deliver your gourmet
                pizza experience. No excessive tracking, no hidden data
                harvesting—just what&apos;s needed for your order.
              </p>
            </div>
            <div className="about-section__column">
              <div className="about-section__icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 5H3m13 7H3m8 7H3m12-1l2 2l4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="about-section__column-title">Your Rights</h3>
              <p className="about-section__column-text section-content">
                You have the right to access, modify, or delete your personal
                data at any time. We make it simple to exercise your privacy
                rights through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="services-section__wrapper">
          <div className="services-section__header">
            <h2 className="section-title">Information We Collect</h2>
            <p className="section-subtitle">Understanding What We Need</p>
          </div>
          <div className="services-section__grid">
            <div className="services-section__card">
              <div className="services-section__card-image-wrapper">
                <img
                  alt="Close-up of chef tossing pizza dough in a kitchen, showcasing expert culinary skills."
                  src="https://images.pexels.com/photos/784636/pexels-photo-784636.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-section__card-image"
                />
                <div className="services-section__card-overlay"></div>
              </div>
              <div className="services-section__card-content">
                <div className="services-section__card-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path>
                  </svg>
                </div>
                <h3 className="services-section__card-title">
                  Order Information
                </h3>
                <p className="section-content services-section__card-text">
                  Name, delivery address, phone number, and order preferences
                  necessary to deliver your chef-perfected pizzas directly to
                  your door.
                </p>
              </div>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-image-wrapper">
                <img
                  alt="Close-up of hands shaping pizza dough, capturing the art of cooking."
                  src="https://images.pexels.com/photos/5903441/pexels-photo-5903441.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-section__card-image"
                />
                <div className="services-section__card-overlay"></div>
              </div>
              <div className="services-section__card-content">
                <div className="services-section__card-icon">
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
                      <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                      <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="services-section__card-title">
                  Delivery Platform Data
                </h3>
                <p className="section-content services-section__card-text">
                  Information shared through Uber Eats and DoorDash, including
                  delivery tracking and order history to enhance your
                  experience.
                </p>
              </div>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-image-wrapper">
                <img
                  alt="Unrecognizable person preparing dough while standing at table with eggs covered with flour in kitchen during cooking process at home"
                  src="https://images.pexels.com/photos/6287264/pexels-photo-6287264.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-section__card-image"
                />
                <div className="services-section__card-overlay"></div>
              </div>
              <div className="services-section__card-content">
                <div className="services-section__card-icon">
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
                </div>
                <h3 className="services-section__card-title">
                  Payment Details
                </h3>
                <p className="section-content services-section__card-text">
                  Securely processed through trusted payment gateways. We never
                  store your complete credit card information on our servers.
                </p>
              </div>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-image-wrapper">
                <img
                  alt="Professional chef spreading tomato sauce on dough in a commercial kitchen."
                  src="https://images.pexels.com/photos/8629123/pexels-photo-8629123.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-section__card-image"
                />
                <div className="services-section__card-overlay"></div>
              </div>
              <div className="services-section__card-content">
                <div className="services-section__card-icon">
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
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="services-section__card-title">
                  Communication Preferences
                </h3>
                <p className="section-content services-section__card-text">
                  Email address for order confirmations, delivery updates, and
                  promotional offers about our curated menu. You can opt out
                  anytime.
                </p>
              </div>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-image-wrapper">
                <img
                  alt="A close-up of a man rolling pizza dough on a countertop using a wooden roller."
                  src="https://images.pexels.com/photos/17637076/pexels-photo-17637076.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-section__card-image"
                />
                <div className="services-section__card-overlay"></div>
              </div>
              <div className="services-section__card-content">
                <div className="services-section__card-icon">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="services-section__card-title">
                  Device Information
                </h3>
                <p className="section-content services-section__card-text">
                  Basic technical data like browser type, IP address, and device
                  information to optimize website performance and security.
                </p>
              </div>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-image-wrapper">
                <img
                  alt="A chef wearing a face mask intricately prepares pizza dough in a professional kitchen."
                  src="https://images.pexels.com/photos/5953544/pexels-photo-5953544.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-section__card-image"
                />
                <div className="services-section__card-overlay"></div>
              </div>
              <div className="services-section__card-content">
                <div className="services-section__card-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 5H3m13 7H3m8 7H3m12-1l2 2l4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="services-section__card-title">
                  Feedback &amp; Reviews
                </h3>
                <p className="section-content services-section__card-text">
                  Your comments, ratings, and testimonials help us refine our
                  gourmet offerings and maintain our commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy-policy-gallery-section">
        <div className="gallery-section__wrapper">
          <div className="gallery-section__header">
            <h2 className="section-title">How We Use Your Information</h2>
            <p className="section-subtitle">
              Every Data Point Serves Your Experience
            </p>
          </div>
          <div className="gallery-section__grid">
            <div className="gallery-section__item">
              <div className="gallery-section__image-wrapper">
                <img
                  alt="Four bowls of fresh microgreens on a white background, showcasing healthy eating."
                  src="https://images.pexels.com/photos/2694050/pexels-photo-2694050.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-section__image"
                />
              </div>
              <div className="gallery-section__content">
                <div className="gallery-section__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path>
                  </svg>
                </div>
                <h3 className="gallery-section__title">Order Fulfillment</h3>
                <p className="gallery-section__text section-content">
                  Processing and delivering your perfectly crafted pizzas with
                  GMO-free microgreen garnishes.
                </p>
              </div>
            </div>
            <div className="gallery-section__item">
              <div className="gallery-section__image-wrapper">
                <img
                  alt="A fresh and colorful mixed green salad garnished with microgreens and dressing."
                  src="https://images.pexels.com/photos/1332275/pexels-photo-1332275.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-section__image"
                />
              </div>
              <div className="gallery-section__content">
                <div className="gallery-section__icon">
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
                <h3 className="gallery-section__title">
                  Delivery Coordination
                </h3>
                <p className="gallery-section__text section-content">
                  Working seamlessly with Uber Eats and DoorDash to track and
                  optimize your delivery experience.
                </p>
              </div>
            </div>
            <div className="gallery-section__item">
              <div className="gallery-section__image-wrapper">
                <img
                  alt="A vibrant selection of fresh herbs and greens neatly arranged on a wooden tabletop."
                  src="https://images.pexels.com/photos/4397249/pexels-photo-4397249.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-section__image"
                />
              </div>
              <div className="gallery-section__content">
                <div className="gallery-section__icon">
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
                </div>
                <h3 className="gallery-section__title">Quality Improvement</h3>
                <p className="gallery-section__text section-content">
                  Analyzing feedback to continuously enhance our chef-driven
                  menu and ingredient quality.
                </p>
              </div>
            </div>
            <div className="gallery-section__item">
              <div className="gallery-section__image-wrapper">
                <img
                  alt="Two bowls of vibrant tomato soup garnished with fresh microgreens on a wooden table."
                  src="https://images.pexels.com/photos/262947/pexels-photo-262947.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-section__image"
                />
              </div>
              <div className="gallery-section__content">
                <div className="gallery-section__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
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
                </div>
                <h3 className="gallery-section__title">Communication</h3>
                <p className="gallery-section__text section-content">
                  Sending essential order updates, delivery notifications, and
                  exclusive offers on our curated menu.
                </p>
              </div>
            </div>
            <div className="gallery-section__item">
              <div className="gallery-section__image-wrapper">
                <img
                  alt="Detailed close-up of a human hand holding small delicate green leaves outdoors."
                  src="https://images.pexels.com/photos/19919359/pexels-photo-19919359.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-section__image"
                />
              </div>
              <div className="gallery-section__content">
                <div className="gallery-section__icon">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="gallery-section__title">
                  Security &amp; Fraud Prevention
                </h3>
                <p className="gallery-section__text section-content">
                  Protecting your account and transactions from unauthorized
                  access and fraudulent activity.
                </p>
              </div>
            </div>
            <div className="gallery-section__item">
              <div className="gallery-section__image-wrapper">
                <img
                  alt="Colorful salmon dish with fresh vegetables on a blue plate, perfect for gourmet cuisine lovers."
                  src="https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-section__image"
                />
              </div>
              <div className="gallery-section__content">
                <div className="gallery-section__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 5H3m13 7H3m8 7H3m12-1l2 2l4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="gallery-section__title">Legal Compliance</h3>
                <p className="gallery-section__text section-content">
                  Meeting regulatory requirements and responding to legal
                  requests when necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-section__container">
          <div className="contact-section__header">
            <h2 className="section-title">Data Sharing &amp; Protection</h2>
            <p className="section-subtitle">Transparency You Can Trust</p>
          </div>
          <div className="contact-section__columns">
            <div className="contact-section__column">
              <div className="contact-section__icon-circle">
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
              <h3 className="contact-section__column-title">
                Delivery Partners
              </h3>
              <p className="contact-section__column-text section-content">
                We share essential order and delivery information with Uber Eats
                and DoorDash to fulfill your orders. These partners are bound by
                strict confidentiality agreements and data protection standards.
              </p>
              <div className="contact-section__badge">
                <span>Trusted Partners</span>
              </div>
            </div>
            <div className="contact-section__column">
              <div className="contact-section__icon-circle">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              </div>
              <h3 className="contact-section__column-title">
                Payment Processors
              </h3>
              <p className="contact-section__column-text section-content">
                Payment information is processed through secure, PCI-compliant
                payment gateways. We never store complete credit card details on
                our servers, ensuring maximum financial security.
              </p>
              <div className="contact-section__badge">
                <span>Bank-Level Encryption</span>
              </div>
            </div>
            <div className="contact-section__column">
              <div className="contact-section__icon-circle">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="contact-section__column-title">
                No Third-Party Sales
              </h3>
              <p className="contact-section__column-text section-content">
                We never sell, rent, or trade your personal information to third
                parties for marketing purposes. Your data is used exclusively to
                enhance your Microcrust Pizza experience.
              </p>
              <div className="contact-section__badge">
                <span>Your Data, Your Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-section__container">
          <div className="testimonials-section__header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Privacy Questions Answered</p>
          </div>
          <div className="testimonials-section__accordion">
            <details className="testimonials-section__accordion-item">
              <summary className="testimonials-section__accordion-summary">
                <span className="testimonials-section__accordion-title">
                  What personal information do you collect when I place an
                  order?
                </span>
                <span className="testimonials-section__accordion-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m7-7l-7 7l-7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="testimonials-section__accordion-content">
                <p className="section-content">
                  We collect your name, delivery address, phone number, email
                  address, and payment information. This data is essential for
                  processing your order, coordinating delivery through Uber Eats
                  or DoorDash, and sending you order confirmations and updates.
                  We also collect your order history to provide personalized
                  recommendations from our curated six-pizza menu.
                </p>
              </div>
            </details>
            <details className="testimonials-section__accordion-item">
              <summary className="testimonials-section__accordion-summary">
                <span className="testimonials-section__accordion-title">
                  How is my payment information protected?
                </span>
                <span className="testimonials-section__accordion-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m7-7l-7 7l-7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="testimonials-section__accordion-content">
                <p className="section-content">
                  All payment transactions are processed through PCI-compliant
                  payment gateways using industry-standard SSL encryption. We do
                  not store complete credit card information on our servers.
                  Instead, we use tokenization methods where only a secure
                  reference token is saved, ensuring your financial data remains
                  protected at all times.
                </p>
              </div>
            </details>
            <details className="testimonials-section__accordion-item">
              <summary className="testimonials-section__accordion-summary">
                <span className="testimonials-section__accordion-title">
                  Do you share my information with Uber Eats and DoorDash?
                </span>
                <span className="testimonials-section__accordion-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m7-7l-7 7l-7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="testimonials-section__accordion-content">
                <p className="section-content">
                  Yes, we share necessary information with our delivery partners
                  to fulfill your order. This includes your name, delivery
                  address, phone number, and order details. These platforms have
                  their own privacy policies and data protection measures in
                  place. We only share what&apos;s required for successful
                  delivery of your gourmet pizza.
                </p>
              </div>
            </details>
            <details className="testimonials-section__accordion-item">
              <summary className="testimonials-section__accordion-summary">
                <span className="testimonials-section__accordion-title">
                  Can I access, modify, or delete my personal data?
                </span>
                <span className="testimonials-section__accordion-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m7-7l-7 7l-7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="testimonials-section__accordion-content">
                <p className="section-content">
                  Absolutely. You have the right to access, update, or delete
                  your personal information at any time. You can manage your
                  account settings through our platform, or contact our customer
                  support team for assistance. We will respond to your request
                  within 30 days. Please note that certain information may need
                  to be retained for legal compliance or legitimate business
                  purposes.
                </p>
              </div>
            </details>
            <details className="testimonials-section__accordion-item">
              <summary className="testimonials-section__accordion-summary">
                <span className="testimonials-section__accordion-title">
                  Do you use cookies or tracking technologies?
                </span>
                <span className="testimonials-section__accordion-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m7-7l-7 7l-7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="testimonials-section__accordion-content">
                <p className="section-content">
                  We use essential cookies to maintain your session and remember
                  your preferences. We also use analytics cookies to understand
                  how visitors interact with our website, helping us improve the
                  user experience. You can manage your cookie preferences
                  through your browser settings. We do not use invasive tracking
                  or sell cookie data to third parties.
                </p>
              </div>
            </details>
            <details className="testimonials-section__accordion-item">
              <summary className="testimonials-section__accordion-summary">
                <span className="testimonials-section__accordion-title">
                  How long do you retain my personal information?
                </span>
                <span className="testimonials-section__accordion-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m7-7l-7 7l-7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="testimonials-section__accordion-content">
                <p className="section-content">
                  We retain your personal information for as long as your
                  account is active or as needed to provide you with our
                  services. If you request deletion of your account, we will
                  remove your data within 90 days, except where retention is
                  required by law for tax, accounting, or other legal purposes.
                  Order history may be retained for up to 7 years for compliance
                  purposes.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-section__wrapper">
          <div className="cta-section__column cta-section__column--left">
            <div className="cta-section__content">
              <h2 className="section-title cta-section__title">
                Questions About Your Privacy?
              </h2>
              <p className="cta-section__text section-content">
                We&apos;re committed to transparency and protecting your
                personal information. If you have any concerns or questions
                about how we handle your data, our team is here to help.
              </p>
              <div className="cta-section__features">
                <div className="cta-section__feature">
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
                  <span>24-Hour Response Time</span>
                </div>
                <div className="cta-section__feature">
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
                  <span>GDPR Compliant</span>
                </div>
                <div className="cta-section__feature">
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
                  <span>Secure Data Handling</span>
                </div>
              </div>
              <a href="mailto:privacy@microcrustpizza.com?subject=">
                <div className="btn-primary cta-section__button btn">
                  <span>Contact Privacy Team</span>
                </div>
              </a>
            </div>
          </div>
          <div className="cta-section__column cta-section__column--right">
            <div className="cta-section__image-wrapper">
              <img
                alt="Gourmet artisan pizza with fresh ingredients"
                src="https://images.pexels.com/photos/35205505/pexels-photo-35205505.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="cta-section__image"
              />
              <div className="cta-section__image-overlay"></div>
              <div className="cta-section__image-badge">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
                <span>Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-section">
        <video
          src="https://videos.pexels.com/video-files/30627970/13111085_360_640_25fps.mp4"
          loop="true"
          muted="true"
          autoPlay="true"
          playsInline="true"
          className="video-section__background"
        ></video>
        <div className="video-section__overlay"></div>
        <div className="video-section__content">
          <div className="video-section__text-container">
            <h2 className="video-section__title section-title">
              Built on Trust &amp; Quality
            </h2>
            <p className="section-subtitle video-section__subtitle">
              Just as we carefully select every ingredient for our gourmet
              pizzas, we carefully protect every piece of your personal
              information.
            </p>
            <div className="video-section__stats">
              <div className="video-section__stat">
                <div className="video-section__stat-number">
                  <span>100%</span>
                </div>
                <div className="video-section__stat-label">
                  <span>Encrypted Transactions</span>
                </div>
              </div>
              <div className="video-section__stat">
                <div className="video-section__stat-number">
                  <span>Zero</span>
                </div>
                <div className="video-section__stat-label">
                  <span>Third-Party Data Sales</span>
                </div>
              </div>
              <div className="video-section__stat">
                <div className="video-section__stat-number">
                  <span>24/7</span>
                </div>
                <div className="video-section__stat-label">
                  <span>Security Monitoring</span>
                </div>
              </div>
            </div>
            <p className="video-section__note section-content">
              Last Updated: January 2025 | Effective Date: January 1, 2025
            </p>
          </div>
        </div>
      </section>
      <div className="privacy-policy-container4">
        <div className="privacy-policy-container5">
          <Script
            html={`<style>
        @keyframes slideDown {from {opacity: 0;
transform: translateY(-0.5rem);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="privacy-policy-container6">
        <div className="privacy-policy-container7">
          <Script
            html={`<script defer data-name="privacy-policy-interactions">

</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PrivacyPolicy
