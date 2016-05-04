import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'
import ItemTags from '../components/ItemTags'

require('../styles/modules/item.scss');

const Item = ({original, edited, doLocalChange, cancelLocalChanges, create, update, remove, addNew, searchTagsString, searchTags, foundTags, selectTag, removeTag}) => 
	original && edited ? (
	<div className="item">
		<div className="intro">
			{ edited.id ? "Here you can change \"" + original.name + "\" item" : "Here you can create a new item" }
		</div>

		<div className="content">
			<TagProperty property="name" type="input"
				original={original} edited={edited} doChange={doLocalChange}/>
			<TagProperty property="description" type="textarea"
				original={original} edited={edited} doChange={doLocalChange}/>

			<ItemTags selected={edited.tags} searchString={searchTagsString} onSearchInputChange={searchTags}
				found={foundTags} onSelect={selectTag} onRemove={removeTag}/>
		</div>
		
		<Controls original={original} edited={edited} acceptChanges={edited.id ? update : create}
			cancelChanges={cancelLocalChanges} remove={remove} acceptAndCreate={addNew}/>
	</div>
	) : (null);

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
	addNew: PropTypes.func.isRequired,

	searchTagsString: PropTypes.string,
	foundTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	selectTag: PropTypes.func.isRequired,
	removeTag: PropTypes.func.isRequired
};

export default Item