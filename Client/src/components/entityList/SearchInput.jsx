import React, {PropTypes} from 'react'

import i18n from '../../utils/i18n'

const SearchInput = ({searchString, onChange, entityToken}) => (
	<input
		value={searchString}
		onChange={(e) => onChange(e.target.value)}
		placeholder={i18n.text(entityToken + '.searchInputPlaceholder')}/>
);

SearchInput.propTypes = {
	searchString: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	entityToken: PropTypes.string
};

export default SearchInput