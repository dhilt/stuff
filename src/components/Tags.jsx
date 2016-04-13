import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import TagSearchInput from './tags/TagSearchInput';
import TagAddNew from './tags/TagAddNew';
import TagSearchList from './tags/TagSearchList';

export default class Tags extends Component {

  constructor() {
    super();
    this.state = {
      found: [],
      newTagName: '',
      canAddNewTag: false
    };
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.addNewTag = this.addNewTag.bind(this);
  }

	onSearchInputChange(searchString) {
    let found = [];
    let canAddNewTag = false;
    if(searchString) {
      canAddNewTag = true;
      this.props.allTags.forEach(tag => {
        if(tag.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
          found.push(tag);
        }
        if(canAddNewTag && tag.name.toLowerCase() === searchString.toLowerCase()) {
          canAddNewTag = false;
        }
      });
    }
    this.setState({
      found: found,
      newTagName: searchString,
      canAddNewTag: canAddNewTag
    });
	}

  addNewTag() {
    if(!this.state.canAddNewTag) {
      return;
    }
    alert(this.state.newTagName);
  }

  render() {
    return <div className="tags">
      {<TagSearchInput onChange={this.onSearchInputChange}/>}
      {<TagAddNew onClick={this.addNewTag} disabled={!this.state.canAddNewTag}/>}
      {<TagSearchList tagList={this.state.found}/>}
    </div>;
  }
}

Tags.propTypes = {
  allTags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
};
