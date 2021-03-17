import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import * as actions from 'actions'
import requireAuth from "./requireAuth";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { comment: '' };
  }

  handleChange = (e) => {
    this.setState({...this.state, comment: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({...this.state, comment: ''})
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

CommentBox.propTypes = {
  saveComment: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

export default connect(null, actions)(requireAuth(CommentBox));