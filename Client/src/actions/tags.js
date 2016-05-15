import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'
import getCommonActions from './common'

export default Object.assign({}, getCommonActions(tagsActionTypes, apiTags, {state: 'tags', entity: 'Tag'}), {
	getAll: () =>
		(dispatch) =>
			apiTags.getAll().then(tags =>
				dispatch({
					type: tagsActionTypes.receiveAll,
					all: tags
				})
			),

	search: (searchString) =>
		(dispatch) =>
			dispatch({
				type: tagsActionTypes.search,
				searchString: searchString
			})
})