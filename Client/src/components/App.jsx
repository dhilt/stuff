import React, {PropTypes} from 'react'
import Menu from './app/Menu'
import Languages from './app/Languages'

require('../styles/modules/app.scss');

const App = ({i18n, languages, lang, selectLang}) => {
	return (
		<div>
			<Menu i18n={i18n}/>
			<Languages languages={languages} lang={lang} selectLang={selectLang}/>
		</div>
	);
};

App.propTypes = {
	i18n: PropTypes.func.isRequired,
	languages: PropTypes.arrayOf(PropTypes.shape({
		token: PropTypes.string.isRequired,
		translations: PropTypes.object.isRequired
	})).isRequired,
	lang: PropTypes.shape({
		token: PropTypes.string.isRequired,
		translations: PropTypes.object.isRequired
	}).isRequired,
	selectLang: PropTypes.func.isRequired
};

export default App;