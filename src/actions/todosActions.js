import * as uuid from 'uuid';
import qs from 'qs';
import axios from 'axios';
import {
  MARK_COMPLETE, DELETE_ITEM, ADD_TODO, ADD_LIST, GET_LIST_TITLES, GET_ITEMS,
} from './types';

export const markComplete = (id, lid) => ({
  type: MARK_COMPLETE,
  id,
  lid,
});

export const deleteItem = (id, lid) => (dispatch) => {
  axios.delete('http://localhost:3013/items/1').then((res) => dispatch({
    type: DELETE_ITEM,
    id,
    lid,
  }));
};

export const addTodo = (title, lid) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:3013/items',
    data: qs.stringify({
      name: 'title',
      listId: 'lid',
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => dispatch({
    type: ADD_TODO,
    title,
    lid,
    newTodo: {
      id: uuid.v4(),
      title,
      completed: false,
    },
  }));
};

export const addList = (title) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:3013/lists',
    data: qs.stringify({
      name: title,
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => dispatch({
    type: ADD_LIST,
    title,
    newList: [],
  }));
};
export const getItems = () => (dispatch) => {
  const one = 'http://localhost:3013/lists';
  const two = 'http://localhost:3013/items';
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data.data;
        const responseTwo = responses[1].data.data;
        dispatch({
          type: GET_ITEMS,
          todos: responseOne.map((list) => {
            const ind = list.id;
            return responseTwo.map((item) => {
              if (ind === item.listId) {
                return item.name;
              }
            });
          }),
        });
      }),
    );
};

export const getListTitles = () => (dispatch) => {
  axios.get('http://localhost:3013/lists')
    .then((response) => dispatch({
      type: GET_LIST_TITLES,
      titles: response.data.data.map(({ name }) => name),
    }));
};
