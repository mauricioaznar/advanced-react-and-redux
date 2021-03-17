import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {signout} from "../../actions";

class Signout extends Component {
  componentDidMount() {
    this.props.signout()
  }

  render() {
    return (
      <div>
        Sorry to see you go
      </div>
    );
  }
}

Signout.propTypes = {
  signout: PropTypes.func.isRequired
};

export default connect(null, {signout})(Signout);