import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'

export default {
	getAllTags() {
		return dispatch => {
			apiTags.getAllTags(tags =>
				dispatch({
					type: tagsActionTypes.receiveAllTags,
					tags: tags
				})
			)
		}
	},

	searchTags(searchString) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.searchTags,
				searchString: searchString
			})
		}
	},

	addNewTag() {
		return (dispatch, getState) => {
			apiTags.newTag(getState().tags.newTagName, tag =>
				dispatch({
					type: tagsActionTypes.addNewTag,
					tag: tag
				})
			)
		}
	},
	
	selectTag(tag) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.selectTag,
				tag: tag
			})
		}
	},

	changeTag(tag) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.changeTag,
				tag: tag
			})
		}
	},

	cancelTagChanges() {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.cancelTagChanges
			})
		}
	},

	applyTagChanges() {
		return (dispatch, getState) => {
			apiTags.editTag(getState().tags.changed, tag =>
				dispatch({
					type: tagsActionTypes.applyTagChanges,
					tag: tag
				})
			)
		}
	}
};