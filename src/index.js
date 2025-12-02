import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import DeliverySustainability from './views/delivery-sustainability'
import AboutUs from './views/about-us'
import GourmetPizzaMenu from './views/gourmet-pizza-menu'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route
          component={DeliverySustainability}
          exact
          path="/delivery-sustainability"
        />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={GourmetPizzaMenu} exact path="/gourmet-pizza-menu" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
