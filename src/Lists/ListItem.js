import React, { Component } from 'react';
import '../App.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import AddTodo from '../Components/AddTodo';
import Header from '../Components/Layout/Header';
import Todos from '../Components/Todos';

// eslint-disable-next-line react/prefer-stateless-function
class ListItem extends Component {
  render() {
    const lid = this.props.match.params.id;
    return (
      <div className="container">
        <AddTodo addTodo={(title) => this.props.addTodo(title, lid)} />
        <Header />
        <Todos
          todos={this.props.todos}
            // todos={this.props.todos[lid]}
          markComplete={(id) => this.props.markComplete(id, lid)}
          deleteItem={(id) => this.props.deleteItem(id, lid)}
        />
      </div>
    );
  }
}
ListItem.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
export default withRouter(ListItem);
