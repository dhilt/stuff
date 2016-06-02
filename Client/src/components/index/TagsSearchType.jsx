import React, {PropTypes} from 'react'

require('../../styles/modules/index/tags.scss');

const TagsSearchType = ({i18n, searchType, changeSearchType}) => {
	return (
		<div className="searchType">
			<span className="caption">{i18n('Index.Tags.searchTypeCaption')}</span>
			<span 
				className={"option" + (searchType === "union" ? " selected" : "")}
				onClick={() => searchType !== "union" ? changeSearchType("union") : null}>
					{i18n('Index.Tags.searchTypeUnion')}
			</span>
			<span>{i18n('Index.Tags.searchTypeDelimiter')}</span>
			<span 
				className={"option" + (searchType === "intersect" ? " selected" : "")}
				onClick={() => searchType !== "intersect" ? changeSearchType("intersect") : null}>
					{i18n('Index.Tags.searchTypeIntersect')}
			</span>
		</div>
	);
};

TagsSearchType.propTypes = {
	i18n: PropTypes.func.isRequired,
	searchType: PropTypes.string,
	changeSearchType: PropTypes.func.isRequired
};

export default TagsSearchType