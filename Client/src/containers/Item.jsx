import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import itemsActions from './../actions/items'
import ItemComponent from './../components/Item'

const mapStateToProps = (state) => {
	return {
		original: state.items.selected,
		edited: state.items.edited,
		searchTagsString: state.items.searchTagsString,
		searchingTags: state.items.searchingTags,
		foundTags: state.items.foundTags
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		doLocalChange: (item) => {
			dispatch(itemsActions.change(item));
		},
		cancelLocalChanges: () => {
			dispatch(itemsActions.cancelChanges());
			browserHistory.push(`/items`);
		},
		create: () => {
			dispatch(itemsActions.create());
			browserHistory.push(`/items`);
		},
		update: () => {
			dispatch(itemsActions.update());
			browserHistory.push(`/items`);
		},
		remove: () => {
			dispatch(itemsActions.delete());
			browserHistory.push(`/items`);
		},
		searchTags: (searchString) => {
			dispatch(itemsActions.searchTags(searchString));
		},
		selectTag: (tag) => {
			dispatch(itemsActions.addTag(tag));
		},
		removeTag: (tag) => {
			dispatch(itemsActions.removeTag(tag));
		}
	}
};

const Item = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemComponent);

export default Item