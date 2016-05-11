import React, {PropTypes} from 'react'

const AddNew = ({onClick, disabled}) => (
	<button className="addNew"
					onClick={onClick}
					disabled={!!disabled}> +
	</button>
);

AddNew.propTypes = {
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool
};

export default AddNew