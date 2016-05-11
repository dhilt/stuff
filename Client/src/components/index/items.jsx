import React, {PropTypes} from 'react'

require('../../styles/modules/index/items.scss');

const Items = ({i18n, hasSelectedTags, searching, items, clickOnItem, justEditedItemId}) => (
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
					{i18n('Index.Items.searching')}
				</div> : (
				hasSelectedTags ?
					<div className="caption">
						{i18n('Index.Items.notFound')}
					</div> : (null)
			)
		)}
	</div>
);

Items.propTypes = {
	i18n: PropTypes.func.isRequired,
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