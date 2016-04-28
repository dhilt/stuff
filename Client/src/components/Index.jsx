import React, {PropTypes} from 'react'

require('../styles/modules/index.scss');

const Index = ({isSearchListOpened, onSearchInputFocus, onSearchInputBlur, onSearchInputChange, searchString, foundTags, selectedTagIds, selectTag, removeTag}) => {
	let clickOnTag = (tag) => {
		if(selectedTagIds.indexOf(tag.id) === -1) {
			selectTag(tag);
		}
		else {
			removeTag(tag);
		}
	};
	return (
		<div className="index">
			<h3>Stuff Welcome Index</h3>
			<div className="searchControls">
				<input
					value={searchString}
					onFocus={onSearchInputFocus}
					onBlur={onSearchInputBlur}
					onChange={(e) => onSearchInputChange(e.target.value)}
					placeholder="search tags"/>
			</div>
			<div className={"searchList" + (!isSearchListOpened ? " hide2" : "")}>
				{
					foundTags.length ? (
						<ul>
							{foundTags.map(entry =>
								<li key={entry.id} onClick={() => clickOnTag(entry)}>
									<span className={"marked" + (selectedTagIds.indexOf(entry.id) === -1 ? " hide" : "")}></span>
									<span className="tag">{entry.name}</span>
								</li>
							)}
						</ul>
					) : (
						<div className="caption">
							Nothing found...
						</div>
					)
				}
			</div>
		</div>
	);
};

Index.propTypes = {
	isSearchListOpened: PropTypes.bool,
	foundTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired,
	selectedTagIds: PropTypes.arrayOf(PropTypes.number).isRequired,
	searchString: PropTypes.string,
	onSearchInputFocus: PropTypes.func.isRequired,
	onSearchInputBlur: PropTypes.func.isRequired,
	onSearchInputChange: PropTypes.func.isRequired,
	selectTag: PropTypes.func.isRequired,
	removeTag: PropTypes.func.isRequired
};


export default Index