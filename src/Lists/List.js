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
      todos: state.todos.map((todoList, index) => {
        if (index === lid) {
          todoList.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
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
        if (index === lid) {
          todoList.filter((todo) => {
            if (todo.id !== id) {
              return { todo };
            }
            return todo;
          });
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
        if (index === lid) {
          return { todoList: [...todoList, newTodo] };
        }
        return todoList;
      }),
    }));
  };

  render() {
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

export default List;
