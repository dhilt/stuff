import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'
import getCommonActions from './common'

export default Object.assign({}, getCommonActions(tagsActionTypes, apiTags, {state: 'tags', entity: 'tag'}), {
	getAll: () => {
		return (dispatch) => {
			apiTags.getAll(tags =>
				dispatch({
					type: tagsActionTypes.receiveAll,
					all: tags
				})
			)
		};
	},
	
	search: (searchString) => {
		return (dispatch) => {
			dispatch({
				type: tagsActionTypes.search,
				searchString: searchString
			});
		}
	}
})