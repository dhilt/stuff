import {getCommonInitialState, getCommonStateChanges} from './common'
import {itemsActionTypes} from './../actions/_types'
import Helper from './_helpers'

let initialState = Object.assign({}, getCommonInitialState(), {
	path: '/items',
	receiving: false,
	searchTagsString: '',
	foundTags: []
});

export default function items(state = initialState, action) {

	let stateChanges = {};

	switch (action.type) {

		case '@@router/LOCATION_CHANGE':
			if (action.payload.pathname.indexOf('/items') === -1) {
				stateChanges = Object.assign({}, initialState);
			}
			else if (action.payload.pathname === '/items') {
				stateChanges = {
					origin: null,
					edited: null,
					searchTagsString: '',
					foundTags: []
				};
			}
			else {
				stateChanges = {
					justEditedId: null
				}
			}
			break;

		case itemsActionTypes.search:
			stateChanges = {
				searching: true,
				found: [],
				searchString: action.searchString,
				canAddNew: false,
				origin: null,
				edited: null,
				justEditedId: null
			};
			break;

		case itemsActionTypes.receiveFound:
			stateChanges = {
				searching: false,
				found: action.found,
				canAddNew: Helper.canAddNewRecord(state.searchString, action.found)
			};
			break;

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

		case itemsActionTypes.searchTags:
			let found = [];
			if (action.searchString) {
				let itemTags = state.edited.tags || [];
				found = action.allTags.filter(tag => Helper.satisfySearch(tag.name, action.searchString) && !itemTags.find(t => t.id === tag.id));
				found.sort((a, b) => a.name.localeCompare(b.name));
			}
			stateChanges = {
				searchTagsString: action.searchString,
				foundTags: found
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
				edited: Object.assign({}, state.edited, {tags: state.edited.tags.filter(tag => tag.id !== action.tag.id)})
			};
			if (Helper.satisfySearch(action.tag.name, state.searchTagsString)) {
				stateChanges.foundTags = [...state.foundTags, action.tag];
				stateChanges.foundTags.sort((a, b) => a.name.localeCompare(b.name));
			}
			break;

		default:
			stateChanges = getCommonStateChanges(itemsActionTypes, state, action, 'items');
			break;
	}
	return Object.assign({}, state, stateChanges);
}