import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { upVotePost, downVotePost, fetchCommentsForPost, deletePost } from '../actions';
import * as _ from 'lodash';
import { getDateString } from '../utils/utilities';
import Voter from './Voter';

class PostSummary extends Component {
  getCommentCount() {
    const commentArray = _.values(this.props.comments);
    return commentArray.filter(comment =>
      comment.parentId === this.props.post.id).length;
  }

  deleteThisPost() {
    console.log('Deleting post ' + this.props.post.id);
    this.props.delete(this.props.post.id,
      () => this.props.onDelete()
    );
  }

  componentDidMount() {
    this.props.fetchCommentsForPost(this.props.post.id);
  }

  render() {
    const commentCount = this.getCommentCount();
    const { category, id, title, author, timestamp } = this.props.post;

    return (     
      <div className='content'>

        <Link className='header' to={`/${category}/${id}`}>
          {title}
        </Link>
        <div className='meta '>
          <span>
            by {author} on {getDateString(timestamp)}
          </span>
        </div>
        <div className="padding-top-less">
          <Link to={`/edit/post/${id}`} className='margin-right'>Edit Post</Link>
          <button onClick={() => this.deleteThisPost()} className='negative ui button margin-left'>Delete</button>
        </div>
        <div>
          {commentCount} {commentCount === 1 ? "Comment" : "Comments"}
        </div>
        <div>
          <Voter
            item={this.props.post}
            upVote={this.props.upVote}
            downVote={this.props.downVote}
          />
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    upVote: (data) => dispatch(upVotePost(data)),
    downVote: (data) => dispatch(downVotePost(data)),
    fetchCommentsForPost: (data) => dispatch(fetchCommentsForPost(data)),
    delete: (id, callback) => dispatch(deletePost(id, callback))
  }
}
function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.postId],
    comments: state.comments,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSummary);