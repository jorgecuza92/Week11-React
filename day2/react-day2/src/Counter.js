import { Component } from 'react';

class Counter extends Component {

  constructor() {
    super() // this means calling the constructor of the Component class

    // state or local state or private state
    this.state = {
      ctr: 0
    }

    
    // bind function allows to set the context for the function that is binding.
    // this.handleIncrement = this.handleIncrement.bind(this)
  }

  // second method using arrow function without using bind() function
  handleIncrement = () => {
    // DON'T DO THIS
    // STATE IS IMMUTABLE, YOU CANNOT CHANGE
    // this.state.ctr++ 


    // replace the existing state with a brand new state
    // when you call setState, React auto calls render() function
    this.setState({
      ctr: this.state.ctr + 1
    },() => { // this function is called when the state is updated..
      console.log(this.state.ctr)
    })

    // console.log(this.state.ctr)
  
  }


  /*
  // first method using bind function
  handleIncrement() {
    console.log(this)
    
    // this refers to the currect object/instance of the Counter class
    this.count++
    console.log(this.count)
    console.log('handleIncrement fired...')
  } */

  render() {
    return (
      <div>
        <h1>{this.state.ctr}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>

    )
  }

}

export default Counter