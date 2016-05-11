import React, {PropTypes} from 'react'

const SearchInput = ({i18n, searchString, onChange, entityToken}) => (
	<input
		value={searchString}
		onChange={(e) => onChange(e.target.value)}
		placeholder={i18n(entityToken + '.searchInputPlaceholder')}/>
);

SearchInput.propTypes = {
	i18n: PropTypes.func.isRequired,
	searchString: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	entityToken: PropTypes.string
};

export default SearchInput