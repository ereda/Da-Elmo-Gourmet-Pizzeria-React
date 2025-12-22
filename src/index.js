import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Privacy from './views/privacy'
import PrivacyPolicy from './views/privacy-policy'
import Home from './views/home'
import DeliverySustainability from './views/delivery-sustainability'
import Terms from './views/terms'
import AboutUs from './views/about-us'
import GourmetPizzaMenu from './views/gourmet-pizza-menu'
import Philosophy from './views/philosophy'
import Ingredients from './views/ingredients'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Privacy} exact path="/privacy" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={Home} exact path="/" />
        <Route
          component={DeliverySustainability}
          exact
          path="/delivery-sustainability"
        />
        <Route component={Terms} exact path="/terms" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={GourmetPizzaMenu} exact path="/gourmet-pizza-menu" />
        <Route component={Philosophy} exact path="/philosophy" />
        <Route component={Ingredients} exact path="/ingredients" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
