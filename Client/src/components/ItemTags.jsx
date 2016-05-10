import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import SearchList from './entityList/SearchList'

import i18n from '../utils/i18n'
require('../styles/modules/itemTags.scss');

const ItemTags = ({selected, searchString, onSearchInputChange, found, onSelect, onRemove}) => (
	<div className="itemTags">

		<div>{i18n.text('Item.Tags.title')}</div>
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
					<div className="caption">{i18n.text('Item.Tags.noTags')}</div>
			}
		</div>

		<div className="tagsSearchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange} entityToken="Tags"/>
		</div>
		
		<div className="tagsSearchList">
			{
				searchString ?
					<SearchList searching={false} found={found} onSelect={onSelect} entityToken="Tags"/> :
					(null)
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