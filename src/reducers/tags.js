import {commonStuffInitialState, commonStuffReducer} from './common';
import {tagsActionTypes} from './../actions/_types';

export default function tags(state = commonStuffInitialState, action) {
	return commonStuffReducer(tagsActionTypes, state, action);
}