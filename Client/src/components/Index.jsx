import React, {PropTypes} from 'react'
import TagsWrapper from './index/tagsWrapper'
import Items from './index/items'

require('../styles/modules/index.scss');

const Index = ({isTagListOpened, onSearchInputFocus, onOutsideTagsClick, onSearchInputChange, searchString, tagsToSelect, selectedTags, selectTag, removeTag, clearTags, searching, items, clickOnItem, justEditedItemId}) => {
	return (
		<div className="index">
			<h3>Stuff Welcome Index</h3>
			<TagsWrapper
				isTagListOpened={isTagListOpened}
				onSearchInputFocus={onSearchInputFocus}
				onOutsideTagsClick={onOutsideTagsClick}
				onSearchInputChange={onSearchInputChange}
				searchString={searchString}
				tagsToSelect={tagsToSelect}
				selectedTags={selectedTags}
				selectTag={selectTag}
				removeTag={removeTag}
				clearTags={clearTags}
			/>
			<Items 
				hasSelectedTags={!!selectedTags.length} 
				searching={searching} 
				items={items} 
				clickOnItem={clickOnItem}
				justEditedItemId={justEditedItemId}/>
		</div>
	);
};

Index.propTypes = {
	isTagListOpened: PropTypes.bool,
	tagsToSelect: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})).isRequired,
	selectedTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})).isRequired,
	searchString: PropTypes.string,
	onSearchInputFocus: PropTypes.func.isRequired,
	onOutsideTagsClick: PropTypes.func.isRequired,
	onSearchInputChange: PropTypes.func.isRequired,
	selectTag: PropTypes.func.isRequired,
	removeTag: PropTypes.func.isRequired,
	clearTags: PropTypes.func.isRequired,
	searching: PropTypes.bool,
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	clickOnItem: PropTypes.func.isRequired,
	justEditedItemId: PropTypes.number
};

export default Index