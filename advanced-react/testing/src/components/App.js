import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux'
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import {Route, Link, Switch} from 'react-router-dom'
import * as actions from 'actions'
import PropTypes from 'prop-types'

export class App extends React.Component {

  renderButton() {
    if (this.props.auth) {
      return (
        <button
          onClick={() => {
            this.props.changeAuth(false)
          }}
        >
          Sign out
        </button>
      )
    } else {
      return (
        <button
          onClick={() => {
            this.props.changeAuth(true)
          }}
        >
          Sign in
        </button>
      )
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        <Switch>
          <Route path="/post" component={CommentBox} />
          <Route path="/" exact component={CommentList} />
        </Switch>
      </div>
    )};
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

App.propTypes = {
  changeAuth: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(App);
