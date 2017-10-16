import * as Action from '../constants/ActionTypes';
import * as VoteOption from '../constants/VoteOptions';
import * as api from '../utils/axiosApi';

export function fetchCommentsForPost(id) {
    return {
      type: Action.FETCH_COMMENTS_FOR_POST,
      payload: api.fetchCommentsForPost(id),
    }
  }
  
  export function upVoteComment(id) {
    console.log(id + ' ' + Action.VOTE_ON_COMMENT);
    return {
      type: Action.VOTE_ON_COMMENT,
      payload: api.voteOnComment(id, VoteOption.UP_VOTE),
    }
  }
  
  export function downVoteComment(id) {
    return {
      type: Action.VOTE_ON_COMMENT,
      payload: api.voteOnComment(id, VoteOption.DOWN_VOTE),
    }
  }
  
  export function deleteComment(id) {
    return {
      type: Action.DELETE_COMMENT,
      payload: api.deleteComment(id),
    }
  }
  
  export function addComment(comment) {
    return {
      type: Action.POST_COMMENT,
      payload: api.postComment(comment),
    }
  }
  
  export function editComment(comment) {
    return {
      type: Action.UPDATE_COMMENT,
      payload: api.updateComment(comment),
    }
  }