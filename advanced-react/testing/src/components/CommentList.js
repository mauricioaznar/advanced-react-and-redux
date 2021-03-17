import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, null)(CommentList);