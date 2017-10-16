import * as Action from '../constants/ActionTypes';
import * as VoteOption from '../constants/VoteOptions';
import * as api from '../utils/axiosApi';

export function fetchPosts() {
  return {
    type: Action.FETCH_POSTS,
    payload: api.fetchPosts(),
  };
}

export function fetchPost(id) {
  return {
    type: Action.FETCH_POST,
    payload: api.fetchPost(id),
  }
}

export function createPost(post, callback) {
  return {
    type: Action.ADD_POST,
    payload: api.addPost(post, callback),
  }
}

export function deletePost(id, callback) {
  api.deletePost(id, callback);

  return {
    type: Action.DELETE_POST,
    payload: id,
  }
}

export function updatePost(post, callback) {
  return {
    type: Action.UPDATE_POST,
    payload: api.updatePost(post, callback),
  }
}

export function upVotePost(id) {
  return {
    type: Action.UP_VOTE_POST,
    payload: api.voteOnPost(id, VoteOption.UP_VOTE),
  }
}

export function downVotePost(id) {
  return {
    type: Action.DOWN_VOTE_POST,
    payload: api.voteOnPost(id, VoteOption.DOWN_VOTE)
  }
}