import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'

export default {
	getAllTags() {
		return dispatch => {
			apiTags.getAllTags(tags =>
				dispatch({
					type: tagsActionTypes.receiveAll,
					all: tags
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

	receiveFoundTags(searchString) {
		return (dispatch, getState) => {
			let found = searchString ? getState().tags.all.filter(tag => tag.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) : [];
			found.sort((a, b) => a.name.localeCompare(b.name));
			dispatch({
				type: tagsActionTypes.receiveFound,
				found: found
			})
		}
	},

	newTag() {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.new
			})
		}
	},
	
	selectTag(tag) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.select,
				selected: tag
			})
		}
	},

	changeTag(tag) {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.change,
				edited: tag
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
					result: result.tag
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