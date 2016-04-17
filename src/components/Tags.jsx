import React, {PropTypes} from 'react'
import SearchInput from './tags/SearchInput'
import AddNew from './tags/AddNew'
import SearchList from './tags/SearchList'

require('../styles/modules/tags.scss');

const Tags = ({foundTags, onSearchInputChange, searchString, canAddNewTag, onAddNewTagClick, onSelectTag}) => (
	<div className="tags">
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange}/>
			<AddNew onClick={onAddNewTagClick} disabled={!canAddNewTag}/>
		</div>
		{
			searchString ?
				<SearchList tagList={foundTags} onSelect={onSelectTag}/> :
				<div className="startSearchCaption">Please start search tags...</div>
		}
	</div>
);

Tags.propTypes = {
	allTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})),
	foundTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})),
	searchString: PropTypes.string,
	onSearchInputChange: PropTypes.func.isRequired,
	canAddNewTag: PropTypes.bool,
	onAddNewTagClick: PropTypes.func.isRequired,
	onSelectTag: PropTypes.func.isRequired
};

export default Tags