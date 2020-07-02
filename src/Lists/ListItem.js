import React, { Component } from 'react';
import '../App.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddTodo from '../Components/AddTodo';
import Header from '../Components/Layout/Header';
import Todos from '../Components/Todos';

// eslint-disable-next-line react/prefer-stateless-function
class ListItem extends Component {
  render() {
    const lid = this.props.match.params.id;
    return (
      <div className="container">
        <AddTodo lid={lid} />
        <Header />
        <Todos lid={lid} />
      </div>
    );
  }
}
ListItem.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
export default withRouter(ListItem);
