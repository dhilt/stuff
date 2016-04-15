import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

const Tag = ({tag, onChange, acceptChanges}) => (
	<div className="tags">
		<input value={tag.name} onChange={(e) => onChange(e.target.value)} />
		<button onClick={acceptChanges}>Accept</button>
	</div>
);

Tag.propTypes = {
	tag: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}),
	onChange: PropTypes.func,
	acceptChanges: PropTypes.func
};

export default Tag