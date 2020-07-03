/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { markComplete, deleteItem } from '../actions/todosActions';

class TodoItem extends Component {
  getStyle = () => ({
    background: '#ffffff',
    padding: '10px',
    borderBottom: '1px #ccc solid',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none',
  });

  render() {
    const { id, title, completed } = this.props.todo;
    // eslint-disable-next-line react/destructuring-assignment
    const { lid } = this.props;

    return (
      <div style={this.getStyle()}>
        <input
          id="checkboxId"
          type="checkbox"
          defaultChecked={completed}
          onChange={() => this.props.markComplete(id, lid)}
        />
        <label htmlFor="checkboxId">
          {title}
        </label>
        <button type="submit" id="deleteButton" onClick={() => this.props.deleteItem(id, lid)}>
          <Icon icon="trash" iconSize={20} intent="danger" />
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  lid: PropTypes.string.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(null, { markComplete, deleteItem })(TodoItem);
