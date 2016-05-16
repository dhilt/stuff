import {getCommonInitialState, getCommonStateChanges} from './common'
import {tagsActionTypes} from './../actions/_types'
import Helper from './_helpers'

let initialState = Object.assign({}, getCommonInitialState(), {
	path: '/tags',
	receiving: false,
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
				found = state.all.filter(rec => Helper.satisfySearch(rec.name, action.searchString));
				found.sort((a, b) => a.name.localeCompare(b.name));
			}
			stateChanges = {
				found: found,
				searchString: action.searchString,
				canAddNew: Helper.canAddNewRecord(action.searchString, found),
				origin: null,
				edited: null,
				justEditedId: null
			};
			break;

		case tagsActionTypes.receiveAllStart:
			stateChanges = {
				receiving: true
			};
			break;

		case tagsActionTypes.receiveAllDone:
			stateChanges = {
				receiving: true,
				all: action.all
			};
			break;

		case tagsActionTypes.receiveAllFail:
			stateChanges = {
				receiving: false
			};
			break;

		default: 
			stateChanges = getCommonStateChanges(tagsActionTypes, state, action, 'tags');
			break;
	}

	return Object.assign({}, state, stateChanges);
}