import React, {PropTypes} from 'react';
import TagSearchInput from './tags/TagSearchInput';
import TagAddNew from './tags/TagAddNew';
import TagSearchList from './tags/TagSearchList';

const Tags = ({foundTags, onSearchInputChange, searchString, canAddNewTag, onAddNewTagClick, onSelectTag}) => (
	<div className="tags">
		<TagSearchInput searchString={searchString} onChange={onSearchInputChange}/>
		<TagAddNew onClick={onAddNewTagClick} disabled={!canAddNewTag}/>
		<TagSearchList tagList={foundTags} onSelect={onSelectTag}/>
	</div>
);

Tags.propTypes = {
	allTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})),
	foundTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})),
	searchString: PropTypes.string,
	onSearchInputChange: PropTypes.func,
	canAddNewTag: PropTypes.bool,
	onAddNewTagClick: PropTypes.func,
	onSelectTag: PropTypes.func
};

export default Tags