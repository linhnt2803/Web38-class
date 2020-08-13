import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import HomeContent from '../components/HomeContent'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MainLayout className="home-page">
        <HomeContent />
      </MainLayout>
    )
  }
}

export default Home

