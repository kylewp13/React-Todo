import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const task = [
  {
    task: "task 1",
    id: Date.now() - 1,
    completed: false
  },
  {
    task: "task 2",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: task
    };
  }

  toggleTask = id => {
    // console.log(item)
    this.setState({
      task: this.state.task.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: item.completed ? false : true
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  clearTask = () => {
    this.setState({
      task: this.state.task.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList task={this.state.task} toggleTask={this.toggleTask}/>
        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
      </div>
    );
  }
}

export default App;