import React, {PropTypes} from 'react';

let props = ['id', 'name', 'description'];
let canAccept = (src, target) => {
	if (!target.name)
		return false;
	if (!src || !target.id)
		return true;
	for (let prop of props)
		if (src[prop] !== target[prop])
			return true;
	return false;
};

const TagControls = ({originalTag, changedTag, cancelChanges, acceptChanges}) => (
	<div className="controls">
		<button onClick={cancelChanges}>Cancel</button>
		<button disabled={!canAccept(originalTag, changedTag)} onClick={acceptChanges}>Accept</button>
	</div>
);

TagControls.propTypes = {
	originalTag: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	changedTag: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	cancelChanges: PropTypes.func,
	acceptChanges: PropTypes.func
};

export default TagControls