import React, {PropTypes} from 'react'

require('../../styles/modules/tags/searchList.scss');

const SearchList = ({searching, tagList, onSelect, editedTag}) => (
	<div className="searchList">
		{ tagList.length ? (
			<ul>
				{tagList.map(entry =>
					<li key={entry.id}>
						<span onClick={() => onSelect(entry)}>
							{entry.name} {editedTag && entry.id === editedTag.id ? '*' : ''}
						</span>
					</li>
				)}
			</ul> 
			) : (
			searching ?
				<div className="searchingCaption">
					searching...
				</div> :
				<div className="notFoundCaption">
					No tags found...
				</div>
			)
		}
	</div>
);

SearchList.propTypes = {
	searching: PropTypes.bool,
	tagList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	onSelect: PropTypes.func.isRequired,
	editedTag: PropTypes.shape({
		id: PropTypes.number,
		isNew: PropTypes.bool
	})
};

export default SearchList