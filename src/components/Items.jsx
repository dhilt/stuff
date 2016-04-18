import React, {PropTypes} from 'react'
import SearchInput from './tags/SearchInput'
import AddNew from './tags/AddNew'
import SearchList from './tags/SearchList'

require('../styles/modules/tags.scss');

const Items = ({found, onSearchInputChange, searchString, canAddNew, onAddNewClick, onSelect, edited}) => (
	<div className="tags">
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange}/>
			<AddNew onClick={onAddNewClick} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList tagList={found} onSelect={onSelect} editedTag={edited}/> :
				<div className="startSearchCaption">Please start search items...</div>
		}
	</div>
);

Items.propTypes = {
	found: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	searchString: PropTypes.string,
	onSearchInputChange: PropTypes.func.isRequired,
	canAddNew: PropTypes.bool,
	onAddNewClick: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
	edited: PropTypes.shape({
		id: PropTypes.number,
		isNew: PropTypes.bool
	})
};

export default Items