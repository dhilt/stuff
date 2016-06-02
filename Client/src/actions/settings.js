import {settingsActionTypes} from './_types'
import {validate} from '../utils/validation'
import popup from '../utils/popup'
import cookie from '../utils/cookie'

export default {

	change: (token, value, options) => {
		value = validate(value, options);

		// object parsing
		let settings = {};
		let chain = token.split('.');
		chain.reduce((p, c, i) => p[c] = chain.length - 1 === i ? value : {}, settings);

		return (dispatch) =>
			dispatch({
				type: settingsActionTypes.change,
				settings: settings
			})
	},

	reset: (silently) =>
		(dispatch, getState) => {
			let _default = getState().settings.default;
			let settingsJSON = cookie.getValue('settings') || '{}';
			let settings = JSON.parse(settingsJSON);
			// missied settings should be set by default
			settings = Object.assign({}, _default, settings);
			if(!silently) {
				popup.show({
					messageToken: 'Settings.actions.restored',
					level: 'success'
				});
			}
			return dispatch({
				type: settingsActionTypes.reset,
				settings: settings
			});
		},

	setDefault: () =>
		(dispatch) =>
			dispatch({
				type: settingsActionTypes.setDefault
			}),

	apply: (silently) => 
		(dispatch, getState) => {
			let settings = getState().settings.edited;
			cookie.save('settings', JSON.stringify(settings), 365 * 24);
			if(!silently) {
				popup.show({
					messageToken: 'Settings.actions.saved',
					level: 'success'
				});	
			}
			return dispatch({
				type: settingsActionTypes.apply,
				settings: settings
			});
		}
}