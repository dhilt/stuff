import {getCommonInitialState, getCommonStateChanges} from './common'
import {itemsActionTypes} from './../actions/_types'

let initialState = Object.assign({}, getCommonInitialState(), {
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
				selected: item,
				edited: Object.assign({}, item, {tags: itemTags})
			};
			break;

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

		case itemsActionTypes.searchTags:
			let found = [];
			if(action.searchString) {
				let itemTags = state.edited.tags || [];
				found = action.allTags.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1 && !itemTags.find( t => t.id === tag.id ));
				found.sort((a, b) => a.name.localeCompare(b.name));
			}
			stateChanges = {
				searchTagsString: action.searchString,
				searchingTags: true,
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
			if(action.tag.name.toLowerCase().indexOf(state.searchTagsString.toLowerCase()) !== -1) {
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