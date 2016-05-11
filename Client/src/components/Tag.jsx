import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'

require('../styles/modules/tag.scss');

const Tag = ({i18n, original, edited, doLocalChange, cancelLocalChanges, acceptChanges, create, update, remove}) =>
	original && edited ? (
		<div className="tag">
			<div className="intro">
				{ edited.id ? i18n('Tag.editTagIntro') : i18n('Tag.newTagIntro') }
			</div>

			<div className="content">
				<TagProperty property="name" type="input"
										 original={original} edited={edited} doChange={doLocalChange}/>
				<TagProperty property="description" type="textarea"
										 original={original} edited={edited} doChange={doLocalChange}/>
			</div>

			<Controls i18n={i18n} entityToken="Tag"
								original={original} edited={edited}
								acceptChanges={edited.id ? update : create}
								remove={remove}
								cancelChanges={cancelLocalChanges}/>
		</div>
	) : (null);

Tag.propTypes = {
	i18n: PropTypes.func.isRequired,
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
	remove: PropTypes.func.isRequired
};

export default Tag