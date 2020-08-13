import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import AboutContent from '../components/AboutContent'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MainLayout className="about-page">
        <AboutContent />
      </MainLayout>
    )
  }
}

export default About

