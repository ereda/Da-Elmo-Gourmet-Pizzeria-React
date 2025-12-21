import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta2.css'

const CTA2 = (props) => {
  return (
    <div className="cta2-container1 thq-section-padding">
      <div className="cta2-thq-max-width-elm thq-section-max-width">
        <div className="cta2-thq-content-elm">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta2-text4">
                  Indulge in Gourmet Pizzas Today
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta2-text6">
                  Explore our chef-curated gourmet pizzas made with quality
                  ingredients and finished with signature microgreens.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta2-thq-container-elm">
            <div className="cta2-thq-row-elm thq-flex-column">
              <div className="cta2-container2">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="thq-input"
                />
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta2-text3">Order Now</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta2-text5">
                    Pair your pizza with a selection of fine wines for the
                    ultimate dining experience.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA2.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content2: undefined,
  content1: undefined,
}

CTA2.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA2
