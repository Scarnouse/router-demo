import React from 'react'
import { Route } from 'react-router-dom'

import PageTemplate from './PageTemplate'
import AboutMenu from './AboutMenu'
import Services from './Services'
import Company from './Company'
import History from './History'
import Location from './Location'

export const About = ({ match }) =>
  <PageTemplate>
    <section className="about">
      <Route component={AboutMenu} />
      <Route exact path="/about" component={Company}/>
      <Route path="/about/history" component={History}/>
      <Route path="/about/services" component={Services}/>
      <Route path="/about/location" component={Location}/>
    </section>
  </PageTemplate>
