import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="nav">
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About</Link>
      </nav>
    )
  }
}

export default Nav

