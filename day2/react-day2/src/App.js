
import './App.css';
import React, { Component } from 'react';
import Counter from './Counter'
import Stepper from './Stepper'
import CatFactList from './CatFactList';
import TodoList from './TodoList';
import SwitchView from './SwitchView';


class App extends Component {

  constructor() {
    super()

    this.state = {
      facts: [], 
      counter: 10
    }
  }

  componentDidMount() {
    console.log('didmount')
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(results => {
      
      // setState performs a partial update
      // which means counter is not kicked out and is auto copied in new state
      this.setState({
        facts: results
      })

    })
  }

  render() {
    console.log('render')
    return(
      <div>
        <CatFactList facts = {this.state.facts} />
        <TodoList />
        <SwitchView />

        {/* <h1>Counter</h1>
        <Counter />
        <h1>Activity1-Stepper</h1>
        <Stepper /> */}
      </div>
    )
  }
}
export default App;
