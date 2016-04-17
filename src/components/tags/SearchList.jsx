import React, {PropTypes} from 'react'

require('../../styles/modules/tags/searchList.scss');

const SearchList = ({tagList, onSelect}) => (
	<div className="searchList">
		{ tagList.length ?
			<ul>
				{tagList.map(entry =>
					<li>
						<span onClick={() => onSelect(entry)}>
							{entry.name} {entry.edited ? '*' : ''}
						</span>
					</li>
				)}
			</ul> :
			<div className="notFoundCaption">
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