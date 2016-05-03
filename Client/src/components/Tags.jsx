import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import AddNew from './entityList/AddNew'
import SearchList from './entityList/SearchList'

require('../styles/modules/tags.scss');

const Tags = ({searching, foundTags, onSearchInputChange, searchString, canAddNew, onAddNewTagClick, onSelectTag, justEditedId}) => (
	<div className="tags">
		<h3>Stuff Tags Editor</h3>
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange} entityToken="tags"/>
			<AddNew onClick={onAddNewTagClick} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList searching={searching} found={foundTags} onSelect={onSelectTag} 
					edited={justEditedId} entityToken="tags"/> :
				(null)
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
	justEditedId: PropTypes.number
};

export default Tags