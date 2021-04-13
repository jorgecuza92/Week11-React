import { Component } from 'react';

class Stepper extends Component {

  constructor() {
    super()
    this.state = {
      ctr: 0
    }
  }


handleIncrement = () => {
  this.setState({
    minus: this.state.ctr - 1
  })
}
handleIncrement = () => {
  this.setState({
    plus: this.state.ctr + 1
  })
}

  render() {
    return(
      <div>
        <button onClick={this.handleIncrement.minus}>-</button><label>{this.state.ctr}</label><button onClick={this.handleIncrement.plus}>+</button>
      </div>
      
    )
  }
}

export default Stepper