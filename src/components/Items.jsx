import React, {PropTypes} from 'react'
import SearchInput from './list/SearchInput'
import AddNew from './list/AddNew'
import SearchList from './list/SearchList'

require('../styles/modules/tags.scss');

const Items = ({searching, found, onSearchInputChange, searchString, canAddNew, onAddNewClick, onSelect, edited}) => (
	<div className="tags">
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange}/>
			<AddNew onClick={onAddNewClick} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList searching={searching} found={found} onSelect={onSelect} edited={edited}/> :
				<div className="startSearchCaption">Please start search items...</div>
		}
	</div>
);

Items.propTypes = {
	searching: PropTypes.bool,
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