import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import SearchList from './entityList/SearchList'

require('../styles/modules/itemTags.scss');

const ItemTags = ({selected, searchString, onSearchInputChange, searching, found, onSelect, onRemove}) => (
	<div className="itemTags">

		<div>Tags of this item</div>
		<div className="tagList">
			{
				selected.length ?
					<ul >
						{selected.map(entry =>
							<li key={entry.id}>
								<span>{entry.name}</span>
								<button onClick={() => onRemove(entry)}>X</button>
							</li>
						)}
					</ul> :
					<div className="caption">This item has no tags...</div>
			}
		</div>

		<div className="tagsSearchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange}/>
		</div>
		
		<div className="tagsSearchList">
			{
				searchString ?
					<SearchList searching={searching} found={found} onSelect={onSelect}/> :
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
	searching: PropTypes.bool,
	found: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	onSelect: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired
};

export default ItemTags