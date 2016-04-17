import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'
import getCommonActions from './common'

export default Object.assign({}, getCommonActions(tagsActionTypes, apiTags, 'tags'), {
	getAll() {
		return dispatch => {
			apiTags.getAll(tags =>
				dispatch({
					type: tagsActionTypes.receiveAll,
					all: tags
				})
			)
		}	
	}
})