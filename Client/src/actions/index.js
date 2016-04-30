import {indexActionTypes} from './_types'
import apiIndex from './../api/index'

export default {

	openTagList: () => {
		return (dispatch) => {
			dispatch({
				type: indexActionTypes.openTagList
			});
		}
	},

	closeTagList: () => {
		return (dispatch) => {
			dispatch({
				type: indexActionTypes.closeTagList
			});
		}
	},

	searchTags: (searchString) => {
		return (dispatch, getState) => {
			dispatch({
				type: indexActionTypes.searchTags,
				searchString: searchString,
				allTags: getState().tags.all
			});
		}
	},

	clearTags: () => {
		return (dispatch) => {
			dispatch({
				type: indexActionTypes.clearTags
			});
		}
	},


	selectTag: (tag) => {
		return (dispatch) => {
			dispatch({
				type: indexActionTypes.selectTag,
				tag: tag
			});
		}
	},

	removeTag: (tag) => {
		return (dispatch) => {
			dispatch({
				type: indexActionTypes.removeTag,
				tag: tag
			});
		}
	},

	getItems: () => {
		return (dispatch, getState) => {
			let tags = getState().index.selectedTags.map(t => t.id);
			apiIndex.getItemsByTags(tags, items => dispatch({
					type: indexActionTypes.receiveItems,
					items: items
				})
			)
		}
	}
}