import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'
import ItemTags from '../components/ItemTags'

require('../styles/modules/item.scss');

const Item = ({original, edited, doChange, cancelChanges, acceptChanges, remove, searchTagsString, searchTags, searchingTags, foundTags, selectTag, removeTag}) => (
	<div className="item">
		<div className="intro">
			{ edited.id ? "Here you can change \"" + original.name + "\" item" : "Here you can create a new item" }
		</div>

		<TagProperty property="name" type="input"
								 original={original} edited={edited} doChange={doChange}/>
		<TagProperty property="description" type="textarea"
								 original={original} edited={edited} doChange={doChange}/>

		<ItemTags selected={edited.tags} searchString={searchTagsString} onSearchInputChange={searchTags}
							searching={searchingTags} found={foundTags} onSelect={selectTag} onRemove={removeTag}/>

		<Controls original={original} edited={edited}
							cancelChanges={cancelChanges} acceptChanges={acceptChanges} remove={remove}/>
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
	doChange: PropTypes.func.isRequired,
	cancelChanges: PropTypes.func.isRequired,
	acceptChanges: PropTypes.func.isRequired,
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