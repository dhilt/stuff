import React, {PropTypes} from 'react'
import SearchInput from './tags/SearchInput'
import AddNew from './tags/AddNew'
import SearchList from './tags/SearchList'

require('../styles/modules/tags.scss');

const Tags = ({searching, foundTags, onSearchInputChange, searchString, canAddNew, onAddNewTagClick, onSelectTag, editedTag}) => (
	<div className="tags">
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange}/>
			<AddNew onClick={onAddNewTagClick} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList searching={searching} tagList={foundTags} onSelect={onSelectTag} editedTag={editedTag}/> :
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