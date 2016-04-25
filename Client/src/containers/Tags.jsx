import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import tagsActions from './../actions/tags'
import TagsComponent from './../components/Tags'

const mapStateToProps = (state) => {
	return {
		allTags: state.tags.all,
		searching: state.tags.searching,
		foundTags: state.tags.found,
		searchString: state.tags.searchString,
		canAddNew: state.tags.canAddNew,
		selectedTag: state.tags.selected,
		editedTag: state.tags.edited
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputChange: (searchString) => {
			dispatch(tagsActions.search(searchString));
		},
		onAddNewTagClick: () => {
			dispatch(tagsActions.new());
			browserHistory.push(`/tags/new`);
		},
		onSelectTag: (tag) => {
			dispatch(tagsActions.select(tag));
			browserHistory.push(`/tags/${tag.id}`);
		}
	}
};

const Tags = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagsComponent);

export default Tags