import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import itemsActions from './../actions/items'
import ItemsComponent from './../components/Items'

const mapStateToProps = (state) => {
	return {
		searching: state.items.searching,
		found: state.items.found,
		searchString: state.items.searchString,
		canAddNew: state.items.canAddNew,
		selected: state.items.selected,
		edited: state.items.edited
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputChange: (searchString) => {
			dispatch(itemsActions.search({ searchString: searchString }));
		},
		onAddNewClick: () => {
			dispatch(itemsActions.new());
			browserHistory.push(`/items/new`);
		},
		onSelect: (item) => {
			dispatch(itemsActions.select(item)).then(() => {
				dispatch(itemsActions.setItemTags(item));
				browserHistory.push(`/items/${item.id}`);
			}, r => console.log(r));
		}
	}
};

const Items = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsComponent);

export default Items