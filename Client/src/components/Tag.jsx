import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'

require('../styles/modules/tag.scss');

const Tag = ({original, edited, doChange, cancelChanges, acceptChanges, remove}) => (
	<div className="tag">
		<div className="intro">
			{ edited.id ? "Here you can change \"" + original.name + "\" tag" : "Here you can create a new tag" }
		</div>

		<TagProperty property="name" type="input"
								 original={original} edited={edited} doChange={doChange}/>
		<TagProperty property="description" type="textarea"
								 original={original} edited={edited} doChange={doChange}/>

		<Controls original={original} edited={edited}
								 cancelChanges={cancelChanges} acceptChanges={acceptChanges} remove={remove}/>
	</div>
);

Tag.propTypes = {
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
	doChange: PropTypes.func.isRequired,
	cancelChanges: PropTypes.func.isRequired,
	acceptChanges: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired
};

export default Tag