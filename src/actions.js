import apiTags from './api/tags'

export let tagsActionTypes = {
	receiveAllTags: 'RECEIVE_ALL_TAGS',
	changeSearchInput: 'CHANGE_SEARCH_INPUT',
	addNewTag: 'ADD_NEW_TAG',
	receiveFoundTags: 'RECEIVE_FOUND_TAGS'
};

export let tagsActions = {
	getAllTags: () => {
		return dispatch => {
			apiTags.getAllTags(tags =>
				dispatch({
					type: tagsActionTypes.receiveAllTags,
					tags: tags
				})
			)
		}
	},

	searchTags: (searchString) => {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.changeSearchInput,
				searchString: searchString
			})
		}
	},

	addNewTag: () => {
		return (dispatch, getState) => {
			apiTags.newTag(getState().tags.newTagName, tag =>
				dispatch({
					type: tagsActionTypes.addNewTag,
					tag: tag
				})
			)
		}
	}
};