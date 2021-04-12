
import React, { Component } from 'react'
import './App.css'

// default import of the Greet component 
import Greet from './Greet'
// named import of Menu and Footer 
import { Menu, Footer } from './Menu'
import TaskList from './TaskList'

class App extends Component {
  // what you want to display on screen
  render() { 

    // fetch an array of tasks from a web api 
    const tasks = [
      {name: 'Mow lawn', priority: 'high'}, 
      {name: 'Wash car', priority: 'low'}
    ]

    return (
      // JSX JavaScript and XML 
      <div>
        <h1>App</h1>
        <Menu />

        <h1 className="hello">Hello World</h1>
        <h2>04/12/2021</h2>
        <Greet name = "Mary" age = "54" />
        <Greet name = "Alex" age = "67" />

        <TaskList allTasks = {tasks} />
       
        <Footer />
      </div>
    )
  }
}

export default App 

// npx create-react-app project-name



