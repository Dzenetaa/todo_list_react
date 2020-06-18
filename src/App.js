import React, { Component } from 'react';
import './App.scss';
import * as uuid from 'uuid';
import AddTodo from './Components/AddTodo';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [],
  };

  markComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));
  };

  deleteItem = (id) => {
    this.setState((state) => ({
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    }));
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState((state) => ({
      todos: [...state.todos, newTodo],
    }));
  };

  render() {
    return (
      <div className="container">
        <AddTodo addTodo={this.addTodo} />
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
