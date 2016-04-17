import {commonInitialState, commonReducer} from './common'
import {itemsActionTypes} from './../actions/_types'

export default function items(state = commonInitialState, action) {
	return commonReducer(itemsActionTypes, state, action);
}