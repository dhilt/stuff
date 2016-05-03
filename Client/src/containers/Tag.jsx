import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import tagsActions from './../actions/tags'
import TagComponent from './../components/Tag'

const mapStateToProps = (state) => {
	return {
		original: state.tags.origin,
		edited: state.tags.edited
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		doLocalChange: (tag) => {
			dispatch(tagsActions.change(tag));
		},
		cancelLocalChanges: () => {
			dispatch(tagsActions.cancelChanges()); 
		},
		create: () => {
			dispatch(tagsActions.create());
		},
		update: () => {
			dispatch(tagsActions.update());
		},
		remove: () => {
			dispatch(tagsActions.delete());
		}
	}
};

const Tag = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagComponent);

export default Tag