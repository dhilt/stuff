import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import AddNew from './entityList/AddNew'
import SearchList from './entityList/SearchList'

require('../styles/modules/tags.scss');

const Tags = ({i18n, searching, foundTags, onSearchInputChange, searchString, canAddNew, onAddNewTagClick, onSelectTag, justEditedId}) => (
	<div className="tags">
		<h3>{i18n('Tags.title')}</h3>
		<div className="searchControls">
			<SearchInput i18n={i18n} entityToken="Tags" searchString={searchString} onChange={onSearchInputChange}/>
			<AddNew onClick={() => onAddNewTagClick(searchString)} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList i18n={i18n} entityToken="Tags"
										searching={searching} found={foundTags} onSelect={onSelectTag} edited={justEditedId}/> :
				(null)
		}
	</div>
);

Tags.propTypes = {
	i18n: PropTypes.func.isRequired,
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