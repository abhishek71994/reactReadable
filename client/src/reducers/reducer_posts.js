import * as Actions from '../constants/ActionTypes';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case Actions.DELETE_POST:
      return _.omit(state, [action.payload]);
    case Actions.FETCH_POST:
    case Actions.UP_VOTE_POST:
    case Actions.DOWN_VOTE_POST:
      if (action.payload.data) {
        return { ...state, [action.payload.data.id]: action.payload.data };
      } else {
        return state;
      }
    case Actions.FETCH_POSTS:
      return _.mapKeys(_.filter(action.payload.data, function (p) { return !p.deleted }), "id");
    default:
      return state;
  }
}