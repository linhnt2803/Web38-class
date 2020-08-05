import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props)

    this.state = {
      decoration: 'underline'
    }
  }

  changeDecoration() {
    let currentDecoration = this.state.decoration
    let newDecoration = currentDecoration == 'underline'
      ? 'none'
      : 'underline'
    this.setState({
      decoration: newDecoration
    })
  }

  render() {
    let {
      children,
      color = 'black',
      size = 13
    } = this.props
    let { decoration } = this.state

    let style = {
      'color': color,
      'fontSize': size,
      'textDecoration': decoration
    }

    return (
      <span
        style={style}
        onClick={() => this.changeDecoration()}
        >{children}</span>
    )
  }
}

export default Text;
