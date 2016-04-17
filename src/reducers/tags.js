import {getCommonStuffInitialState, commonStuffReducer} from './common';
import {tagsActionTypes} from './../actions/_types';

let initialState = Object.assign({}, getCommonStuffInitialState(), {
	all: []
});

export default function tags(state = initialState, action) {
	return commonStuffReducer(tagsActionTypes, state, action);
}