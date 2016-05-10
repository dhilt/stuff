import en from '../i18n/en'
import ru from '../i18n/ru'

const languages = [
	{lang: 'en', translation: en},
	{lang: 'ru', translation: ru}
];
const findLang = (lang) => languages.find(l => l.lang === lang);
const defaultLang = findLang('en');

class I18n {
	constructor(lang) {
		this.setLang(lang);
	}

	setLang(lang) {
		this.lang = findLang(lang) || defaultLang;
	}

	text(token) {
		let result = null;
		token.split('.').forEach( t => result = result ? result[t] : this.lang.translation[t]);
		return result;
	}
}

const i18n = new I18n();

export default i18n;