import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import tagsActions from './../actions/tags';
import TagsComponent from './../components/Tags';

const mapStateToProps = (state) => {
	return {
		allTags: state.tags.all,
		foundTags: state.tags.found,
		searchString: state.tags.newTagName,
		canAddNewTag: state.tags.canAddNewTag
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputChange: (searchString) => {
			dispatch(tagsActions.searchTags(searchString))
		},		
		onAddNewTagClick: () => {
			dispatch(tagsActions.addNewTag())
		}
	}
};

const Tags = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagsComponent);

export default Tags