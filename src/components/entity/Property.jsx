import React, {PropTypes} from 'react';

require('../../styles/modules/common/property.scss');

const Property = ({property, type, original, edited, doChange}) => {

	let canRevert = () => {
		return edited.id && edited[property] !== original[property];
	};
	
	let pasteInputElement = () => {
		switch (type) {
			case "textarea":
				return (<textarea
					value={edited[property]}
					onChange={(e) => doChange({[property]: e.target.value})}/>);
			case "input":
				return (<input
					value={edited[property]}
					onChange={(e) => doChange({[property]: e.target.value})}/>);
		}
	};

	return (
		<div className={"property " + property}>

			{pasteInputElement()}

			<span className={"revert" + (!canRevert() ? " disabled" : "")}
				onClick={ () =>  canRevert() ? doChange({ [property]: original[property] }) : false }>
			</span>
		</div>
	);
};

Property.propTypes = {
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
	property: PropTypes.string,
	doChange: PropTypes.func.isRequired
};

export default Property