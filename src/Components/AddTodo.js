import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    title: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <div
          className="bp3-input-group "
          style={{ flex: "10", marginRight: "20px" }}
        >
          <span className="bp3-icon bp3-icon-edit"></span>
          <input
            type="text"
            name="title"
            className="bp3-input bp3-intent-primary"
            placeholder="What needs to be done?"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <button
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
