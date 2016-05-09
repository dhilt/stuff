import React, {PropTypes} from 'react'

require('../../styles/modules/index/tags.scss');

const Tags = ({isTagListOpened, onSearchInputFocus, onSearchInputChange, searchString, searchType, changeSearchType, tagsToSelect, selectedTags, selectTag, removeTag, clearTags}) => {
	let canClear = () => searchString || selectedTags.length;

	return (
		<div className="indexTags">
			<div className="searchControls">
				<input
					value={searchString}
					onFocus={onSearchInputFocus}
					onChange={(e) => onSearchInputChange(e.target.value)}
					placeholder="start search tags"/>
				<span
					className={"clear" + (!canClear() ? " disabled" : "")}
					onClick={ () =>  canClear() ? clearTags() : false }>
				</span>
				<div className="searchType">
					<span className="caption">Tags search type:</span>
					<span 
						className={"option" + (searchType === "union" ? " selected" : "")}
						onClick={() => searchType !== "union" ? changeSearchType("union") : null}>
							union
					</span>
					<span 
						className={"option" + (searchType === "intersect" ? " selected" : "")}
						onClick={() => searchType !== "intersect" ? changeSearchType("intersect") : null}>
							intersect
					</span>
				</div>
			</div>
			<div className={"tagList" + (!isTagListOpened || !searchString ? " hide" : "")}>
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
							No tags found...
						</div>
					)
				}
			</div>
		</div>
	);
};

Tags.propTypes = {
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
	searchType: PropTypes.string,
	changeSearchType: PropTypes.func.isRequired,
	onSearchInputFocus: PropTypes.func.isRequired,
	onSearchInputChange: PropTypes.func.isRequired,
	selectTag: PropTypes.func.isRequired,
	removeTag: PropTypes.func.isRequired,
	clearTags: PropTypes.func.isRequired
};

export default Tags