import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }


  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
        task: ''
    });
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="...todo"
            value={this.task}
            name="task"
            onChange={this.handleChanges}
            />
            <button>Add Task</button>
            <button onClick={this.props.clearTask}>Done</button>
        </form>
    );
  }
}

export default TodoForm;