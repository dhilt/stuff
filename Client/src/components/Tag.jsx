import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'

require('../styles/modules/tag.scss');

const Tag = ({original, edited, doLocalChange, cancelLocalChanges, acceptChanges, create, update, remove, addNew}) =>
	original && edited ? (
	<div className="tag">
		<div className="intro">
			{ edited.id ? "Here you can change \"" + original.name + "\" tag" : "Here you can create a new tag" }
		</div>

		<div className="content">
			<TagProperty property="name" type="input"
				original={original} edited={edited} doChange={doLocalChange}/>
			<TagProperty property="description" type="textarea"
				original={original} edited={edited} doChange={doLocalChange}/>
		</div>
		
		<Controls original={original} edited={edited} acceptChanges={edited.id ? update : create}
			cancelChanges={cancelLocalChanges} remove={remove} acceptAndCreate={addNew}/>
	</div>
	) : (null);

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
	doLocalChange: PropTypes.func.isRequired,
	cancelLocalChanges: PropTypes.func.isRequired,
	create: PropTypes.func.isRequired,
	update: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
	addNew: PropTypes.func.isRequired
};

export default Tag