import {getCommonInitialState, commonReducer} from './common'
import {itemsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {

});

export default function items(state = initialState, action) {
	return commonReducer(itemsActionTypes, state, action);
}