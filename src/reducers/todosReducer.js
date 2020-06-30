import {
  MARK_COMPLETE, DELETE_ITEM, ADD_TODO, ADD_LIST,
} from './types';

const initialState = {
  todos: [],
  titles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'MARK_COMPLETE':
      return 
      state.todos.map((todoList, index) => {
        if (index === parseInt(action.lid)) {
          todoList.map((todo) => {
            if (todo.id === action.id) {
              todo.completed = !todo.completed;
            }
            return todo;
          });
        }
        return todoList;
      })
    
      case 'DELETE_ITEM':
        return state.todos.map((todoList, index) => {
          if (index === parseInt(action.lid)) {
            return [...todoList.filter((todo) => todo.id !== action.id)];
          }
          return todoList;
        })

     case 'ADD_TODO':
        
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false,
      };
      return state.todos.map((todoList, index) => {
        if (index === parseInt(action.lid)) {
          return [...todoList, newTodo];
        }
        return todoList;
      })
  
    case 'ADD_LIST':
      const newList = [];
      return 
        [...state.todos, newList],
        [...state.titles, title],
      
     default:
      return state;
  }
}
