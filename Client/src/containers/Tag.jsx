import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import i18n from '../utils/i18n'
import tagsActions from './../actions/tags'
import TagComponent from './../components/Tag'

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token),
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
		},
		addNew: () => {
			dispatch(tagsActions.addNew());
		}
	}
};

const Tag = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagComponent);

export default Tag