import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    title: "",
    alertVisible: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const text = document.getElementById("newTodo").value;

    if (text !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    } else {
      this.setState({ alertVisible: true });
      setTimeout(() =>  this.setState({ alertVisible: "" }), 3000);
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    let value = e.target.value;
  };

  render() {
    return (
      <div>
        <p
          id="message"
          style={{
            display: this.state.alertVisible ? "block" : "none",
          }}
        >
          Write something!
        </p>
        <form className="addForm bottom" onSubmit={this.onSubmit}>
          <div className="bp3-input-group ">
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
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
