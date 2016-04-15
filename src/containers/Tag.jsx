import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import tagsActions from './../actions/tags'
import TagComponent from './../components/Tag'

const mapStateToProps = (state) => {
	return {
		tag: state.tags.selected
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (newName) => {
			dispatch(tagsActions.changeSelectedTagName(newName));
		},
		acceptChanges: () => {
			dispatch(tagsActions.acceptSelectedTagChanges());
			browserHistory.push(`/tags`);
		}
	}
};

const Tag = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagComponent);

export default Tag