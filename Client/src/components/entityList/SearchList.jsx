import React, {PropTypes} from 'react'

require('../../styles/modules/common/searchList.scss');

const SearchList = ({i18n, searching, found, onSelect, edited, entityToken}) => (
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
					{i18n(entityToken + '.searching')}
				</div> :
				<div className="caption">
					{i18n(entityToken + '.notFound')}
				</div>
		)
		}
	</div>
);

SearchList.propTypes = {
	i18n: PropTypes.func.isRequired,
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