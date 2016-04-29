import {indexActionTypes} from './_types'

export default {

    openTagList: () => {
        return (dispatch) => {
            dispatch({
                type: indexActionTypes.openTagList
            });
        }
    },

    closeTagList: () => {
        return (dispatch) => {
            dispatch({
                type: indexActionTypes.closeTagList
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

    clearTags: () => {
        return (dispatch) => {
            dispatch({
                type: indexActionTypes.clearTags
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