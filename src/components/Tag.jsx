import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

let props = ['id', 'name', 'description'];
let canAccept = (src, target) => {
	if(!target.name)
		return false;
	if(!src || !target.id)
		return true;
	for (let prop of props)
		if(src[prop] !== target[prop])
			return true;
	return false;
};

const Tag = ({originalTag, changedTag, doChange, cancelChanges, acceptChanges}) => (
	<div className="tag">
		<div>
			{ changedTag.id ? "Here you can change \"" + originalTag.name + "\" tag" : "Here you can create a new tag" }
		</div>

		<div className="property">
			<input 
				value={changedTag.name} 
				onChange={(e) => doChange({ name: e.target.value }) } />
			<button 
				disabled={!changedTag.id || changedTag.name === originalTag.name}
				onClick={ () => doChange({ name: originalTag.name }) }>Revert</button>
		</div>

		<div className="property">
			<textarea 
				value={changedTag.description} 
				onChange={(e) => doChange({ description: e.target.value }) } />
			<button 
				disabled={!changedTag.id || changedTag.description === originalTag.description}
				onClick={ () => doChange({ description: originalTag.description }) }>Revert</button>
		</div>

		<div className="controls">
			<button onClick={cancelChanges}>Cancel</button>
			<button disabled={!canAccept(originalTag, changedTag)} onClick={acceptChanges}>Accept</button>
		</div>
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
	doChange: PropTypes.func,
	cancelChanges: PropTypes.func,
	acceptChanges: PropTypes.func
};

export default Tag