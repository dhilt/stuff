import React, {PropTypes} from 'react';

let canAccept = (src, target) => {
	if (!target.name)
		return false;
	if (!src || !target.id)
		return true;
	if (src.name !== target.name)
		return true;
	if (src.description !== target.description)
		return true;
	if (src.tags && src.tags.length) { // when entity is an item
		if (src.tags.length === target.tags.length) {
			return false;
		}
		if(target.tags.find(t => src.tags.indexOf(t.id) !== -1)) {
			return true;
		}
	}
	return false;
};

const Controls = ({original, edited, cancelChanges, acceptChanges, remove}) => (
	<div className="controls">
		<button onClick={cancelChanges}>Cancel</button>
		{
			edited.id ? <button onClick={remove}>Delete</button> : null
		}
		<button disabled={!canAccept(original, edited)} onClick={acceptChanges}>Accept</button>
	</div>
);

Controls.propTypes = {
	original: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	edited: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	cancelChanges: PropTypes.func.isRequired,
	acceptChanges: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired
};

export default Controls