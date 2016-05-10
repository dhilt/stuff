import React, {PropTypes} from 'react'

import i18n from '../../utils/i18n'
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
					{i18n.text('Index.Items.searching')}
				</div> : (
				hasSelectedTags ?
					<div className="caption">
						{i18n.text('Index.Items.notFound')}
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