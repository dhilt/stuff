import {getCommonInitialState, commonReducer} from './common'
import {tagsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
	all: []
});

export default function tags(state = initialState, action) {
	return commonReducer(tagsActionTypes, state, action);
}