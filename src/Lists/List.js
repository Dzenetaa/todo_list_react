/* eslint-disable no-param-reassign */
/* eslint-disable radix */
import React, { Component } from 'react';
import '../App.scss';
import { Provider, connect } from 'react-redux';
import * as uuid from 'uuid';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import ListItem from './ListItem';
import store from '../store';

import {
  markComplete, deleteItem, addTodo, addList,
} from '../actions/todosActions';

class List extends Component {

  deleteItem = (id, lid) => {
    this.setState((state) => ({
      todos: state.todos.map((todoList, index) => {
        if (index === parseInt(lid)) {
          return [...todoList.filter((todo) => todo.id !== id)];
        }
        return todoList;
      }),
    }));
  };

  addTodo = (title, lid) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState((state) => ({
      todos: state.todos.map((todoList, index) => {
        if (index === parseInt(lid)) {
          return [...todoList, newTodo];
        }
        return todoList;
      }),
    }));
  };

  addList = (title) => {
    const newList = [];
    this.setState((state) => ({
      todos: [...state.todos, newList],
      titles: [...state.titles, title],
    }));
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  addList={(title) => this.props.addList(title)}
                  todos={this.props.todos}
                  titles={this.props.titles}
                />
              )}
            />
            <Route
              path="/:id"
              render={(props) => (
                <ListItem
                  todos={this.props.todos}
                  markComplete={this.props.markComplete(id, lid)}
                  deleteItem={this.props.deleteItem(id, lid)}
                  addTodo={this.props.addTodo(title, lid)}
                />
              )}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  titles: state.titles,
});

export default connect(mapStateToProps, {
  markComplete, deleteItem, addTodo, addList,
})(List);
