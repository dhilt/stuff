import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import AddNew from './entityList/AddNew'
import SearchList from './entityList/SearchList'

require('../styles/modules/tags.scss');

const Items = ({searching, found, onSearchInputChange, searchString, canAddNew, onAddNewClick, onSelect, edited}) => (
	<div className="tags">
		<h3>Stuff Items Editor</h3>
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange} entityToken="items"/>
			<AddNew onClick={onAddNewClick} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList searching={searching} found={found} onSelect={onSelect} 
					edited={edited} entityToken="items"/> :
				(null)
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