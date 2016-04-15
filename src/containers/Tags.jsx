import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import tagsActions from './../actions/tags'
import TagsComponent from './../components/Tags'

const mapStateToProps = (state) => {
	return {
		allTags: state.tags.all,
		foundTags: state.tags.found,
		searchString: state.tags.newTagName,
		canAddNewTag: state.tags.canAddNewTag,
		selectedTag: state.tags.selected,
		changedTag: state.tags.changed
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputChange: (searchString) => {
			dispatch(tagsActions.searchTags(searchString));
		},
		onAddNewTagClick: () => {
			dispatch(tagsActions.addNewTag());
		},
		onSelectTag: (tag) => {
			dispatch(tagsActions.selectTag(tag));
			browserHistory.push(`/tags/${tag.id}`);
		}
	}
};

const Tags = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagsComponent);

export default Tags