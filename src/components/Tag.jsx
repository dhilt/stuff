import React, {PropTypes} from 'react';
import TagProperty from './tag/TagProperty';
import TagControls from './tag/TagControls';

const Tag = ({originalTag, changedTag, doChange, cancelChanges, acceptChanges}) => (
	<div className="tag">
		<div className="intro">
			{ changedTag.id ? "Here you can change \"" + originalTag.name + "\" tag" : "Here you can create a new tag" }
		</div>

		<TagProperty property="name" type="input"
								 originalTag={originalTag} changedTag={changedTag} doChange={doChange}/>
		<TagProperty property="description" type="textarea"
								 originalTag={originalTag} changedTag={changedTag} doChange={doChange}/>

		<TagControls originalTag={originalTag} changedTag={changedTag}
								 cancelChanges={cancelChanges} acceptChanges={acceptChanges}/>
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
	doChange: PropTypes.func,
	cancelChanges: PropTypes.func,
	acceptChanges: PropTypes.func
};

export default Tag