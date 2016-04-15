import {tagsActionTypes} from './../actions/_types';

const initialState = {
	all: [],
	found: [],
	newTagName: '',
	canAddNewTag: false,
	selected: null,
	changed: null
};

export default function tags(state = initialState, action) {
	switch (action.type) {

		case tagsActionTypes.receiveAllTags:
			return Object.assign({}, state, {all: action.tags});

		case tagsActionTypes.searchTags:
			let filteredTags = action.searchString ? state.all.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1) : [];
			filteredTags.sort((a, b) => a.name.localeCompare(b.name));
			return Object.assign({},
				state, {
					found: filteredTags,
					newTagName: action.searchString,
					canAddNewTag: !!action.searchString && !filteredTags.find(t => t.name.toLowerCase() === action.searchString.toLowerCase())
				}
			);

		case tagsActionTypes.addNewTag:
			return Object.assign({},
				state, {
					all: [
						...state.all, {
							id: action.tag.id,
							name: action.tag.name
						}
					],
					found: [],
					newTagName: '',
					canAddNewTag: false
				}
			);
		
		case tagsActionTypes.selectTag:
			return Object.assign({}, state, {selected: action.tag}, {changed: action.tag});

		case tagsActionTypes.changeTag:
			return Object.assign({}, state, {
				changed: Object.assign({}, state.changed, action.tag)
			});

		case tagsActionTypes.applyTagChange:
			let changedTag = Object.assign({}, action.tag, { changed: true });
			return Object.assign({}, 
				state, {
					all: state.all.map(tag => tag.id === action.tag.id ? action.tag : tag),
					found: state.found.map(tag => tag.id === action.tag.id ? changedTag : tag),
					changed: null
				}
			);

		default:
			return Object.assign({}, state);
	}
}