// import * as uuid from 'uuid';
import qs from 'qs';
import axios from 'axios';
import {
  MARK_COMPLETE, DELETE_ITEM, ADD_TODO, ADD_LIST, GET_ITEMS, GET_LIST_TITLES,
} from './types';

export const markComplete = (id, lid) => ({
  type: MARK_COMPLETE,
  id,
  lid,
});

export const deleteItem = (id, lid) => (dispatch) => {
  axios.delete('http://localhost:3050/items/id').then((res) => dispatch({
    type: DELETE_ITEM,
    id,
    lid,
  }));
};

export const addTodo = (title, lid) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:3050/items',
    data: qs.stringify({
      name: title,
      listId: lid,
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
  axios.get('http://localhost:3050/items')
    .then((response) => dispatch({
      type: ADD_TODO,
      lid,
      newTodo: {
        id: response.data.data.map((item) => {
          if (item.list_id === parseInt(lid, 10)) {
            return item.id;
          }
        }).filter((el) => el !== undefined).pop(),
        title: response.data.data.map((item) => {
          if (item.list_id === parseInt(lid, 10)) {
            return item.name;
          }
        }).filter((el) => el !== undefined).pop(),
        completed: false,
      },
    }));
};

export const addList = (title) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:3050/lists',
    data: qs.stringify({
      name: title,
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
  axios({
    method: 'get',
    url: 'http://localhost:3050/lists',
  })
    .then((response) => dispatch({
      type: ADD_LIST,
      title: response.data.data.map(({ name }) => name).pop(),
      newList: [],
    }));
};
export const getItems = () => (dispatch) => {
  const one = 'http://localhost:3050/lists';
  const two = 'http://localhost:3050/items';
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  axios.all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data.data;
        const responseTwo = responses[1].data.data;
        dispatch({
          type: GET_ITEMS,
          todos: responseOne.map((list) => {
            const ind = list.id;
            return responseTwo.map((item) => {
              if (ind === item.list_id) {
                return {
                  id: item.id,
                  title: item.name,
                };
              }
            }).filter((el) => el !== undefined);
          }),
        });
      }),
    );
};

export const getListTitles = () => (dispatch) => {
  axios.get('http://localhost:3050/lists')
    .then((response) => dispatch({
      type: GET_LIST_TITLES,
      titles: response.data.data.map(({ name }) => name),
    }));
};
