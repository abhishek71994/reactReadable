import * as Actions from '../constants/ActionTypes';
import * as _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case Actions.FETCH_COMMENTS_FOR_POST:
            return Object.assign({}, state, _.mapKeys(_.filter(action.payload.data, function (p) { return !p.deleted }), "id"));
        case Actions.POST_COMMENT:
        case Actions.UPDATE_COMMENT:
        case Actions.VOTE_ON_COMMENT:
            return { ...state, [action.payload.data.id]: action.payload.data }
        case Actions.DELETE_COMMENT:
            return _.omit(state, [action.payload.data.id]);
        default:
            return state;
    }
}