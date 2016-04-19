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
		doChange: (tag) => {
			dispatch(tagsActions.change(tag));
		},
		cancelChanges: () => {
			dispatch(tagsActions.cancelChanges()); 
			browserHistory.push(`/tags`);
		},
		acceptChanges: () => {
			dispatch(tagsActions.applyChanges());
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