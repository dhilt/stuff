import React, {PropTypes} from 'react'

const Languages = ({languages, lang, selectLang}) => (
	<ul className="languages">
		{languages.map(langItem =>
			<li key={langItem.token}
					className={langItem.token === lang ? "selected" : ""}
					onClick={() => (langItem.token !== lang) ? selectLang(langItem.token) : null}>
				{langItem.token}
			</li>
		)}
	</ul>
);

Languages.propTypes = {
	languages: PropTypes.arrayOf(PropTypes.shape({
		token: PropTypes.string.isRequired,
		translations: PropTypes.object.isRequired
	})).isRequired,
	lang: PropTypes.string.isRequired,
	selectLang: PropTypes.func.isRequired
};

export default Languages