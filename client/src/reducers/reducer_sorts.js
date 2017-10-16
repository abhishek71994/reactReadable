import * as Actions from '../constants/ActionTypes';

export default function (state =  { postSort: '-voteScore', commentSort: '-voteScore' }, action) {
  switch (action.type) {
    case Actions.SORT_POSTS:
      return { ...state, postSort: action.payload }
    case Actions.SORT_COMMENTS:
      return { ...state, commentSort: action.payload }
    default:
      return state;
  }
}