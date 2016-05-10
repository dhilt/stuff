import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import AddNew from './entityList/AddNew'
import SearchList from './entityList/SearchList'

import i18n from '../utils/i18n'
require('../styles/modules/tags.scss');

const Tags = ({searching, foundTags, onSearchInputChange, searchString, canAddNew, onAddNewTagClick, onSelectTag, justEditedId}) => (
	<div className="tags">
		<h3>{i18n.text('Tags.title')}</h3>
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange} entityToken="Tags"/>
			<AddNew onClick={() => onAddNewTagClick(searchString)} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList searching={searching} found={foundTags} onSelect={onSelectTag} 
					edited={justEditedId} entityToken="Tags"/> :
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