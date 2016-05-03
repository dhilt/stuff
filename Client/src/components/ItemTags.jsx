import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import SearchList from './entityList/SearchList'

require('../styles/modules/itemTags.scss');

const ItemTags = ({selected, searchString, onSearchInputChange, found, onSelect, onRemove}) => (
	<div className="itemTags">

		<div>Tags of this item</div>
		<div className="tagList">
			{
				selected.length ?
					<ul >
						{selected.map(entry =>
							<li key={entry.id}>
								<span className="name">{entry.name}</span>
								<span className="remove" onClick={() => onRemove(entry)}></span>
							</li>
						)}
					</ul> :
					<div className="caption">This item has no tags...</div>
			}
		</div>

		<div className="tagsSearchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange} entityToken="tags"/>
		</div>
		
		<div className="tagsSearchList">
			{
				searchString ?
					<SearchList searching={false} found={found} onSelect={onSelect} entityToken="tags"/> :
					<div className="caption">Please start search tags...</div>
			}
		</div>
	</div>
);

ItemTags.propTypes = {
	selected: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	searchString: PropTypes.string,
	onSearchInputChange: PropTypes.func.isRequired,
	found: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	onSelect: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired
};

export default ItemTags