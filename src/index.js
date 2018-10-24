import React from 'react'
import ReactDOM from 'react-dom'

import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Events,
  Products,
  Contact
} from './pages'
import { Home } from './Home'
import { Whoops404 } from './Whoops404'
import { About } from './About'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/history" to="/about/history"/>
        <Redirect from="/services" to="/about/services"/>
        <Redirect from="/location" to="/about/location"/>
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
