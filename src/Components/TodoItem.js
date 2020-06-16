import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";
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
          onChange={() => this.props.markComplete(id)}
        ></input>
        <label>{title}</label>
        <button id="deleteButton" onClick={() => this.props.deleteItem(id)}>
          <Icon icon="trash" iconSize={20} intent="danger" />
        </button>
      </div>
    );
  }
}

export default TodoItem;
