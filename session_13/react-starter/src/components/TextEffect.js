import React, { Component } from 'react'

class TextEffect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'rgb(0, 0, 0)'
    }
  }

  changeColor() {
    let newColor = this.randomColor()
    this.setState({
      color: newColor
    })
  }

  randomColor() {
    let red = this.randomInt(256)
    let green = this.randomInt(256)
    let blue = this.randomInt(256)

    return `rgb(${red}, ${green}, ${blue})`
  }

  randomInt(bound) {
    return parseInt(Math.random() * bound)
  }

  render() {
    let { children } = this.props
    let { color } = this.state
    let style = {
      'color': color,
      'cursor': 'pointer',
      'userSelect': 'none'
    }

    return (
      <span
        onClick={() => this.changeColor()}
        style={style}
        >{children}</span>
    )
  }
}

export default TextEffect