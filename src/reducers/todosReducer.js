/* eslint-disable no-param-reassign */
import {
  MARK_COMPLETE, DELETE_ITEM, ADD_TODO, ADD_LIST, GET_LIST_TITLES, GET_ITEMS,
} from '../actions/types';

const initialState = {
  todos: [],
  titles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MARK_COMPLETE:
      return {
        todos: state.todos.map((todoList, index) => {
          if (index === parseInt(action.lid, 10)) {
            todoList.map((todo) => {
              if (todo.id === action.id) {
                todo.completed = !todo.completed;
              }
              return todo;
            });
          }
          return todoList;
        }),
        titles: [...state.titles],
      };
    case DELETE_ITEM:
      return {
        todos: state.todos.map((todoList, index) => {
          if (index === parseInt(action.lid, 10)) {
            return [...todoList.filter((todo) => todo.id !== action.id)];
          }
          return todoList;
        }),
        titles: [...state.titles],
      };

    case ADD_TODO:
      return {
        todos: state.todos.map((todoList, index) => {
          if (index === parseInt(action.lid, 10)) {
            return [...todoList, action.newTodo];
          }
          return todoList;
        }),
        titles: [...state.titles],
      };

    case GET_LIST_TITLES:
      return {
        ...state,
        todos: [...state.todos],
        titles: [...state.titles, ...action.titles],
      };

    case GET_ITEMS:
      return {
        ...state,
        todos: [...state.todos, ...action.todos],
        titles: [...state.titles],
      };

    case ADD_LIST:
      return {
        ...state,
        todos: [...state.todos, action.newList],
        titles: [...state.titles, action.title],
      };

    default:
      return state;
  }
}
