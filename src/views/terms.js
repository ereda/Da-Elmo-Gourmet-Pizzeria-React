import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ContentList2 from '../components/content-list2'
import FAQ1 from '../components/faq1'
import Footer from '../components/footer'
import './terms.css'

const Terms = (props) => {
  return (
    <div className="terms-container">
      <Helmet>
        <title>Terms - Da Elmo Gourmet Pizzeria</title>
        <meta property="og:title" content="Terms - Da Elmo Gourmet Pizzeria" />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/terms"
        />
      </Helmet>
      <Navigation></Navigation>
      <ContentList2
        content2={
          <Fragment>
            <span className="terms-text10">
              <span>
                By using this website, you agree to follow our rules. If you
                don&apos;t like the rules, you should not use the site.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="terms-text13">
              <span>
                We try to make our pizza look amazing in photos! However,
                because every pizza is handmade, the pizza you receive might
                look a little different than the one in the picture. The photos
                are for illustration purposes only.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="terms-text16">
              <span>
                We do not deliver the pizza ourselves. All orders are handled by
                Uber Eats and DoorDash.
              </span>
              <br></br>
              <span>
                ​If your pizza is late or there is a problem with the delivery,
                you must contact the delivery app you used.
              </span>
              <br></br>
              <span>
                ​Prices on the delivery apps might be different than the prices
                listed on our website.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-text23">Terms of service</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="terms-text24">
              <span>Using Our Site</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="terms-text27">
              <span>The Pizza Pictures</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="terms-text30">
              <span>Ordering and Delivery</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></ContentList2>
      <FAQ1
        action1={
          <Fragment>
            <span className="terms-text33">Contact</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-text34">FAQs</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="terms-text35">Still have a question?</span>
          </Fragment>
        }
        faq1Answer={
          <Fragment>
            <span className="terms-text36">
              We use ingredients such as San Marzano tomatoes, avocado oil
              dough, and GMO-free microgreens to create our chef-curated gourmet
              pizzas. We believe that great pizza starts with wholesome, real
              food. Our kitchen uses premium ingredients you can actually
              recognize and pronounce—like flour, sea salt, and heart-healthy
              avocado oil. We never use unnatural additives or hidden chemicals.
              Every ingredient is chosen because we value your health as much as
              we value great flavour.
            </span>
          </Fragment>
        }
        faq2Answer={
          <Fragment>
            <span className="terms-text37">
              Yes, we provide wine pairing suggestions to enhance your dining
              experience with our gourmet pizzas.
            </span>
          </Fragment>
        }
        faq3Answer={
          <Fragment>
            <span className="terms-text38">
              You can place an order for delivery through Uber Eats or DoorDash
              for our delicious gourmet pizzas.
            </span>
          </Fragment>
        }
        faq4Answer={
          <Fragment>
            <span className="terms-text39">
              Yes, we focus on quality, sustainability, and freshness in
              selecting our ingredients to ensure the best pizza experience for
              our customers.
            </span>
          </Fragment>
        }
        faq5Answer={
          <Fragment>
            <span className="terms-text40">
              Currently, we do not offer customization options as our pizzas are
              chef-curated with premium ingredients and signature microgreen
              finishes.
            </span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="terms-text41">
              What type of ingredients do you use in your gourmet pizzas?
            </span>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <span className="terms-text42">
              Do you offer wine pairing suggestions with your pizzas?
            </span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="terms-text43">
              How can I place an order for delivery?
            </span>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <span className="terms-text44">
              Are your ingredients sustainable and fresh?
            </span>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <span className="terms-text45">
              Do you offer customization options for the pizzas?
            </span>
          </Fragment>
        }
      ></FAQ1>
      <Footer></Footer>
    </div>
  )
}

export default Terms
