import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import SearchList from './entityList/SearchList'

require('../styles/modules/itemTags.scss');

const ItemTags = ({i18n, selected, searchString, onSearchInputChange, found, onSelect, onRemove}) => (
	<div className="itemTags">

		<div>{i18n('Item.Tags.title')}</div>
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
					<div className="caption">{i18n('Item.Tags.noTags')}</div>
			}
		</div>

		<div className="tagsSearchControls">
			<SearchInput i18n={i18n} entityToken="Tags" searchString={searchString} onChange={onSearchInputChange}/>
		</div>

		<div className="tagsSearchList">
			{
				searchString ?
					<SearchList i18n={i18n} entityToken="Tags" searching={false} found={found} onSelect={onSelect}/> :
					(null)
			}
		</div>
	</div>
);

ItemTags.propTypes = {
	i18n: PropTypes.func.isRequired,
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