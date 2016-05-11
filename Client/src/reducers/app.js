import {appActionTypes} from './../actions/_types'
import Helper from './_helpers'

let initialState = {
	languages: [],
	lang: null,
	defaultLangToken: 'en'
};


export default function tags(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case appActionTypes.receiveAllLanguages:
			stateChanges = {
				languages: action.all,
				lang: Helper.findLang(action.all, state.defaultLangToken)
			};
			break;

		case appActionTypes.selectLanguage:
			stateChanges = {
				lang: action.selected
			};
			break;
	}

	return Object.assign({}, state, stateChanges);
}