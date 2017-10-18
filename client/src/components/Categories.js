import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchCategories } from '../actions';
class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  displayCategories() {
    return _.map(this.props.categories, cats => {
      return (_.map(cats, cat => {
        const toLink = `/${cat.name}`;
        return (
          <Link
            to={toLink}
            className={this.props.categoryPath === toLink ? 'active item' : 'item'}
            key={cat.name}
          >
            {cat.name}
          </Link>
        );
      }));
    });
  }

  render() {
    return (
      <div className='ui secondary vertical menu padding-top'>
        <div className='header item'>
          Categories
        </div>
        <Link to='/' className={this.props.categoryPath === '/' ? 'active item' : 'item'} key='all'>All categories</Link>
        {this.displayCategories()}
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}
const mapStateToProps = state => ({
  categories: state.categories
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);