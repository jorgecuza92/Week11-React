import React, { Component } from 'react'

class Greet extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name} and my age is {this.props.age}</h1>
    )
  }
}

export default Greet 