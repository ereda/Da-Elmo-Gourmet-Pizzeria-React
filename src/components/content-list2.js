import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list2.css'

const ContentList2 = (props) => {
  return (
    <div className="content-list2-container thq-section-padding">
      <div className="content-list2-thq-max-width-elm thq-flex-column thq-section-max-width">
        <div className="content-list2-thq-content-elm thq-flex-column">
          <ul>
            <li className="content-list2-li1 list-item thq-flex-column">
              <h2 className="content-list2-thq-heading1-elm thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list2-text14">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </h2>
              <ul className="content-list2-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list2-text13">Our Menu</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list2-text28">
                          <span>
                            By using this website, you agree to follow our
                            rules. If you don&apos;t like the rules, you should
                            not use the site.
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list2-text25">
                          <span>The Pizza Pictures</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="content-list2-text10">
                          <span>
                            We try to make our pizza look amazing in photos!
                            However, because every pizza is handmade, the pizza
                            you receive might look a little different than the
                            one in the picture. The photos are for illustration
                            purposes only.
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="content-list2-text15">
                          <span>Changes to the Site</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="content-list2-text18">
                          <span>
                            We do not deliver the pizza ourselves. All orders
                            are handled by Uber Eats and DoorDash.
                          </span>
                          <br></br>
                          <span>
                            ​If your pizza is late or there is a problem with
                            the delivery, you must contact the delivery app you
                            used.
                          </span>
                          <br></br>
                          <span>
                            ​Prices on the delivery apps might be different than
                            the prices listed on our website.
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList2.defaultProps = {
  content3: undefined,
  heading2: undefined,
  heading1: undefined,
  heading5: undefined,
  content5: undefined,
  heading3: undefined,
  content2: undefined,
}

ContentList2.propTypes = {
  content3: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  heading5: PropTypes.element,
  content5: PropTypes.element,
  heading3: PropTypes.element,
  content2: PropTypes.element,
}

export default ContentList2
