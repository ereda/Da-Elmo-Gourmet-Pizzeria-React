import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact4.css'

const Contact4 = (props) => {
  return (
    <div className="contact4-thq-contact20-elm thq-section-padding">
      <div className="contact4-thq-max-width-elm thq-section-max-width">
        <div className="contact4-thq-section-title-elm">
          <div className="contact4-thq-content-elm1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact4-text1">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact4-text4">
                    For inquiries and feedback, please reach out to us using the
                    contact information provided.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact4-thq-row-elm">
          <div className="contact4-thq-content-elm2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact4-thq-contact-info-elm">
              <div className="contact4-thq-content-elm3">
                <h3 className="contact4-thq-text-elm3 thq-heading-3">Email</h3>
                <p className="contact4-thq-text-elm4 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact4-text2">
                        Follow us on social media for the latest updates and
                        promotions.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact4-thq-email-elm thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact4-text3">
                      hello@daelmogourmetpizzeria.ca
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact4.defaultProps = {
  heading1: undefined,
  content3: undefined,
  email1: undefined,
  content1: undefined,
}

Contact4.propTypes = {
  heading1: PropTypes.element,
  content3: PropTypes.element,
  email1: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact4
