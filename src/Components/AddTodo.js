/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: '',
    alertVisible: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const text = document.getElementById('newTodo').value;
    if (text !== '') {
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    } else {
      this.setState({ alertVisible: true });
      setTimeout(() => this.setState({ alertVisible: false }), 3000);
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <p
          id="message"
          style={{
            display: this.state.alertVisible ? 'block' : 'none',
          }}
        >
          Write something!
        </p>
        <form className="addForm bottom" onSubmit={this.onSubmit}>
          <div className="bp3-input-group ">
            <Icon icon="edit" iconSize={15} />
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
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default AddTodo;
