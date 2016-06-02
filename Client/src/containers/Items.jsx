import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import i18n from '../utils/i18n'
import itemsActions from './../actions/items'
import ItemsComponent from './../components/Items'

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token),
		searching: state.items.searching,
		found: state.items.found,
		countPerPage: state.settings.released.items.itemsPerPage,
		countBefore: state.items.countBefore,
		countAfter: state.items.countAfter,
		searchString: state.items.searchString,
		canAddNew: state.items.canAddNew,
		origin: state.items.origin,
		edited: state.items.edited,
		justEditedId: state.items.justEditedId
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputChange: (searchString) => 
			dispatch(itemsActions.search({searchString: searchString}))
		,
		getPage: (pageNumber) =>
			dispatch(itemsActions.getPage(pageNumber))
		,
		onAddNewClick: (newName) => 
			dispatch(itemsActions.new(newName))
		,
		onSelect: (item) => 
			dispatch(itemsActions.select(item))
	}
};

const Items = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsComponent);

export default Items