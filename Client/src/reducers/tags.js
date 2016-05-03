import {getCommonInitialState, getCommonStateChanges} from './common'
import {tagsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
	path: '/tags',
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
					origin: null,
					edited: null
				};
			}
			else {
				stateChanges = {
					justEditedId: null
				}
			}
			break;

		case tagsActionTypes.receiveAll:
			stateChanges = {
				all: action.all
			};
			break;

		default: 
			stateChanges = getCommonStateChanges(tagsActionTypes, state, action, 'tags');
			break;
	}

	return Object.assign({}, state, stateChanges);
}