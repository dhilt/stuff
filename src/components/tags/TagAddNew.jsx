import React, {PropTypes} from 'react'

const TagAddNew = ({onClick, disabled}) => (
	<button className="tagAddNew"
		onClick={onClick}
		disabled={!!disabled}> +
	</button>
);

TagAddNew.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool
};

export default TagAddNew