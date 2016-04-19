import React, {PropTypes} from 'react'

require('../../styles/modules/tags/searchList.scss');

const SearchList = ({searching, found, onSelect, edited}) => (
	<div className="searchList">
		{ found.length ? (
			<ul>
				{found.map(entry =>
					<li key={entry.id}>
						<span onClick={() => onSelect(entry)}>
							{entry.name} {edited && entry.id === edited.id ? '*' : ''}
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
					Nothing found...
				</div>
			)
		}
	</div>
);

SearchList.propTypes = {
	searching: PropTypes.bool,
	found: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	onSelect: PropTypes.func.isRequired,
	edited: PropTypes.shape({
		id: PropTypes.number,
		isNew: PropTypes.bool
	})
};

export default SearchList