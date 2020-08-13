import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeEmail, changeFullname } from '../actions'

class AboutContent extends Component {
  constructor(props) {
    super(props)
  }

  doChangeEmail() {
    let email = window.prompt('Enter your email:')
    this.props.changeEmail(email)
  }

  doChangeFullname() {
    let fullname = window.prompt('Enter your fullname:')
    this.props.changeFullname(fullname)
  }

  render() {
    let { userInfo } = this.props
    return (
      <div className="about-content">
        About a person with email '{userInfo.email}'
        &nbsp; and fullname '{userInfo.fullname}'
        <div>
          <button
            onClick={() => this.doChangeEmail()}>
              Change email
          </button>
        </div>
        <div>
          <button
            onClick={() => this.doChangeFullname()}>
              Change fullname
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { userInfo } = state
  return { userInfo }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (email) => dispatch(changeEmail(email)),
    changeFullname: (fullname) => dispatch(changeFullname(fullname))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContent)

