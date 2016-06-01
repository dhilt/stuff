import {settingsActionTypes} from './../actions/_types'
import Helper from './_helpers'

let initialState = {
	default: {
		items: {
			itemsPerPage: 10
		}
	},
	released: {},
	edited: {},
	apply: false
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

		case settingsActionTypes.apply:
			stateChanges = {
				settings: action.settings
			};
			break;
	}

	return Object.assign({}, state, stateChanges);
}