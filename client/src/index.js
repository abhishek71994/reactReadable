import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promise, logger)),
);

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root'));
registerServiceWorker();

export default store;