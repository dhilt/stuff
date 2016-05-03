import {getCommonInitialState, getCommonStateChanges, canAddNewRecord} from './common'
import {tagsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
	path: '/tags',
	all: []
});

export default function tags(state = initialState, action) {

	let stateChanges = {};
	let found = [];

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

		case tagsActionTypes.search:
			if (action.searchString) {
				found = state.all.filter(rec => rec.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1);
				found.sort((a, b) => a.name.localeCompare(b.name));
			}
			stateChanges = {
				found: found,
				searchString: action.searchString,
				canAddNew: canAddNewRecord(action.searchString, found),
				origin: null,
				edited: null,
				justEditedId: null
			};
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