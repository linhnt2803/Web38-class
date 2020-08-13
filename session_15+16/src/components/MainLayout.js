import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './MainLayout.css'

class MainLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`main-container ${this.props.className}`}>
        <div>
          <Nav />
          {this.props.children} {/*  <HomeContent /> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default MainLayout

