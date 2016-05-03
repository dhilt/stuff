import React, {PropTypes} from 'react'

require('../../styles/modules/index/items.scss');

const Items = ({hasSelectedTags, searching, items, clickOnItem, justEditedItemId}) => (
	<div className="items">
		{ items.length ? (
			<ul>
				{items.map(entry =>
					<li key={entry.id}>
						<span onClick={() => clickOnItem(entry)}>
							{entry.name} {justEditedItemId === entry.id ? '*' : ''}
						</span>
					</li>
				)}
			</ul>
		) : (
			searching ?
				<div className="caption">
					searching...
				</div> : (
				hasSelectedTags ?
					<div className="caption">
						No items found...
					</div> : (null)
			)
		)}
	</div>
);

Items.propTypes = {
	hasSelectedTags: PropTypes.bool,
	searching: PropTypes.bool,
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	clickOnItem: PropTypes.func.isRequired,
	justEditedItemId: PropTypes.number
};

export default Items