import CategoryReducer from './reducer_categories';
import CommentReducer from './reducer_comments';
import EditReducer from './reducer_editing';
import PostsReducer from './reducer_posts';
import SortReducer from './reducer_sorts';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  posts: PostsReducer,
  comments: CommentReducer,
  sorts: SortReducer,
  editing: EditReducer,
  form: formReducer
})

export default rootReducer;