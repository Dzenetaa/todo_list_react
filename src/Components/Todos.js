/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { getItems } from '../actions/todosActions';

class Todos extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { lid } = this.props;
    const { todos } = this.props;
    const renderTodos = () => {
      console.log(todos);
      if (typeof todos !== 'undefined' && todos instanceof Array) {
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
export default connect(mapStateToProps, { getItems })(Todos);
