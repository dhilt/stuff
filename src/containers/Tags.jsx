import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {actionTypes, findTags, addNewTag} from './../actions';
import TagsComponent from './../components/Tags';

const mapStateToProps = (state) => {
  return {
    allTags: state.tags.all,
	foundTags: state.tags.found,
	newTagName: state.tags.newTagName,
	canAddNewTag: state.tags.canAddNewTag
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchInputChange: (searchString) => {
      dispatch(findTags(searchString))
    },
    onAddNewTagClick: () => {
      dispatch(addNewTag())
    }
  }
}

const Tags = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsComponent)

export default Tags