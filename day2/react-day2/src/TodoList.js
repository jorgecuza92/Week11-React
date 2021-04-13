import { Component } from "react";


class TodoList extends Component {


  constructor() {
    super()

    this.state = {
      task: ''
    }
  }


  handleOnChange = (e) => {
    console.log(e.target.value)
    this.setState({
      task: e.target.value
    })
  }

    render() {
      return(
        <div>
          <h1>TodoList</h1>
          <input type='text' onChange={this.handleOnChange} />
        </div>

      )
    }
}

export default TodoList