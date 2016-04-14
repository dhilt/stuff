import React, {PropTypes} from 'react'

const TagSearchInput = ({onChange}) => (
	<input
		onChange={(e) => onChange(e.target.value)}/>
);

TagSearchInput.propTypes = {
	onChange: PropTypes.func
};

export default TagSearchInput