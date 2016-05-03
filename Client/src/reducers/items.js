import {getCommonInitialState, getCommonStateChanges} from './common'
import {itemsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
	path: '/items',
	receiving: false,
	searchTagsString: '',
	searchingTags: false,
	foundTags: []
});

export default function items(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case itemsActionTypes.select:
			stateChanges = {
				receiving: true
			};
			break;

		case itemsActionTypes.cancelSelect:
			stateChanges = {
				receiving: false
			};
			break;

		case itemsActionTypes.receiveSelected:
			let item = action.selected;
			let itemTags = item.tags && item.tags.length ? action.allTags.filter(tag => item.tags.indexOf(tag.id) !== -1) : [];
			itemTags.sort((a, b) => a.name.localeCompare(b.name));
			stateChanges = {
				receiving: false,
				origin: item,
				edited: Object.assign({}, item, {tags: itemTags})
			};
			break;

		case '@@router/LOCATION_CHANGE':
			if (action.payload.pathname.indexOf('/items') === -1) {
				stateChanges = Object.assign({}, initialState);
			}
			else if (action.payload.pathname === '/items') {
				stateChanges = {
					origin: null,
					edited: null,
					searchTagsString: '',
					searchingTags: false,
					foundTags: []
				};
			}
			else {
				stateChanges = {
					justEditedId: null
				}
			}
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
			stateChanges = getCommonStateChanges(itemsActionTypes, state, action, 'items');
			break;
	}
	return Object.assign({}, state, stateChanges);
}