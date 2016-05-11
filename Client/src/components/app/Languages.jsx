import React, {PropTypes} from 'react'

const Languages = ({languages, lang, selectLang}) => (
	<ul className="languages">
		{languages.map(langItem =>
			<li key={langItem.token}
				className={langItem.token === lang.token ? "selected" : ""}
				onClick={() => {
					if(langItem.token !== lang.token) {
						selectLang(langItem);
					}
				}}>
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
	lang: PropTypes.shape({
		token: PropTypes.string.isRequired,
		translations: PropTypes.object.isRequired,
		get: PropTypes.func.isRequired
	}).isRequired,
	selectLang: PropTypes.func.isRequired
};

export default Languages