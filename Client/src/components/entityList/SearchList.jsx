import React, {PropTypes} from 'react'

import i18n from '../../utils/i18n'
require('../../styles/modules/tags/searchList.scss');

const SearchList = ({searching, found, onSelect, edited, entityToken}) => (
	<div className="searchList">
		{ found.length ? (
			<ul>
				{found.map(entry =>
					<li key={entry.id}>
						<span onClick={() => onSelect(entry)}>
							{entry.name} {edited === entry.id ? '*' : ''}
						</span>
					</li>
				)}
			</ul>
			) : (
			searching ?
				<div className="caption">
					{i18n.text(entityToken + '.searching')}
				</div> :
				<div className="caption">
					{i18n.text(entityToken + '.notFound')}
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
	edited: PropTypes.number,
	entityToken: PropTypes.string
};

export default SearchList