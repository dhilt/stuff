import React, {PropTypes} from 'react'

const SearchInput = ({searchString, onChange, entityToken}) => (
	<input
		value={searchString}
		onChange={(e) => onChange(e.target.value)}
		placeholder={"start search " + entityToken}/>
);

SearchInput.propTypes = {
	searchString: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	entityToken: PropTypes.string
};

export default SearchInput