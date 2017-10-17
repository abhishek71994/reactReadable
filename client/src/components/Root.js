import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Categories from './Categories';
import Post from './Post';
import PostForm from './PostForm';
import Header from './Header';
import NoSuchRoute from './NoSuchRoute';
import PostDoesNotExist from './PostDoesNotExist';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div className="ui two column divided grid">
          <div className='right floated four wide column' style={{ maxWidth: 250 }}>
            <Categories />
          </div>
          <div className='ui ten wide column'>
            <Switch>
              <Route exact path='/new' component={PostForm} />
              <Route exact path='/PostDoesNotExist' component={PostDoesNotExist} />
              <Route exact path='/edit/post/:id' component={PostForm} />
              <Route exact path='/:category/:id' component={Post} />
              <Route exact path='/posts/:id' component={Post} />
              <Route exact path='/:category' component={App} />
              <Route exact path='/' component={App} />
              <Route component={NoSuchRoute} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root;