import React, {PropTypes} from 'react';

const Property = ({property, type, original, changed, doChange}) => {
	
	let pasteInputElement = () => {
		switch (type) {
			case "textarea":
				return (<textarea
					value={changed[property]}
					onChange={(e) => doChange({[property]: e.target.value})}/>);
			case "input":
				return (<input
					value={changed[property]}
					onChange={(e) => doChange({[property]: e.target.value})}/>);
		}
	};

	return (
		<div className={"property " + property}>

			{pasteInputElement()}

			<button
				disabled={!changed.id || changed[property] === original[property]}
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
	changed: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	}),
	property: PropTypes.string,
	doChange: PropTypes.func.isRequired
};

export default Property