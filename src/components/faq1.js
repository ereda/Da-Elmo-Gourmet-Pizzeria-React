import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-thq-faq7-elm thq-section-padding">
      <div className="faq1-thq-max-width-elm thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="faq1-text11">FAQs</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-flex-column faq1-thq-list-elm">
          <div className="faq1-thq-list-item1-elm">
            <p className="faq1-thq-faq1-question-elm thq-body-large">
              {props.faq1Question ?? (
                <Fragment>
                  <span className="faq1-text18">
                    What type of ingredients do you use in your gourmet pizzas?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq1Answer ?? (
                <Fragment>
                  <span className="faq1-text10">
                    We use premium ingredients such as San Marzano tomatoes,
                    avocado oil dough, and GMO-free microgreens to create our
                    chef-curated gourmet pizzas.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-thq-list-item2-elm">
            <p className="faq1-thq-faq2-question-elm thq-body-large">
              {props.faq2Question ?? (
                <Fragment>
                  <span className="faq1-text19">
                    Do you offer wine pairing suggestions with your pizzas?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq2Answer ?? (
                <Fragment>
                  <span className="faq1-text16">
                    Yes, we provide wine pairing suggestions to enhance your
                    dining experience with our gourmet pizzas.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-thq-list-item3-elm">
            <p className="faq1-thq-faq3-question-elm thq-body-large">
              {props.faq3Question ?? (
                <Fragment>
                  <span className="faq1-text12">
                    How can I place an order for delivery?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq3Answer ?? (
                <Fragment>
                  <span className="faq1-text22">
                    You can place an order for delivery through Uber Eats or
                    DoorDash for our delicious gourmet pizzas.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-thq-list-item4-elm">
            <p className="faq1-thq-faq4-question-elm thq-body-large">
              {props.faq4Question ?? (
                <Fragment>
                  <span className="faq1-text21">
                    Are your ingredients sustainable and fresh?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq4Answer ?? (
                <Fragment>
                  <span className="faq1-text13">
                    Yes, we focus on quality, sustainability, and freshness in
                    selecting our ingredients to ensure the best pizza
                    experience for our customers.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-thq-list-item5-elm">
            <p className="faq1-thq-faq5-question-elm thq-body-large">
              {props.faq5Question ?? (
                <Fragment>
                  <span className="faq1-text17">
                    Do you offer customization options for the pizzas?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq5Answer ?? (
                <Fragment>
                  <span className="faq1-text15">
                    Currently, we do not offer customization options as our
                    pizzas are chef-curated with premium ingredients and
                    signature microgreen finishes.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-thq-content-elm2">
            <h2 className="thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq1-text20">Still have a question?</span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="faq1-container">
            <a
              href="mailto:hello@daelmogourmetpizzeria.ca?subject="
              className="faq1-thq-button-elm thq-button-outline"
            >
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="faq1-text14">Contact</span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq1Answer: undefined,
  heading1: undefined,
  faq3Question: undefined,
  faq4Answer: undefined,
  action1: undefined,
  faq5Answer: undefined,
  faq2Answer: undefined,
  faq5Question: undefined,
  faq1Question: undefined,
  faq2Question: undefined,
  heading2: undefined,
  faq4Question: undefined,
  faq3Answer: undefined,
}

FAQ1.propTypes = {
  faq1Answer: PropTypes.element,
  heading1: PropTypes.element,
  faq3Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  action1: PropTypes.element,
  faq5Answer: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq5Question: PropTypes.element,
  faq1Question: PropTypes.element,
  faq2Question: PropTypes.element,
  heading2: PropTypes.element,
  faq4Question: PropTypes.element,
  faq3Answer: PropTypes.element,
}

export default FAQ1
