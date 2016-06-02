import {indexActionTypes} from './_types'
import apiIndex from './../api/index'

export default {

	openTagList: () =>
		(dispatch) =>
			dispatch({
				type: indexActionTypes.openTagList
			}),

	closeTagList: () =>
		(dispatch) =>
			dispatch({
				type: indexActionTypes.closeTagList
			}),

	searchTags: (searchString) =>
		(dispatch, getState) =>
			dispatch({
				type: indexActionTypes.searchTags,
				searchString: searchString,
				allTags: getState().tags.all
			}),

	changeSearchType: (searchType) =>
		(dispatch) =>
			dispatch({
				type: indexActionTypes.changeSearchType,
				searchType: searchType
			}),

	clearTags: () =>
		(dispatch) =>
			dispatch({
				type: indexActionTypes.clearTags
			}),


	selectTag: (tag) =>
		(dispatch) =>
			dispatch({
				type: indexActionTypes.selectTag,
				tag: tag
			}),

	removeTag: (tag) =>
		(dispatch) =>
			dispatch({
				type: indexActionTypes.removeTag,
				tag: tag
			}),

	getItems: () =>
		(dispatch, getState) => {
			let tags = getState().index.selectedTags.map(t => t.id);
			let searchType = getState().settings.released.index.tagsSearchType;
			if (tags && tags.length) {
				apiIndex.getItemsByTags(tags, searchType).then(items => dispatch({
						type: indexActionTypes.receiveItems,
						items: items
					})
				);
			}
			else {
				dispatch({
					type: indexActionTypes.receiveItems,
					items: []
				});
			}
		}
}