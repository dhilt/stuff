import React, {PropTypes} from 'react'

require('../styles/modules/index.scss');

const Index = ({isTagListOpened, onSearchInputFocus, onSearchInputBlur, onSearchInputChange, searchString, tagsToSelect, selectedTags, selectTag, removeTag, clearTags}) => {
	let clickOnTag = (tag) => {
		if(selectedTags.indexOf(tag.id) === -1) {
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
			<div className={"tagList" + (!isTagListOpened ? " hide2" : "")}>
				{
					selectedTags.length ? (
						<ul className="selectedTags">
							{selectedTags.map(entry =>
								<li key={entry.id} onClick={() => removeTag(entry)}>
									<span className="marked"></span>
									<span className="tag">{entry.name}</span>
								</li>
							)}
						</ul>
					) : ( null )
				}
				{
					tagsToSelect.length ? (
						<ul className="tagsToSelect">
							{tagsToSelect.map(entry =>
								<li key={entry.id} onClick={() => selectTag(entry)}>
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
	isTagListOpened: PropTypes.bool,
	tagsToSelect: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})).isRequired,
	selectedTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})).isRequired,
	searchString: PropTypes.string,
	onSearchInputFocus: PropTypes.func.isRequired,
	onSearchInputBlur: PropTypes.func.isRequired,
	onSearchInputChange: PropTypes.func.isRequired,
	selectTag: PropTypes.func.isRequired,
	removeTag: PropTypes.func.isRequired,
	clearTags: PropTypes.func.isRequired
};


export default Index