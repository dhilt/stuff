import React, {PropTypes} from 'react'

require('../styles/modules/index.scss');

const Index = ({isTagListOpened, onSearchInputFocus, onSearchInputBlur, onSearchInputChange, searchString, tagsToSelect, selectedTags, selectTag, removeTag, clearTags}) => {
	let canClear = () => searchString || selectedTags.length;
	let myBlur = (e) => {
		/*let i = 0, parent = e.target.parentElement;
		while(i++ < 5) {
			if(parent.id === 'indexTagList') {
				return;
			}
			parent = parent.parentElement;
		}
		onSearchInputBlur();*/
	};
	return (
		<div className="index">
			<h3>Stuff Welcome Index</h3>
			<div id="indexTagList" onBlur={(e) => myBlur(e)}>
				<div className="searchControls">
					<input
						value={searchString}
						onFocus={onSearchInputFocus}
						onChange={(e) => onSearchInputChange(e.target.value)}
						placeholder="search tags"/>
					<span className={"clear" + (!canClear() ? " disabled" : "")}
						onClick={ () =>  canClear() ? clearTags() : false }>
					</span>
				</div>
				<div className={"tagList" + (!isTagListOpened ? " hide" : "")}>
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