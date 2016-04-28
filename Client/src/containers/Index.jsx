import React, {Component, PropTypes} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import indexActions from './../actions/index'
import IndexComponent from './../components/Index'

const mapStateToProps = (state) => {
    return {
        isSearchListOpened: state.index.isSearchListOpened,
        foundTags: state.index.foundTags,
        selectedTagIds: state.index.selectedTagIds,
        searchString: state.index.searchString
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchInputFocus: () => {
            dispatch(indexActions.openTagSearchList());
        },
        onSearchInputBlur: () => {
            dispatch(indexActions.closeTagSearchList());
        },
        onSearchInputChange: (searchString) => {
            dispatch(indexActions.searchTags(searchString));
        },
        selectTag: (tag) =>{
            dispatch(indexActions.selectTag(tag));
        },
        removeTag: (tag) =>{
            dispatch(indexActions.removeTag(tag));
        }
    }
};

const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexComponent);

export default Index