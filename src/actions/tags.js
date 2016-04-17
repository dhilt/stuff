import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'
import {commonActions} from './common'

let actions = commonActions(tagsActionTypes, apiTags, 'tags');

actions = Object.assign({}, actions, {
	getAll: () => {
		return dispatch => {
			apiTags.getAll(tags =>
				dispatch({
					type: tagsActionTypes.receiveAll,
					all: tags
				})
			)
		}	
	}
});

export default actions;