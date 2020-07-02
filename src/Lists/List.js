import React from 'react';
import '../App.scss';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import ListItem from './ListItem';
import store from '../store';

export default function List() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={ListItem} />
        </div>
      </Router>
    </Provider>
  );
}
