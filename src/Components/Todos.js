/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    const { lid } = this.props;
    const { todos } = this.props;
    const renderTodos = () => {
      console.log(todos);
      if (typeof todos !== 'undefined' && todos instanceof Array) {
        // the condition above makes sure that the next line won't cause an error but when we refresh the page it is still undefined and the following thus won't execute BUT if we are saving data in API then that will no longer be a problem
        return todos.map((todo) => (
          <TodoItem
            key={todo.id}
            lid={lid}
            todo={todo}
          />
        ));
      }
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
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
