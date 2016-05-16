import {tagsActionTypes} from './_types'
import apiTags from './../api/tags'
import getCommonActions from './common'
import auth from '../utils/auth'

export default Object.assign({}, getCommonActions(tagsActionTypes, apiTags, {state: 'tags', entity: 'Tag'}), {
		getAll: () =>
		(dispatch) => {
			let getAllTags = () => {
				dispatch({
					type: tagsActionTypes.receiveAllStart
				});
				apiTags.getAll(getAllTags).then(
					(tags) =>
						dispatch({
							type: tagsActionTypes.receiveAllDone,
							all: tags
						})
					, (e) => {
						//todo dhilt : refactor this, code is needed
						if(e === "Authorization is needed.") {
							auth.pushPending(getAllTags);
						}
						dispatch({
							type: tagsActionTypes.receiveAllFail
						})
					}
				);
			}
			getAllTags();
		},

	search: (searchString) =>
		(dispatch) =>
			dispatch({
				type: tagsActionTypes.search,
				searchString: searchString
			})
})