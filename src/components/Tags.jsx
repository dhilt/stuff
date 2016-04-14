import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import TagSearchInput from './tags/TagSearchInput';
import TagAddNew from './tags/TagAddNew';
import TagSearchList from './tags/TagSearchList';


export default class Tags extends Component {

	render() {
		const { foundTags, onSearchInputChange, canAddNewTag, onAddNewTagClick } = this.props
		return <div className="tags">
			{<TagSearchInput onChange={onSearchInputChange}/>}
			{<TagAddNew onClick={onAddNewTagClick} disabled={!canAddNewTag}/>}
			{<TagSearchList tagList={foundTags}/>}
		</div>;
	}
}

Tags.propTypes = {
	onSearchInputChange: PropTypes.func,
	canAddNewTag: PropTypes.bool,
	onAddNewTagClick: PropTypes.func,
	allTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})),
	foundTags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}))
};
