import {settingsActionTypes} from './_types'
import {validate} from '../utils/validation'

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
				type: settingsActionTypes.cancel
			}),

	apply: () =>
		(dispatch) =>
			dispatch({
				type: settingsActionTypes.apply
			})
}