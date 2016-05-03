import {indexActionTypes, itemsActionTypes} from './../actions/_types'

let initialState = {
	isTagListOpened: false,
	searchString: '',
	tagsToSelect: [],
	selectedTags: [],
	searching: false,
	items: [],
	justEditedItemId: null
};

export default function index(state = initialState, action) {

	let stateChanges = {};
	let found;

	switch (action.type) {

		case '@@router/LOCATION_CHANGE':
			if (action.payload.pathname !== '/') {
				stateChanges = {
					justEditedItemId: null
				}
			}
			break;

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
				tagsToSelect: state.tagsToSelect.filter(tag => tag.id !== action.tag.id),
				searching: true
			};
			break;

		case indexActionTypes.removeTag:
			stateChanges = {
				selectedTags: state.selectedTags.filter(tag => tag.id !== action.tag.id),
				searching: true
			};
			if (action.tag.name.toLowerCase().indexOf(state.searchString.toLowerCase()) !== -1) {
				stateChanges.tagsToSelect = [...state.tagsToSelect, action.tag].sort((a, b) => a.name.localeCompare(b.name))
			}
			break;

		case indexActionTypes.clearTags:
			stateChanges = {
				isTagListOpened: false,
				searchString: '',
				selectedTags: [],
				tagsToSelect: [],
				searching: false,
				items: [],
				justEditedItemId: null
			};
			break;

		case indexActionTypes.receiveItems:
			stateChanges = {
				searching: false,
				items: action.items,
				justEditedItemId: null
			};
			break;

		case itemsActionTypes.receiveChanged:
			if (found = state.items.find(item => item.id === action.result.id)) {
				stateChanges = {
					items: state.items.map(item => item.id === action.result.id ? action.result : item),
					justEditedItemId: action.result.id
				}
			}
			break;

	}

	return Object.assign({}, state, stateChanges);
}