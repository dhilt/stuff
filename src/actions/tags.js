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
		return (dispatch, getState) => {
			dispatch({
				type: tagsActionTypes.search,
				searchString: searchString
			});
			let found = searchString ? getState().tags.all.filter(item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) : [];
			found.sort((a, b) => a.name.localeCompare(b.name));
			dispatch({
				type: tagsActionTypes.receiveFound,
				found: found
			});
		}
	}
})