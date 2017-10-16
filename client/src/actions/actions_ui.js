import * as Action from '../constants/ActionTypes';

export function sortPosts(field) {
    return {
      type: Action.SORT_POSTS,
      payload: field
    }
  }
  
  export function sortComments(field) {
    return {
      type: Action.SORT_COMMENTS,
      payload: field
    }
  }
  
  export function toggleCommentEdit(id) {
    return {
      type: Action.START_EDITING_COMMENT,
      payload: id
    }
  }