import { Component } from 'react';

class TaskList extends Component {

    render() {

      const taskItems = this.props.tasks.map((task) => {
        return <li>{task.name} - {task.priority}</li>
      })
    
      return (
        <div>
          <h1>Task List:</h1>
          {taskItems}
        </div>
        
      )
    }
}

export default TaskList