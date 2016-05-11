import {appActionTypes} from './_types'

import en from '../i18n/en'
import ru from '../i18n/ru'

const getText = (context, token) => {
	let result = null;
	token.split('.').forEach(t => result = result ? result[t] : context[t]);
	return result;
}

const languages = [ 
	{token: 'en', translations: en, get: (token) => getText(en, token)},
	{token: 'ru', translations: ru, get: (token) => getText(ru, token)}
];

export default {

	loadAllLanguages: () => {
		return (dispatch) => {
			dispatch({
				type: appActionTypes.receiveAllLanguages,
				all: languages
			});
		}
	},

	selectLanguage: (lang) => {
		return (dispatch) => {
			dispatch({
				type: appActionTypes.selectLanguage,
				selected: lang
			});
		}
	}

}