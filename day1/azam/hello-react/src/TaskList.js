import { Component } from "react";


class TaskList extends Component {

    render() {

        const taskItems = this.props.allTasks.map((task, index) => {
            return <li key = {index}>{task.name} - {task.priority}</li>
        })

        return (
            <div>
            <h1>All Tasks</h1>
            {taskItems}
            </div>
            

        )
    }

}

export default TaskList
