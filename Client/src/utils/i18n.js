import en from '../i18n/en'
import ru from '../i18n/ru'

const languages = [
	{token: 'en', translations: en},
	{token: 'ru', translations: ru}
];
const findLang = (langToken) => languages.find(lang => lang.token === langToken);
const defaultLang = findLang('en');

class I18n {
	constructor(langToken) {
		this.setLang(langToken);
	}

	getAllLanguages() {
		return languages;
	}

	setLang(langToken) {
		this.lang = findLang(langToken) || defaultLang;
	}

	getLangToken() {
		return this.lang.token;
	}

	text(token) {
		let result = null;
		token.split('.').forEach(t => result = result ? result[t] : this.lang.translations[t]);
		return result;
	}
}

const i18n = new I18n();

export default i18n;