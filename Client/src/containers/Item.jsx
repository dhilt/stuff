import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import itemsActions from './../actions/items'
import ItemComponent from './../components/Item'

const mapStateToProps = (state) => {
	return {
		original: state.items.origin,
		edited: state.items.edited,
		searchTagsString: state.items.searchTagsString,
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
		},
		create: () => {
			dispatch(itemsActions.create());
		},
		update: () => {
			dispatch(itemsActions.update());
		},
		remove: () => {
			dispatch(itemsActions.delete());
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