import React, {PropTypes} from 'react'

const TagAddNew = ({onClick, disabled}) => (
	<div className="tagAddNew">
		<button
			onClick={onClick}
			disabled={!!disabled}> +
		</button>
	</div>
);

TagAddNew.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool
};

export default TagAddNew