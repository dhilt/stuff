import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'
import ItemTags from '../components/ItemTags'

require('../styles/modules/item.scss');

const Item = ({original, edited, doLocalChange, cancelLocalChanges, create, update, remove, searchTagsString, searchTags, searchingTags, foundTags, selectTag, removeTag}) => (
	<div className="item">
		<div className="intro">
			{ edited.id ? "Here you can change \"" + original.name + "\" item" : "Here you can create a new item" }
		</div>

		<TagProperty property="name" type="input"
								 original={original} edited={edited} doChange={doLocalChange}/>
		<TagProperty property="description" type="textarea"
								 original={original} edited={edited} doChange={doLocalChange}/>

		<ItemTags selected={edited.tags} searchString={searchTagsString} onSearchInputChange={searchTags}
							searching={searchingTags} found={foundTags} onSelect={selectTag} onRemove={removeTag}/>

		<Controls original={original} edited={edited}
							cancelChanges={cancelLocalChanges} acceptChanges={edited.id ? update : create} remove={remove}/>
	</div>
);

Item.propTypes = {
	original: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		tags: PropTypes.arrayOf(PropTypes.number)
	}),
	edited: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		tags: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			description: PropTypes.string
		}))
	}),
	doLocalChange: PropTypes.func.isRequired,
	cancelLocalChanges: PropTypes.func.isRequired,
	create: PropTypes.func.isRequired,
	update: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,

	searchTagsString: PropTypes.string,
	searchTags: PropTypes.func.isRequired,
	searchingTags: PropTypes.bool,
	foundTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	selectTag: PropTypes.func.isRequired,
	removeTag: PropTypes.func.isRequired
};

export default Item