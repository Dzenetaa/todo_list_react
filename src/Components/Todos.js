import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        lid={this.props.lid}
      />
    ));
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos[this.props.lid],
});

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  lid: PropTypes.number.isRequired,
};
export default connect(mapStateToProps)(Todos);
