import {itemsActionTypes} from './_types'
import apiItems from './../api/items'
import getCommonActions from './common'

export default Object.assign({}, getCommonActions(itemsActionTypes, apiItems, {state: 'items', entity: 'item'}), {

	select: (selected) => {
		return (dispatch, getState) => {
			return apiItems.getById(selected.id, item => {
					dispatch({
						type: itemsActionTypes.select,
						selected: item,
						allTags: getState().tags.all
					});
				}
			)
		}
	},

	search: (searchParams) => {
		return dispatch => {
			dispatch({
				type: itemsActionTypes.search,
				searchString: searchParams.searchString
			});
			if(searchParams.searchString) {
				apiItems.search(searchParams, items =>
					dispatch({
						type: itemsActionTypes.receiveFound,
						found: items
					})
				)
			}
		}
	},

	searchTags: (searchString) => { // todo dhilt : think about generalization with ./actions/tags/search AND moving this logic into reducers
		return (dispatch, getState) => {
			dispatch({
				type: itemsActionTypes.searchTags,
				searchString: searchString
			});
			let found = [];
			if(searchString) {
				let itemTags = getState().items.edited.tags || [];
				found = getState().tags.all.filter(tag => tag.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 && !itemTags.find( t => t.id === tag.id ));
				found.sort((a, b) => a.name.localeCompare(b.name));
			}
			dispatch({
				type: itemsActionTypes.receiveFoundTags,
				found: found
			});
		}
	},

	addTag: (tag) => {
		return (dispatch) => {
			dispatch({
				type: itemsActionTypes.addTag,
				tag: tag
			})
		}
	},

	removeTag: (tag) => {
		return (dispatch) => {
			dispatch({
				type: itemsActionTypes.removeTag,
				tag: tag
			})
		}
	}

})