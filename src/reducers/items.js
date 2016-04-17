import {commonStuffInitialState, commonStuffReducer} from './common';
import {itemsActionTypes} from './../actions/_types';

export default function items(state = commonStuffInitialState, action) {
	return commonStuffReducer(itemsActionTypes, state, action);
}