import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import AddNew from './entityList/AddNew'
import SearchList from './entityList/SearchList'

import i18n from '../utils/i18n'
require('../styles/modules/tags.scss');

const Items = ({searching, found, onSearchInputChange, searchString, canAddNew, onAddNewClick, onSelect, justEditedId}) => (
	<div className="tags">
		<h3>{i18n.text('Items.title')}</h3>
		<div className="searchControls">
			<SearchInput searchString={searchString} onChange={onSearchInputChange} entityToken="Items"/>
			<AddNew onClick={() => onAddNewClick(searchString)} disabled={!canAddNew}/>
		</div>
		{
			searchString ?
				<SearchList searching={searching} found={found} onSelect={onSelect} 
					edited={justEditedId} entityToken="Items"/> :
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
	justEditedId: PropTypes.number
};

export default Items