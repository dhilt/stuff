import {settingsActionTypes} from './_types'

export default {
	change: (settings) =>
		(dispatch) =>
			dispatch({
				type: settingsActionTypes.change,
				settings: settings
			})
}