import {getCommonInitialState, getCommonStateChanges} from './common'
import {itemsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
	searchTagsString: '',
	searchingTags: false,
	foundTags: []
});

export default function items(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case '@@router/LOCATION_CHANGE':
			if (action.payload.pathname.indexOf('items') !== 1) {
				stateChanges = Object.assign({}, initialState);
			}
			else if (action.payload.pathname === '/items') {
				stateChanges = {
					selected: null,
					edited: null,
					searchTagsString: '',
					searchingTags: false,
					foundTags: []
				};
			}
			break;

		case itemsActionTypes.setItemTags:
			stateChanges = {
				edited: Object.assign({}, state.edited, {tags: action.itemTags}),
				searchTagsString: '',
				searchingTags: false,
				foundTags: []
			};
			break;

		case itemsActionTypes.searchTags:
			stateChanges = {
				searchTagsString: action.searchString,
				searchingTags: true,
				foundTags: []
			};
			break;

		case itemsActionTypes.receiveFoundTags:
			stateChanges = {
				searchingTags: false,
				foundTags: action.found
			};
			break;

		case itemsActionTypes.addTag:
			stateChanges = {
				edited: Object.assign({}, state.edited, {tags: [...state.edited.tags, action.tag]}),
				foundTags: state.foundTags.filter(tag => tag.id !== action.tag.id)
			};
			break;

		case itemsActionTypes.removeTag:
			stateChanges = {
				edited: Object.assign({}, state.edited, {tags: state.edited.tags.filter(tag => tag.id !== action.tag.id)}),
				foundTags: [...state.foundTags, action.tag]
			};
			stateChanges.foundTags.sort((a, b) => a.name.localeCompare(b.name));
			break;

		default:
			stateChanges = getCommonStateChanges(itemsActionTypes, state, action, 'item');
			break;
	}
	return Object.assign({}, state, stateChanges);
}