import React, {PropTypes} from 'react';

const Property = ({property, type, original, edited, doChange}) => {
	
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

			<button
				disabled={!edited.id || edited[property] === original[property]}
				onClick={ () => doChange({ [property]: original[property] }) }>Revert
			</button>
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