import { Component } from "react";


class SwitchView extends Component {

  constructor() {
    super()

    this.state = {
      isOn: false
    }
  }

  handleOnClick = (event) => {
    this.setState({
      isOn : !this.state.isOn
      

    })
    
  }

  render() {
    return(
      <div>
        <h1>Switch View</h1>
        <button onClick={this.handleOnClick}> {this.state.isOn ? "ON" : "OFF"}</button>
      </div>
      
    )
  }
}

export default SwitchView