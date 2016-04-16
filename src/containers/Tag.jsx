import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import tagsActions from './../actions/tags'
import TagComponent from './../components/Tag'

const mapStateToProps = (state) => {
	return {
		originalTag: state.tags.selected,
		changedTag: state.tags.edited
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		doChange: (tag) => {
			dispatch(tagsActions.changeTag(tag));
		},
		cancelChanges: () => {
			dispatch(tagsActions.cancelTagChanges());
			browserHistory.push(`/tags`);
		},
		acceptChanges: () => {
			dispatch(tagsActions.applyTagChanges());
			browserHistory.push(`/tags`);
		}
	}
};

const Tag = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagComponent);

export default Tag