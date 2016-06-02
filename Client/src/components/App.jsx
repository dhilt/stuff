import React, {PropTypes} from 'react'
import Menu from './app/Menu'
import Languages from './app/Languages'

require('../styles/modules/app.scss');

const App = ({i18n, logout, languages, lang, selectLang}) => {
	return (
		<div className="header">
			<Menu i18n={i18n} logout={logout}/>
			<Languages languages={languages} lang={lang} selectLang={selectLang}/>
		</div>
	);
};

App.propTypes = {
	i18n: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	languages: PropTypes.arrayOf(PropTypes.shape({
		token: PropTypes.string.isRequired,
		translations: PropTypes.object.isRequired
	})).isRequired,
	lang: PropTypes.string.isRequired,
	selectLang: PropTypes.func.isRequired
};

export default App;