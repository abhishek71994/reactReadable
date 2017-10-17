import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, updatePost, fetchCategories, fetchPost } from '../actions';
import uuid from 'uuid';

class PostForm extends Component {
  componentDidMount() {
    this.props.fetchCategories();

    if (this.props.match.params.id) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }

  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <div className='six wide field'>
          <input type="text" placeholder={field.placeholder} {...field.input} />
        </div>
        <div className="error-text">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderDropdown(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>

        <select className='ui dropdown' {...field.input}>
          <option value=''>Select a Category</option>
          {_.map(field.categories, cats => {
            return (_.map(cats, cat => {
              return (
                <option value={cat.name} key={cat.name}>{cat.name}</option>
              );
            }));
          })}
        </select>

        <div className="error-text">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderMarkdownField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <div className='eight wide field'>
          <textarea placeholder={field.placeholder} {...field.input} />
        </div>
        <div className="error-text">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  submitForm(values) {
    if (this.props.initialValues) {
      values.id = this.props.initialValues.id;
      this.props.updatePost(values, () => {
        this.props.history.push('/');
      });
    } else {
      values.id = uuid.v4();
      values.timestamp = Date.now();
      this.props.createPost(values, () => {
        this.props.history.push('/');
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <div className='ui container'>
          <div className='ui form padding-top'>
            <div>
              <div>
                <Field name='title' placeholder='Title' className='field' component={this.renderTextField} label='Title for Post: ' />
              </div>
            </div>
            <div>
              <div>
                <div className='eight wide field'>
                  <Field name='category' className='field' component={this.renderDropdown} label='Category: ' categories={this.props.categories} />
                </div>
              </div>
            </div>
            <div>
              <div>
                <Field name='author' className='field' component={this.renderTextField} placeholder='Author' label='Author: ' />
              </div>
            </div>
            <div>
              <label>Post Body: </label>
              <div>
                <Field name='body' className='field' component={this.renderMarkdownField} placeholder='Body of post. Markdown allowed.' />
              </div>
            </div>
          </div>
          <button type='submit' className='ui primary button'>Submit</button>
          <Link to='/' className=''>Cancel</Link>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a Title';
  }

  if (!values.category) {
    errors.category = 'Select a Category'
  }

  if (!values.author) {
    errors.author = 'Enter an author';
  }

  if (!values.body) {
    errors.body = 'A Post Body is needed';
  }

  return errors;
}

function mapStateToProps(state, ownProps) {
  const match = state.posts[ownProps.match.params.id];

  return {
    post: match ? match : null,
    categories: state.categories,
    initialValues: match ? match : null
  }
}

PostForm = reduxForm({
  validate,
  form: 'PostForm',
  enableReinitialize: true
})(PostForm);

PostForm = connect(mapStateToProps, { createPost, updatePost, fetchCategories, fetchPost })(PostForm);

export default PostForm;