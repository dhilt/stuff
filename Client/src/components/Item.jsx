import React, {PropTypes} from 'react'
import TagProperty from './entity/Property'
import Controls from './entity/Controls'
import ItemTags from '../components/ItemTags'

require('../styles/modules/item.scss');

const Item = ({i18n, original, edited, doLocalChange, cancelLocalChanges, create, update, remove, addNew, searchTagsString, searchTags, foundTags, selectTag, removeTag}) =>
	original && edited ? (
		<div className="item">
			<div className="intro">
				{ edited.id ? i18n('Item.editItemIntro') : i18n('Item.newItemIntro') }
			</div>

			<div className="content">
				<TagProperty property="name" type="input"
										 original={original} edited={edited} doChange={doLocalChange}/>
				<TagProperty property="description" type="textarea"
										 original={original} edited={edited} doChange={doLocalChange}/>

				<ItemTags i18n={i18n} searchString={searchTagsString} found={foundTags} selected={edited.tags}
									onSearchInputChange={searchTags} onSelect={selectTag} onRemove={removeTag}/>
			</div>

			<Controls i18n={i18n} entityToken="Item"
								original={original} edited={edited}
								acceptChanges={edited.id ? update : create}
								acceptAndCreate={addNew}
								remove={remove}
								cancelChanges={cancelLocalChanges}/>
		</div>
	) : (null);

Item.propTypes = {
	i18n: PropTypes.func.isRequired,
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