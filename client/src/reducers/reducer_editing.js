import * as Actions from '../constants/ActionTypes';

export default function (state = { commentId: '' }, action) {
  switch (action.type) {
    case Actions.START_EDITING_COMMENT:
      return { commentId: action.payload }
    case Actions.STOP_EDITING_COMMENT:
      return { commentId: '' }
    default:
      return state;
  }
}