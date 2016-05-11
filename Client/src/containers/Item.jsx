import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import i18n from '../utils/i18n'
import itemsActions from './../actions/items'
import ItemComponent from './../components/Item'

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token),
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
		addNew: () => {
			dispatch(itemsActions.addNew());
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