import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      period: 'AM',
      color: 'rgb(0, 0, 0)'
    }
  }

  componentDidMount() {
    setInterval(() => this.updateTime(), 1000)
  }

  updateTime() {
    let now = new Date()
    let hour24 = now.getHours()
    let hour12 = hour24 == 12 ? 12 : hour24 % 12
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let period = hour24 >= 12 ? "PM" : "AM"
    this.setState({
      hour: hour12,
      minute,
      second,
      period
    })
  }

  to2Digit(number) {
    return number < 10 ? `0${number}` : number
  }

  changeColor() {
    let newColor = this.randomColor()
    this.setState({
      color: newColor
    })
  }

  randomColor() {
    let red = this.randomInt(230)
    let green = this.randomInt(230)
    let blue = this.randomInt(230)
    
    return `rgb(${red}, ${green}, ${blue})`
  }

  randomInt(bound) {
    return parseInt(Math.random() * bound)
  }

  render() {
    let { hour, minute, second, period, color } = this.state
    let style = {
      'color': color,
      'borderColor': color
    }
    return (
      <div
        className="clock"
        style={style}
        onClick={() => this.changeColor()}
        >
        <span>{this.to2Digit(hour)}</span>
        <span>:</span>
        <span>{this.to2Digit(minute)}</span>
        <span>:</span>
        <span>{this.to2Digit(second)}</span>
        <span>&nbsp;</span>
        <span>{period}</span>
      </div>
    )
  }
}

export default Clock
