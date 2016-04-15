import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import tagsActions from './../actions/tags'
import TagComponent from './../components/Tag'

const mapStateToProps = (state) => {
	return {
		originalTag: state.tags.selected,
		changedTag: state.tags.changed
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (tag) => {
			console.log(tag.name);
			dispatch(tagsActions.changeTag(tag));
		},
		acceptChanges: () => {
			dispatch(tagsActions.applyTagChange());
			browserHistory.push(`/tags`);
		}
	}
};

const Tag = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagComponent);

export default Tag