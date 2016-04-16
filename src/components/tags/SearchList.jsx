import React, {PropTypes} from 'react'

const SearchList = ({tagList, onSelect}) => (
	<div className="searchList">
		{ tagList.length ?
			<ul>
				{tagList.map(entry =>
					<li key={entry.id} onClick={() => onSelect(entry)}>
						{entry.name} {entry.edited ? '*' : ''}
					</li>
				)}
			</ul> :
			<div className="empty">
				No tags found...
			</div>
		}
	</div>
);

SearchList.propTypes = {
	tagList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})),
	onSelect: PropTypes.func.isRequired
};

export default SearchList