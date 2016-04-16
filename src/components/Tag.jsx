import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

let props = ['id', 'name', 'description'];
let isEqual = (tag1, tag2) => {
	for (let prop of props)
		if(tag1[prop] !== tag2[prop])
			return false;
	return true;
};

const Tag = ({originalTag, changedTag, doChange, cancelChanges, acceptChanges}) => (
	<div className="tag">
		<div>
			Here you can change "{originalTag.name}" tag
		</div>

		<div className="property">
			<input 
				value={changedTag.name} 
				onChange={(e) => doChange({ name: e.target.value }) } />
			<button 
				disabled={changedTag.name === originalTag.name}
				onClick={ () => doChange({ name: originalTag.name }) }>Revert</button>
		</div>

		<div className="property">
			<textarea 
				value={changedTag.description} 
				onChange={(e) => doChange({ description: e.target.value }) } />
			<button 
				disabled={changedTag.description === originalTag.description}
				onClick={ () => doChange({ description: originalTag.description }) }>Revert</button>
		</div>

		<div className="controls">
			<button onClick={cancelChanges}>Cancel</button>
			<button disabled={isEqual(originalTag, changedTag)} onClick={acceptChanges}>Accept</button>
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