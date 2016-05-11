import {itemsActionTypes} from './_types'
import apiItems from './../api/items'
import getCommonActions from './common'

export default Object.assign({}, getCommonActions(itemsActionTypes, apiItems, {state: 'items', entity: 'Item'}), {

	select: (selected) => {
		return (dispatch, getState) => {
			dispatch({
				type: itemsActionTypes.select
			});
			return apiItems.getById(selected.id, item => dispatch({
					type: itemsActionTypes.receiveSelected,
					selected: item,
					allTags: getState().tags.all
				})
				, () => dispatch({
					type: itemsActionTypes.cancelSelect
				})
			)
		}
	},

	search: (searchParams) => {
		return dispatch => {
			dispatch({
				type: itemsActionTypes.search,
				searchString: searchParams.searchString
			});
			if (searchParams.searchString) {
				apiItems.search(searchParams, items =>
					dispatch({
						type: itemsActionTypes.receiveFound,
						found: items
					})
				)
			}
		}
	},

	addNew() {
		return this.create((dispatch, getState, newRecord) => {
			dispatch({
				type: itemsActionTypes.receiveAddedAndCreateNew,
				result: newRecord
			})
		})
	},

	searchTags: (searchString) => {
		return (dispatch, getState) => {
			dispatch({
				type: itemsActionTypes.searchTags,
				searchString: searchString,
				allTags: searchString ? getState().tags.all : null
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