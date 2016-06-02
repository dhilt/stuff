import {settingsActionTypes} from './_types'
import {validate} from '../utils/validation'
import popup from '../utils/popup'
import cookie from '../utils/cookie'

export default {
	setDefault: () =>
		(dispatch) =>
			dispatch({
				type: settingsActionTypes.setDefault
			}),

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

	cancel: () =>
		(dispatch) =>
			dispatch({
				type: settingsActionTypes.cancel,
				settings: JSON.parse(cookie.getValue('settings'))
			}),

	apply: (settings) => {
		cookie.save('settings', JSON.stringify(settings), 365 * 24);
		popup.show({
			messageToken: 'Settings.actions.saved',
			level: 'success'
		});
		return (dispatch) =>
			dispatch({
				type: settingsActionTypes.apply,
				settings: settings
			})
	}
}