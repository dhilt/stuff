import {settingsActionTypes} from './../actions/_types'
import Helper from './_helpers'

let initialState = {
	default: {
		app: {
			language: "ru"
		},
		index: {
			tagsSearchType: "intersect"
		},
		items: {
			itemsPerPage: 10
		}
	},
	released: {},
	edited: {}
};


export default function settings(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case settingsActionTypes.setDefault:
			stateChanges = {
				released: initialState.default,
				edited: initialState.default
			};
			break;

		case settingsActionTypes.change:
			stateChanges = {
				edited: Object.assign({}, state.edited, action.settings)
			};
			break;

		case settingsActionTypes.reset:
			stateChanges = {
				released: action.settings,
				edited: action.settings
			};
			break;

		case settingsActionTypes.apply:
			stateChanges = {
				released: action.settings
			};
			break;
	}

	return Object.assign({}, state, stateChanges);
}