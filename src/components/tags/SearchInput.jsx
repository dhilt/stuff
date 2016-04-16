import React, {PropTypes} from 'react'

const SearchInput = ({searchString, onChange}) => (
	<input
		value={searchString}
		onChange={(e) => onChange(e.target.value)}/>
);

SearchInput.propTypes = {
	searchString: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default SearchInput