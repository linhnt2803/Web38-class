import React, { Component } from 'react'
import { connect } from 'react-redux'

class AboutContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { userInfo } = this.props
    return (
      <div className="about-content">
        About a person with email {userInfo.email}
        &nbsp; and fullname {userInfo.fullname}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { userInfo } = state
  return { userInfo }
}

export default connect(mapStateToProps)(AboutContent)

