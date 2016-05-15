import {itemsActionTypes} from './_types'
import apiItems from './../api/items'
import getCommonActions from './common'
import {browserHistory} from 'react-router'
import popup from '../utils/popup'

export default Object.assign({}, getCommonActions(itemsActionTypes, apiItems, {state: 'items', entity: 'Item'}), {

	select: (selected) =>
		(dispatch, getState) => {
			dispatch({
				type: itemsActionTypes.select
			});
			return apiItems.getById(selected.id).then(item => {
					dispatch({
						type: itemsActionTypes.receiveSelected,
						selected: item,
						allTags: getState().tags.all
					});
					browserHistory.push(`/items/${item.id}`);
				}, () => {
					dispatch({
						type: itemsActionTypes.cancelSelect
					});
					popup.show({
						messageToken: 'Items.actions.selectFail',
						level: 'error'
					});
				}
			);
		},

	search: (searchParams) =>
		(dispatch) => {
			dispatch({
				type: itemsActionTypes.search,
				searchString: searchParams.searchString
			});
			if (searchParams.searchString) {
				apiItems.search(searchParams).then(items =>
					dispatch({
						type: itemsActionTypes.receiveFound,
						found: items
					})
				);
			}
		},

	addNew() {
		return this.create((dispatch, getState, newRecord) =>
			dispatch({
				type: itemsActionTypes.receiveAddedAndCreateNew,
				result: newRecord
			})
		)
	},

	searchTags: (searchString) =>
		(dispatch, getState) =>
			dispatch({
				type: itemsActionTypes.searchTags,
				searchString: searchString,
				allTags: searchString ? getState().tags.all : null
			}),

	addTag: (tag) =>
		(dispatch) =>
			dispatch({
				type: itemsActionTypes.addTag,
				tag: tag
			}),

	removeTag: (tag) =>
		(dispatch) =>
			dispatch({
				type: itemsActionTypes.removeTag,
				tag: tag
			})

})