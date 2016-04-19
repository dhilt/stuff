import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import AddNew from './entityList/AddNew'
import SearchList from './entityList/SearchList'

require('../styles/modules/tags.scss');

const Tags = ({searching, foundTags, onSearchInputChange, searchString, canAddNew, onAddNewTagClick, onSelectTag, editedTag}) => (
	<div className="tags">
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange}/>
			<AddNew onClick={onAddNewTagClick} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList searching={searching} found={foundTags} onSelect={onSelectTag} edited={editedTag}/> :
				<div className="startSearchCaption">Please start search tags...</div>
		}
	</div>
);

Tags.propTypes = {
	searching: PropTypes.bool,
	foundTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	searchString: PropTypes.string,
	onSearchInputChange: PropTypes.func.isRequired,
	canAddNew: PropTypes.bool,
	onAddNewTagClick: PropTypes.func.isRequired,
	onSelectTag: PropTypes.func.isRequired,
	editedTag: PropTypes.shape({
		id: PropTypes.number,
		isNew: PropTypes.bool
	})
};

export default Tags