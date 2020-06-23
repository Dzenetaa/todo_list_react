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
    todos: [
      [],
      [],
      [],
    ],
  };

  markComplete = (id, lid) => {
    this.setState((state) => ({
      todos: [...state.todos.filter((todo) => todo[lid])],
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));
  };

  deleteItem = (id, lid) => {
    this.setState((state) => ({
      todos: [...state.todos.filter((todo) => todo[lid])],
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    }));
  };

  addTodo = (title, lid) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState((state) => ({
      todos: [...state.todos.filter((todo) => todo[lid])],
      todos: [...state.todos, newTodo],
    }));
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
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

export default (List);
