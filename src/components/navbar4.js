import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className="navbar4-container">
      <header
        data-thq="thq-navbar"
        className="navbar4-thq-navbar-interactive-elm"
      >
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar4-thq-image1-elm"
        />
        <div data-thq="thq-navbar-nav" className="navbar4-thq-desktop-menu-elm">
          <nav className="navbar4-thq-links-elm1">
            <a href={props.link1Url} className="thq-body-small thq-link">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar4-text7">Link1</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url} className="thq-body-small thq-link">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar4-text3">Link2</span>
                </Fragment>
              )}
            </a>
            <a href={props.link3Url} className="thq-body-small thq-link">
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar4-text6">Link3</span>
                </Fragment>
              )}
            </a>
            <a href={props.link4Url} className="thq-body-small thq-link">
              {props.link4 ?? (
                <Fragment>
                  <span className="navbar4-text9">Link4</span>
                </Fragment>
              )}
            </a>
            <a href={props.link5Url} className="thq-body-small thq-link">
              {props.link5 ?? (
                <Fragment>
                  <span className="navbar4-text4">Link5</span>
                </Fragment>
              )}
            </a>
          </nav>
          <div className="navbar4-thq-buttons-elm1">
            <button className="navbar4-thq-action1-elm1 thq-button-filled thq-button-animated">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="navbar4-text5">Action 1</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="navbar4-thq-action2-elm1 thq-button-outline thq-button-animated">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar4-text8">Action 2</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-thq-burger-menu-elm">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-thq-mobile-menu-elm">
          <div className="navbar4-thq-nav-elm">
            <div className="navbar4-thq-top-elm">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-thq-logo-elm"
              />
              <div
                data-thq="thq-close-menu"
                className="navbar4-thq-close-menu-elm"
              >
                <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-thq-links-elm2">
              <a href={props.link1Url} className="thq-body-small thq-link">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar4-text7">Link1</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-body-small thq-link">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text3">Link2</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="thq-body-small thq-link">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar4-text6">Link3</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link4Url} className="thq-body-small thq-link">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar4-text9">Link4</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link5Url} className="thq-body-small thq-link">
                {props.link5 ?? (
                  <Fragment>
                    <span className="navbar4-text4">Link5</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
          <div className="navbar4-thq-buttons-elm2">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  link5Url: 'https://www.teleporthq.io',
  link2: undefined,
  link4Url: 'https://www.teleporthq.io',
  link1Url: 'https://www.teleporthq.io',
  link5: undefined,
  action1: undefined,
  link3: undefined,
  link3Url: 'https://www.teleporthq.io',
  link1: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action2: undefined,
  logoAlt: 'logo',
  link2Url: 'https://www.teleporthq.io',
  link4: undefined,
}

Navbar4.propTypes = {
  link5Url: PropTypes.string,
  link2: PropTypes.element,
  link4Url: PropTypes.string,
  link1Url: PropTypes.string,
  link5: PropTypes.element,
  action1: PropTypes.element,
  link3: PropTypes.element,
  link3Url: PropTypes.string,
  link1: PropTypes.element,
  logoSrc: PropTypes.string,
  action2: PropTypes.element,
  logoAlt: PropTypes.string,
  link2Url: PropTypes.string,
  link4: PropTypes.element,
}

export default Navbar4
