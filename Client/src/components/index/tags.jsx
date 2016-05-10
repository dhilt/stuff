import React, {PropTypes} from 'react'

import i18n from '../../utils/i18n'
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
					placeholder={i18n.text('Index.Tags.searchInputPlaceholder')}/>
				<span
					className={"clear" + (!canClear() ? " disabled" : "")}
					onClick={ () =>  canClear() ? clearTags() : false }>
				</span>
				<div className="searchType">
					<span className="caption">{i18n.text('Index.Tags.searchTypeCaption')}</span>
					<span 
						className={"option" + (searchType === "union" ? " selected" : "")}
						onClick={() => searchType !== "union" ? changeSearchType("union") : null}>
							{i18n.text('Index.Tags.searchTypeUnion')}
					</span>
					<span>{i18n.text('Index.Tags.searchTypeDelimiter')}</span>
					<span 
						className={"option" + (searchType === "intersect" ? " selected" : "")}
						onClick={() => searchType !== "intersect" ? changeSearchType("intersect") : null}>
							{i18n.text('Index.Tags.searchTypeIntersect')}
					</span>
				</div>
			</div>
			<div className={"tagList" + (!isTagListOpened || (!searchString && !selectedTags.length) ? " hide" : "")}>
				{
					selectedTags.length ? (
						<ul className={"selectedTags" + (tagsToSelect.length || searchString ? " plus" : "")}>
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
					) : ( searchString ? <div className="caption">{i18n.text('Index.Tags.notFound')}</div> : (null) )
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