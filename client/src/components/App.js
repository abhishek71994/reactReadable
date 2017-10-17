import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts, fetchCommentsForPost, sortPosts } from '../actions';
import '../App.css';
import { Container, Button, Icon } from 'semantic-ui-react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';

class App extends Component {
  constructor(props) {
    super(props);

    this.sortChange = this.sortChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  sortChange(event) {
    this.props.sortPosts(event.target.value);
  }

  displayPosts() {
    const category = this.props.match.params.category;
    const matchingPosts = category ?
      _.filter(this.props.posts, post => post.category === category) :
      this.props.posts;

    const orderedMatchingPosts = _.values(matchingPosts).sort(sortBy(this.props.postSortOrder));

    return _.map(orderedMatchingPosts, post => {
      return (
        <li key={post.id === undefined ? 1 : post.id} className='item'>
          <PostSummary postId={post.id} onDelete={() => { }} />
        </li>
      );
    });
  }

  render() {
    return (
      <div className='padding-top'>
        <h2>Posts</h2>
        <div>
          <select className='dropdown' value={this.props.postSortOrder} onChange={this.sortChange}>
            <option value='-voteScore'>Order by Votes</option>
            <option value='voteScore'>Order by Votes Ascending</option>
            <option value='-timestamp'>Order by Date Newest</option>
            <option value='timestamp'>Order by Date Oldest</option>
          </select>
        </div>
        <div className='padding-top'>
          <Container>
            <ul className='ui divided items'>
              {this.displayPosts()}
            </ul>
          </Container>
        </div>
        <div className='padding-top'>
          <Container text>
            <Link to='/new'>
              <Button className="ui primary">
                Add Post
                <Icon name='right arrow' />
              </Button>
            </Link>
          </Container>
        </div>
      </div >
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    categories: state.categories,
    postSortOrder: state.sorts.postSort
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchCommentsForPost, sortPosts })(App);
