import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => ({
    background: '#ffffff',
    padding: '10px',
    borderBottom: '1px #ccc solid',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none',
  });

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input
          id="checkboxId"
          type="checkbox"
          defaultChecked={completed}
          onChange={() => this.props.markComplete(id)}
        />
        <label htmlFor="checkboxId">
          {title}
        </label>
        <button type="submit" id="deleteButton" onClick={() => this.props.deleteItem(id)}>
          <Icon icon="trash" iconSize={20} intent="danger" />
        </button>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
export default TodoItem;
