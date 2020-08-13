import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    )
  }
}

export default Routes

