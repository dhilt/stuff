let defaultLang = null;

function getDefaultLang(state) {
	if (!defaultLang) {
		defaultLang = state.app.languages.find(lang => lang.token === state.settings.default.app.language);
	}
	return defaultLang;
}

function translate(state, lang, token) {
	let result = null;
	let tokenItems = token.split('.');
	for (let i = 0; i < tokenItems.length; i++) {
		let tokenItem = tokenItems[i];
		result = result ? result[tokenItem] : lang.translations[tokenItem];
		if (result === undefined) {
			if (lang.token !== state.settings.default.app.language) {
				return translate(state, getDefaultLang(state), token);
			}
			return tokenItems.join('-');
		}
	}
	return result;
}

export default function i18n(state, token) {
	let language = state.app.languages.find(l => l.token === state.settings.released.app.language);
	return translate(state, language, token);
};