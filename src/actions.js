import apiTags from './api/tags'

export let tagsActionTypes = {
	receiveAllTags: 'RECEIVE_ALL_TAGS',
	addNewTag: 'ADD_NEW_TAG',
	receiveFoundTags: 'RECEIVE_FOUND_TAGS'
};

export function getAllTags() {
	return dispatch => {
		apiTags.getTags(tags =>
			dispatch({
				type: tagsActionTypes.receiveAllTags,
				tags: tags
			})
		)
	}
}

export function findTags(searchString) {
	return (dispatch, getState) => {
		dispatch({
			type: tagsActionTypes.receiveFoundTags,
			searchString: searchString,
			tags: getState().tags.all.filter( tag => tag.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
		})
	}
}

export function addNewTag() {
	return (dispatch, getState) => {
		apiTags.newTag(getState().tags.newTagName, tag =>
			dispatch({
				type: tagsActionTypes.addNewTag,
				tag: tag
			})
		)
	}
}
