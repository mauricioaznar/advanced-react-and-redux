import React, {Component} from 'react';
import PropTypes from 'prop-types';
import requireAuth from "./requireAuth";

class Feature extends Component {
  render() {
    return (
      <div>
        Feature!
      </div>
    );
  }
}

Feature.propTypes = {};

export default requireAuth(Feature);