/* eslint-disable no-param-reassign */
import {
  MARK_COMPLETE, DELETE_ITEM, ADD_TODO, ADD_LIST,
} from '../actions/types';

const initialState = {
  todos: [],
  titles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MARK_COMPLETE:
      return state.todos.map((todoList, index) => {
        if (index === parseInt(action.lid, 10)) {
          todoList.map((todo) => {
            if (todo.id === action.id) {
              todo.completed = !todo.completed;
            }
            return todo;
          });
        }
        return todoList;
      });

    case DELETE_ITEM:
      return state.todos.map((todoList, index) => {
        if (index === parseInt(action.lid, 10)) {
          return [...todoList.filter((todo) => todo.id !== action.id)];
        }
        return todoList;
      });

    case ADD_TODO:
      return state.todos.map((todoList, index) => {
        if (index === parseInt(action.lid, 10)) {
          return [...todoList, action.newTodo];
        }
        return todoList;
      });

    case ADD_LIST:
      return {
        todos: [...state.todos, action.newList],
        titles: [...state.titles, action.title],
      };

    default:
      return state;
  }
}
