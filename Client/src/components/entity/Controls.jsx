import React, {PropTypes} from 'react';

require('../../styles/modules/common/controls.scss');

let canAccept = (src, target) => {
	if (!target.name)
		return false;
	if (!src || !target.id)
		return true;
	if (src.name !== target.name)
		return true;
	if (src.description !== target.description)
		return true;
	if (Array.isArray(src.tags)) { // when entity is an item
		if (src.tags.length !== target.tags.length) {
			return true;
		}
		if(target.tags.find(t => src.tags.indexOf(t.id) === -1)) {
			return true;
		}
	}
	return false;
};

const Controls = ({original, edited, cancelChanges, acceptChanges, remove, acceptAndCreate}) => (
	<div className="controls">
		<button disabled={!canAccept(original, edited)} onClick={acceptChanges}>Accept</button>
		{
			edited.id ? 
				<button onClick={remove}>Delete</button> :
				<button onClick={acceptAndCreate}
					disabled={!canAccept(original, edited)}>Add+</button>
		}
		<button onClick={cancelChanges}>Cancel</button>
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
	remove: PropTypes.func.isRequired,
	acceptAndCreate: PropTypes.func.isRequired
};

export default Controls