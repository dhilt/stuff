import {getCommonInitialState, getCommonStateChanges} from './common'
import {tagsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
	all: []
});

export default function tags(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case '@@router/LOCATION_CHANGE':
			if (action.payload.pathname.indexOf('tags') !== 1) {
				stateChanges = Object.assign({}, getCommonInitialState());
			}
			else if (action.payload.pathname === '/tags') {
				stateChanges = {
					selected: null,
					edited: null
				};
			}
			break;

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