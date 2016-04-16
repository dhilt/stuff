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

	newTag() {
		return (dispatch, getState) => {
			dispatch({
				type: tagsActionTypes.newTag
			})
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
			apiTags.editTag(getState().tags.edited, result =>
				dispatch({
					type: result.isNew ? tagsActionTypes.receiveAddedTag : tagsActionTypes.receiveChangedTag,
					tag: result.tag
				})
			)
		}
	},

	deleteTag() {
		return (dispatch, getState) => {
			apiTags.deleteTag(getState().tags.edited.id, result =>
				dispatch({
					type: tagsActionTypes.deleteTag,
					id: result.id
				})
			)
		}
	}
};