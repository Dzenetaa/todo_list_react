import {
  MARK_COMPLETE, DELETE_ITEM, ADD_TODO, ADD_LIST
} from './types';

export const markComplete = (id, lid) => dispatch => {
    type: 'MARK_COMPLETE',
    id,
    lid
};
  
export const deleteItem = (id, lid) => dispatch => {
    type: 'DELETE_ITEM',
    id,
    lid
};

export const addTodo = (title, lid) => dispatch => {
  type: 'ADD_TODO',
  title,
  lid
};

export const addList = title => dispatch => {
  type: 'ADD_LIST',
  title,
}