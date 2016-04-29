import {indexActionTypes} from './../actions/_types'

let initialState = {
    isTagListOpened: false,
    searchString: '',
    tagsToSelect: [],
    selectedTags: []
};

export default function index(state = initialState, action) {

    let stateChanges = {};
    let found;

    switch (action.type) {
        
        case indexActionTypes.openTagList:
            stateChanges = {
                isTagListOpened: true
            };
            break;
        
        case indexActionTypes.closeTagList:
            stateChanges = {
                isTagListOpened: false
            };
            break;

        case indexActionTypes.searchTags:
            found = action.searchString ? action.allTags.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1) : [];
            stateChanges = {
                tagsToSelect: found.filter(tag => !state.selectedTags.find(t => t.id === tag.id)),
                searchString: action.searchString
            };
            break;

        case indexActionTypes.selectTag:
            stateChanges = {
                selectedTags: [...state.selectedTags, action.tag].sort((a, b) => a.name.localeCompare(b.name)),
                tagsToSelect: state.tagsToSelect.filter(tag => tag.id !== action.tag.id)
            };
            break;

        case indexActionTypes.removeTag:
            stateChanges = {
                selectedTags: state.selectedTags.filter(tag => tag.id !== action.tag.id)
            };
            if(action.tag.name.toLowerCase().indexOf(state.searchString.toLowerCase()) !== -1) {
                stateChanges.tagsToSelect = [...state.tagsToSelect, action.tag].sort((a, b) => a.name.localeCompare(b.name))
            }
            break;

        case indexActionTypes.clearTags:
            stateChanges = {
                isTagListOpened: false,
                searchString: '',
                selectedTags: [],
                tagsToSelect: []
            };
            break;

    }

    return Object.assign({}, state, stateChanges);
}