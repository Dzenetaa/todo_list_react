/* eslint-disable no-param-reassign */
/* eslint-disable radix */
import React, { Component } from 'react';
import '../App.scss';
import * as uuid from 'uuid';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import ListItem from './ListItem';

class List extends Component {
  state = {
    todos: [],
    titles: [],
  };

  markComplete = (id, lid) => {
    this.setState((state) => ({
      todos: state.todos.map((todoList, index) => {
        if (index === parseInt(lid)) {
          todoList.map((todo) => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          });
        }
        return todoList;
      }),
    }));
  };

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
      <Router>
        <div className="container">
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                addList={(title) => this.addList(title)}
                todos={this.state.todos}
                titles={this.state.titles}
              />
            )}
          />
          <Route
            path="/:id"
            render={(props) => (
              <ListItem
                todos={this.state.todos}
                markComplete={this.markComplete}
                deleteItem={this.deleteItem}
                addTodo={this.addTodo}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default List;
