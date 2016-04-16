import React, {PropTypes} from 'react'
import TagProperty from './tag/Property'
import Controls from './tag/Controls'

require('../styles/modules/tag.scss');

const Tag = ({originalTag, changedTag, doChange, cancelChanges, acceptChanges, deleteTag}) => (
	<div className="tag">
		<div className="intro">
			{ changedTag.id ? "Here you can change \"" + originalTag.name + "\" tag" : "Here you can create a new tag" }
		</div>

		<TagProperty property="name" type="input"
								 originalTag={originalTag} changedTag={changedTag} doChange={doChange}/>
		<TagProperty property="description" type="textarea"
								 originalTag={originalTag} changedTag={changedTag} doChange={doChange}/>

		<Controls originalTag={originalTag} changedTag={changedTag}
								 cancelChanges={cancelChanges} acceptChanges={acceptChanges} deleteTag={deleteTag}/>
	</div>
);

Tag.propTypes = {
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
	doChange: PropTypes.func.isRequired,
	cancelChanges: PropTypes.func.isRequired,
	acceptChanges: PropTypes.func.isRequired,
	deleteTag: PropTypes.func.isRequired
};

export default Tag