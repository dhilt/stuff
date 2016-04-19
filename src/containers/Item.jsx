import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import itemsActions from './../actions/items'
import ItemComponent from './../components/Item'

const mapStateToProps = (state) => {
	return {
		original: state.items.selected,
		changed: state.items.edited
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		doChange: (item) => {
			dispatch(itemsActions.change(item));
		},
		cancelChanges: () => {
			dispatch(itemsActions.cancelChanges());
			browserHistory.push(`/items`);
		},
		acceptChanges: () => {
			dispatch(itemsActions.applyChanges());
			browserHistory.push(`/items`);
		},
		remove: () => {
			dispatch(itemsActions.delete());
			browserHistory.push(`/items`);
		}
	}
};

const Item = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemComponent);

export default Item