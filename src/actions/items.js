import {itemsActionTypes} from './_types'
import apiItems from './../api/items'
import getCommonActions from './common'

export default Object.assign({}, getCommonActions(itemsActionTypes, apiItems, 'items'), {
	search(searchParams) {
		return dispatch => {
			dispatch({
				type: itemsActionTypes.search,
				searchString: searchParams.searchString
			});
			apiItems.search(searchParams, items =>
				dispatch({
					type: itemsActionTypes.receiveFound,
					found: items
				})
			)
		}
	}
})