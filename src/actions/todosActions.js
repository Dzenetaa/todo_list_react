import * as uuid from 'uuid';
import {
  MARK_COMPLETE, DELETE_ITEM, ADD_TODO, ADD_LIST,
} from './types';

export const markComplete = (id, lid) => ({
  type: MARK_COMPLETE,
  id,
  lid,
});

export const deleteItem = (id, lid) => ({
  type: DELETE_ITEM,
  id,
  lid,
});

export const addTodo = (title, lid) => ({
  type: ADD_TODO,
  title,
  lid,
  newTodo: {
    id: uuid.v4(),
    title,
    completed: false,
  },
});

export const addList = (title) => ({
  type: ADD_LIST,
  title,
  newList: [],
});
