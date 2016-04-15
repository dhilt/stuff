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
	}
};