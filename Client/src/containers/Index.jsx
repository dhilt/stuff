import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import i18n from '../utils/i18n'
import indexActions from './../actions/index'
import itemsActions from './../actions/items'
import settingsActions from './../actions/settings'
import IndexComponent from './../components/Index'

const mapStateToProps = (state) => {
	return {
		i18n: (token) => i18n(state, token),
		searchString: state.index.searchString,
		searchType: state.settings.released.index.tagsSearchType,
		isTagListOpened: state.index.isTagListOpened,
		tagsToSelect: state.index.tagsToSelect,
		selectedTags: state.index.selectedTags,
		searching: state.index.searching,
		items: state.index.items,
		justEditedItemId: state.index.justEditedItemId
	}
};

let focus = false;

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputFocus: () => {
			dispatch(indexActions.openTagList());
		},
		onOutsideTagsClick: () => {
			dispatch(indexActions.closeTagList());
		},
		onSearchInputChange: (searchString) => {
			dispatch(indexActions.searchTags(searchString));
		},
		changeSearchType: (newSearchType) => {
			dispatch(settingsActions.change('index.tagsSearchType', newSearchType, { required: true, exact: ['union', 'intersect']}));
			dispatch(settingsActions.apply(true));
			dispatch(indexActions.getItems());
		},
		selectTag: (tag) => {
			dispatch(indexActions.selectTag(tag));
			dispatch(indexActions.getItems());
		},
		removeTag: (tag) => {
			dispatch(indexActions.removeTag(tag));
			dispatch(indexActions.getItems());
		},
		clearTags: () => {
			dispatch(indexActions.clearTags());
		},
		clickOnItem: (item) => {
			dispatch(itemsActions.select(item)).then((result) => {
				browserHistory.push(`/items/${item.id}`);
			}, r => console.log(r));
		}
	}
};

const Index = connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexComponent);

export default Index