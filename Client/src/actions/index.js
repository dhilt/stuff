import {indexActionTypes} from './_types'

export default {

    openTagSearchList: () => {
        return (dispatch) => {
            dispatch({
                type: indexActionTypes.openTagSearchList
            });
        }
    },

    closeTagSearchList: () => {
        return (dispatch) => {
            dispatch({
                type: indexActionTypes.closeTagSearchList
            });
        }
    },

    searchTags: (searchString) => {
        return (dispatch, getState) => {
            dispatch({
                type: indexActionTypes.searchTags,
                searchString: searchString,
                allTags: getState().tags.all
            });
        }
    },
    
    selectTag: (tag) => {
        return (dispatch) => {
            dispatch({
                type: indexActionTypes.selectTag,
                tag: tag
            });
        }
    },
    
    removeTag: (tag) => {
        return (dispatch) => {
            dispatch({
                type: indexActionTypes.removeTag,
                tag: tag
            });
        }
    }
}