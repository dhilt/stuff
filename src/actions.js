import apiTags from './api/tags'

export let tagsActionTypes = {
	receiveAllTags: 'RECEIVE_ALL_TAGS',
	addNewTag: 'ADD_NEW_TAG'
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
