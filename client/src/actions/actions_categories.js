import * as Action from '../constants/ActionTypes';
import * as api from '../utils/axiosApi';

export function fetchCategories() {
    return {
      type: Action.FETCH_CATEGORIES,
      payload: api.fetchCategories(),
    };
  }