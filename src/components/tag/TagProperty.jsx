import React, {PropTypes} from 'react';

const TagProperty = ({property, type, originalTag, changedTag, doChange}) => {
	
	let pasteInputElement = () => {
		switch (type) {
			case "textarea":
				return (<textarea
					value={changedTag[property]}
					onChange={(e) => doChange({[property]: e.target.value})}/>);
			case "input":
				return (<input
					value={changedTag[property]}
					onChange={(e) => doChange({[property]: e.target.value})}/>);
		}
	};

	return (
		<div className={"property " + property}>

			{pasteInputElement()}

			<button
				disabled={!changedTag.id || changedTag[property] === originalTag[property]}
				onClick={ () => doChange({ [property]: originalTag[property] }) }>Revert
			</button>
		</div>
	);
};

TagProperty.propTypes = {
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
	property: PropTypes.string,
	doChange: PropTypes.func
};

export default TagProperty