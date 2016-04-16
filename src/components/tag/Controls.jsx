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

const Controls = ({originalTag, changedTag, cancelChanges, acceptChanges, deleteTag}) => (
	<div className="controls">
		<button onClick={cancelChanges}>Cancel</button>
		{
			changedTag.id ? <button onClick={deleteTag}>Delete</button> : null
		}
		<button disabled={!canAccept(originalTag, changedTag)} onClick={acceptChanges}>Accept</button>
	</div>
);

Controls.propTypes = {
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
	cancelChanges: PropTypes.func.isRequired,
	acceptChanges: PropTypes.func.isRequired,
	deleteTag: PropTypes.func.isRequired
};

export default Controls