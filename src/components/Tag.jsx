import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

const Tag = ({originalTag, changedTag, onChange, acceptChanges}) => (
	<div className="tag">
		<div>Here you can change "{originalTag.name}"'s name</div>
		<input value={changedTag.name} onChange={(e) => onChange({ name: e.target.value }) } />
		<button onClick={acceptChanges}>Accept</button>
	</div>
);

Tag.propTypes = {
	originalTag: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}),
	changedTag: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}),
	onChange: PropTypes.func,
	acceptChanges: PropTypes.func
};

export default Tag