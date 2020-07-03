/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addList } from './actions/todosActions';

class Home extends Component {
  state = {
    title: '',
    alertVisible: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const text = document.getElementById('newTodo').value;
    if (text !== '') {
      this.props.addList(this.state.title);
      this.setState({ title: '' });
    } else {
      this.setState({ alertVisible: true });
      setTimeout(() => this.setState({ alertVisible: false }), 3000);
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div>
          <p
            id="message"
            style={{
              display: this.state.alertVisible ? 'block' : 'none',
            }}
          >
            Write something!
          </p>
          <form className="addForm bottom" onSubmit={this.onSubmit}>
            <div className="bp3-input-group ">
              <Icon icon="edit" iconSize={15} />
              <input
                type="text"
                name="title"
                id="newTodo"
                className="bp3-input bp3-intent-primary"
                placeholder="Add new list title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <button
              id="addButton"
              className="bp3-button bp3-intent-primary  bp3-icon-add bp3-small  "
            >
              Add
            </button>
          </form>
        </div>
        <div className="bp3-list-unstyled container">
          {this.props.todos.map((todo, index) => {
            const ind = index;
            return this.props.titles.map((title, index) => {
              if (ind === index) {
                return (<h2><Link to={`/${index}`}>{title}</Link></h2>);
              }
            });
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  titles: state.todos.titles,
});
Home.propTypes = {
  addList: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.array).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, { addList })(Home);
