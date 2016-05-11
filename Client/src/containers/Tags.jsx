import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import i18n from '../utils/i18n'
import tagsActions from './../actions/tags'
import TagsComponent from './../components/Tags'

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token),
		allTags: state.tags.all,
		searching: state.tags.searching,
		foundTags: state.tags.found,
		searchString: state.tags.searchString,
		canAddNew: state.tags.canAddNew,
		selectedTag: state.tags.origin,
		editedTag: state.tags.edited,
		justEditedId: state.tags.justEditedId
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputChange: (searchString) => {
			dispatch(tagsActions.search(searchString));
		},
		onAddNewTagClick: (newName) => {
			dispatch(tagsActions.new(newName));
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