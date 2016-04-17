import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'

export default {
	getAllTags() {
		return dispatch => {
			apiTags.getAllTags(tags =>
				dispatch({
					type: tagsActionTypes.receiveAll,
					tags: tags
				})
			)
		}
	},

	searchTags(searchString) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.search,
				searchString: searchString
			})
		}
	},

	newTag() {
		return (dispatch, getState) => {
			dispatch({
				type: tagsActionTypes.new
			})
		}
	},
	
	selectTag(tag) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.select,
				tag: tag
			})
		}
	},

	changeTag(tag) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.change,
				tag: tag
			})
		}
	},

	cancelTagChanges() {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.cancelChanges
			})
		}
	},

	applyTagChanges() {
		return (dispatch, getState) => {
			apiTags.pushTag(getState().tags.edited, result =>
				dispatch({
					type: result.isNew ? tagsActionTypes.receiveAdded : tagsActionTypes.receiveChanged,
					tag: result.tag
				})
			)
		}
	},

	deleteTag() {
		return (dispatch, getState) => {
			apiTags.deleteTag(getState().tags.edited.id, result =>
				dispatch({
					type: tagsActionTypes.delete,
					id: result.id
				})
			)
		}
	}
};