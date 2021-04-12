
import React, { Component } from 'react'
import './App.css'
import TaskList from './TaskList'

// default import of the Greet component
import Greet from './Greet'
// named import of Menu and Footer components
import { Menu, Footer } from './Menu'

class App extends Component {
  // what you want to display on screen
  render() { 
   
    // fetch an array of tasks from a web api
    const tasks = [
      {name: 'Mow lawn', priority: 'high'},
      {name: 'Wash car', priority: 'med'}

  ]
    return (
      // JSX - JavaScript and XML
      <div>
        <Menu />

        <h1 className='hello'>Hello React!</h1>
        <h2>04/12/2021</h2>
        <Greet name = "Mary" age = "54" />
        <Greet name = "Alex" age = "42" />

        <TaskList tasks = {tasks} />

        <Footer />
      </div>
    )
  }
}


export default App