import {indexActionTypes} from './../actions/_types'

let initialState = {
    isSearchListOpened: false,
    searchString: '',
    foundTags: [],
    selectedTagIds: []
};

export default function index(state = initialState, action) {

    let stateChanges = {};
    let found;
    let sortFound = (found) => {

    };

    switch (action.type) {
        
        case indexActionTypes.openTagSearchList:
            stateChanges = {
                isSearchListOpened: true
            };
            break;
        
        case indexActionTypes.closeTagSearchList:
            stateChanges = {
                isSearchListOpened: false
            };
            break;

        case indexActionTypes.searchTags:
            found = action.searchString ? action.allTags.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1) : [];
            found.sort((a, b) => a.name.localeCompare(b.name));
            stateChanges = {
                foundTags: found,
                searchString: action.searchString
            };
            break;

        case indexActionTypes.selectTag:
            stateChanges = {
                selectedTagIds: [...state.selectedTagIds, action.tag.id]
            };
            break;

        case indexActionTypes.removeTag:
            stateChanges = {
                selectedTagIds: state.selectedTagIds.filter(tagId => tagId !== action.tag.id)
            };
            break;

    }

    return Object.assign({}, state, stateChanges);
}