import {settingsActionTypes} from './../actions/_types'
import Helper from './_helpers'

let initialState = {
	settings: null
};


export default function settings(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case settingsActionTypes.change:
			stateChanges = {
				settings: action.settings
			};
			break;
	}
	
	return Object.assign({}, state, stateChanges);
}