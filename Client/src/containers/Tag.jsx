import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import tagsActions from './../actions/tags'
import TagComponent from './../components/Tag'

const mapStateToProps = (state) => {
	return {
		original: state.tags.selected,
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
			browserHistory.push(`/tags`);
		},
		create: () => {
			dispatch(tagsActions.create());
			browserHistory.push(`/tags`);
		},
		update: () => {
			dispatch(tagsActions.update());
			browserHistory.push(`/tags`);
		},
		remove: () => {
			dispatch(tagsActions.delete());
			browserHistory.push(`/tags`);
		}
	}
};

const Tag = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagComponent);

export default Tag