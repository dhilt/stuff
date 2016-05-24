import React, {PropTypes} from 'react'
import SearchInput from './entityList/SearchInput'
import AddNew from './entityList/AddNew'
import SearchList from './entityList/SearchList'
import SearchPaging from './entityList/SearchPaging'

require('../styles/modules/tags.scss');

const Items = ({i18n, searching, found, countPage, countBefore, countAfter, searchString, onSearchInputChange, getPage, canAddNew, onAddNewClick, onSelect, justEditedId}) => (
	<div className="tags">
		<h3>{i18n('Items.title')}</h3>
		<div className="searchControls">
			<SearchInput i18n={i18n} entityToken="Items" searchString={searchString} onChange={onSearchInputChange}/>
			<AddNew onClick={() => onAddNewClick(searchString)} disabled={!canAddNew}/>
		</div>
		{
			searchString ? (
				<div>
					<SearchPaging i18n={i18n} amount={found.length} page={countPage} before={countBefore} after={countAfter} getPage={getPage}/>
					<SearchList i18n={i18n} entityToken="Items"
											searching={searching} found={found} 
											onSelect={onSelect} edited={justEditedId}/>
				</div>
			) : (null)
		}
	</div>
);

Items.propTypes = {
	i18n: PropTypes.func.isRequired,
	searching: PropTypes.bool,
	found: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	countPage: PropTypes.number,
	countBefore: PropTypes.number,
	countAfter: PropTypes.number,
	searchString: PropTypes.string,
	onSearchInputChange: PropTypes.func.isRequired,
	getPage: PropTypes.func.isRequired,
	canAddNew: PropTypes.bool,
	onAddNewClick: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
	justEditedId: PropTypes.number
};

export default Items