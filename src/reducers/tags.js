import {getCommonInitialState, getCommonStateChanges} from './common'
import {tagsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
	all: []
});

export default function tags(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case tagsActionTypes.receiveAll:
			stateChanges = {
				all: action.all
			};
			break;

		default: 
			stateChanges = getCommonStateChanges(tagsActionTypes, state, action, true);
			break;
	}

	return Object.assign({}, state, stateChanges);
}