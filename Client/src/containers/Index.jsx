import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import indexActions from './../actions/index'
import IndexComponent from './../components/Index'

const mapStateToProps = (state) => {
    return {
        searchString: state.index.searchString,
        isTagListOpened: state.index.isTagListOpened,
        tagsToSelect: state.index.tagsToSelect,
        selectedTags: state.index.selectedTags
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchInputFocus: () => {
            dispatch(indexActions.openTagList());
        },
        onSearchInputBlur: () => {
            dispatch(indexActions.closeTagList());
        },
        onSearchInputChange: (searchString) => {
            dispatch(indexActions.searchTags(searchString));
        },
        selectTag: (tag) =>{
            dispatch(indexActions.selectTag(tag));
        },
        removeTag: (tag) =>{
            dispatch(indexActions.removeTag(tag));
        },
        clearTags: () =>{
            dispatch(indexActions.clearTags());
        }
    }
};

const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexComponent);

export default Index