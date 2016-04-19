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

const Controls = ({original, changed, cancelChanges, acceptChanges, remove}) => (
	<div className="controls">
		<button onClick={cancelChanges}>Cancel</button>
		{
			changed.id ? <button onClick={remove}>Delete</button> : null
		}
		<button disabled={!canAccept(original, changed)} onClick={acceptChanges}>Accept</button>
	</div>
);

Controls.propTypes = {
	original: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	changed: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	cancelChanges: PropTypes.func.isRequired,
	acceptChanges: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired
};

export default Controls