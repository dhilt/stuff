import React, {PropTypes} from 'react'

const Tags = ({tagList}) => (
	<ul>
		{tagList.map(entry =>
			<li key={entry.id}>
				{entry.name}
			</li>
		)}
	</ul>
);

Tags.propTypes = {
	tagList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}))
};

export default Tags