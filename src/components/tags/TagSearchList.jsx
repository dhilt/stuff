import React, {PropTypes} from 'react'

const Tags = ({tagList, onSelect}) => (
	<ul>
		{tagList.map(entry =>
			<li key={entry.id} onClick={onSelect()}>
				{entry.name}
			</li>
		)}
	</ul>
);

Tags.propTypes = {
	tagList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})),
	onSelect: PropTypes.func
};

export default Tags