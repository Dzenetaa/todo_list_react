import React, { Component } from "react";
class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#ffffff",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={this.props.markComplete.bind(this, id)}
        ></input>
        <label>{title}</label>
        <button
          id="deleteButton"
          onClick={this.props.deleteItem.bind(this, id)}
        >
          <span
            className="bp3-icon bp3-icon-trash"
            style={{ color: "red" }}
          ></span>
        </button>
      </div>
    );
  }
}

export default TodoItem;
