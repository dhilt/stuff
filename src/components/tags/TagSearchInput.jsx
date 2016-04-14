import React, {PropTypes} from 'react'

const TagSearchInput = ({searchString, onChange}) => (
	<input
		value={searchString}
		onChange={(e) => onChange(e.target.value)}/>
);

TagSearchInput.propTypes = {
	searchString: PropTypes.string,
	onChange: PropTypes.func
};

export default TagSearchInput