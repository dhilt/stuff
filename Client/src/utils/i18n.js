let defaultLang = null;

function getDefaultLang(state) {
	if (!defaultLang) {
		defaultLang = state.app.languages.find(lang => lang.token === state.app.defaultLangToken);
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
			if (lang.token !== state.app.defaultLangToken) {
				return translate(state, getDefaultLang(state), token);
			}
			return tokenItems.join('-');
		}
	}
	return result;
}

export default function i18n(state, token) {
	return translate(state, state.app.lang, token);
};