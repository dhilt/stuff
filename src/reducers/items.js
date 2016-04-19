import {getCommonInitialState, getCommonStateChanges} from './common'
import {itemsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {

});

export default function items(state = initialState, action) {
	
	let stateChanges = getCommonStateChanges(itemsActionTypes, state, action, false);

	return Object.assign({}, state, stateChanges);
}