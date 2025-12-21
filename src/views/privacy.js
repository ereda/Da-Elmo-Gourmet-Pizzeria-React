import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ContentList2 from '../components/content-list2'
import Footer from '../components/footer'
import './privacy.css'

const Privacy = (props) => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy - Da Elmo Gourmet Pizzeria</title>
        <meta
          property="og:title"
          content="Privacy - Da Elmo Gourmet Pizzeria"
        />
        <link
          rel="canonical"
          href="https://lovely-oval-pig-qbf8l5.teleporthq.app/privacy"
        />
      </Helmet>
      <Navigation></Navigation>
      <ContentList2
        content2={
          <Fragment>
            <span className="privacy-text10">
              <span>
                When you visit our website, we don&apos;t ask for your name,
                address, or credit card. We just want to show you pictures of
                delicious pizza!
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="privacy-text13">
              <span>
                Our website uses small digital crumbs called &quot;cookies&quot;
                to help the site load faster and work correctly on your phone or
                computer.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="privacy-text16">
              <span>
                When you click a button to buy a pizza, you leave our website
                and go to Uber Eats or DoorDash. We do not see the information
                you give them (like your home address or bank card). They have
                their own rules, so make sure you check their privacy pages too!
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="privacy-text19">Privacy Policy</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="privacy-text20">
              <span>What Information Do We Get?</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="privacy-text23">
              <span>Cookies (Digital Crumbs)</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="privacy-text26">
              <span>Other Websites (Uber Eats &amp; DoorDash)</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></ContentList2>
      <Footer></Footer>
    </div>
  )
}

export default Privacy
