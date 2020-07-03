/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    const { lid } = this.props;
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        lid={lid}
        todo={todo}
      />
    ));
  }
}
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos.todos[ownProps.lid],

});

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  lid: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Todos);
