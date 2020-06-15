import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    title: "",
  };

  showAlert(message) {
    const div = document.createElement("div");
    div.className = "alert";
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector(".addForm");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
  onSubmit = (e) => {
    e.preventDefault();
    const text = document.getElementById("newTodo").value;

    if (text !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    } else {
      this.showAlert("Write something!", "alert");
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form
        className="addForm"
        onSubmit={this.onSubmit}
        style={{ display: "flex" }}
      >
        <div
          className="bp3-input-group "
          style={{ flex: "10", marginRight: "20px" }}
        >
          <span className="bp3-icon bp3-icon-edit"></span>
          <input
            type="text"
            name="title"
            id="newTodo"
            className="bp3-input bp3-intent-primary"
            placeholder="What needs to be done?"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <button
          id="addButton"
          className="bp3-button bp3-intent-primary  bp3-icon-add bp3-small  "
          style={{ flex: "2" }}
          type="submit"
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddTodo;
