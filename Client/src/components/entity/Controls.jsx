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
		if (target.tags.find(t => src.tags.indexOf(t.id) === -1)) {
			return true;
		}
	}
	return false;
};

const Controls = ({i18n, original, edited, cancelChanges, acceptChanges, remove, acceptAndCreate, entityToken}) => (
	<div className="controls">
		<button disabled={!canAccept(original, edited)}
						onClick={acceptChanges}>{i18n(entityToken + '.Controls.accept')}</button>
		{
			edited.id ?
				<button onClick={remove}>{i18n(entityToken + '.Controls.remove')}</button> : (
					acceptAndCreate ?
						<button onClick={acceptAndCreate}
										disabled={!canAccept(original, edited)}>{i18n(entityToken + '.Controls.acceptAndCreate')}</button> :
						(null)
				)
		}
		<button onClick={cancelChanges}>{i18n(entityToken + '.Controls.cancel')}</button>
	</div>
);

Controls.propTypes = {
	i18n: PropTypes.func.isRequired,
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
	acceptAndCreate: PropTypes.func,
	entityToken: PropTypes.string.isRequired
};

export default Controls