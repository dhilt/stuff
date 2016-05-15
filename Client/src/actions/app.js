import {appActionTypes} from './_types'

import en from '../i18n/en'
import ru from '../i18n/ru'

const languages = [
	{token: 'en', translations: en},
	{token: 'ru', translations: ru}
];

export default {

	loadAllLanguages: () =>
		(dispatch) =>
			dispatch({
				type: appActionTypes.receiveAllLanguages,
				all: languages
			}),

	selectLanguage: (lang) =>
		(dispatch) =>
			dispatch({
				type: appActionTypes.selectLanguage,
				selected: lang
			})
}