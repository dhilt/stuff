import {settingsActionTypes} from './_types'

export default {
	setDefault: () =>
		(dispatch) =>
			dispatch({
				type: settingsActionTypes.setDefault
			}),

	change: (token, value, options) => {
		// validation
		if(options.number) {
			value = parseInt(value, 10);
		}
		if(isNaN(value)) {
			value = 0;
		}
		if(options.hasOwnProperty('min') && value < options.min) {
			value = options.min;
		}

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