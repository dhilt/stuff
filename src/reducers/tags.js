import {tagsActionTypes} from './../actions/_types';

const initialState = {
	all: [],
	found: [],
	searchString: '',
	canAddNewTag: false,
	selected: null,
	edited: null
};

let canAddNewTag = (nameStr, found) => !!nameStr && !found.find(t => t.name.toLowerCase() === nameStr.toLowerCase());

export default function tags(state = initialState, action) {
	let found;

	switch (action.type) {

		case tagsActionTypes.receiveAllTags:
			return Object.assign({}, state, {all: action.tags});

		case tagsActionTypes.searchTags:
			found = action.searchString ? state.all.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1) : [];
			found.sort((a, b) => a.name.localeCompare(b.name));
			return Object.assign({},
				state, {
					found: found,
					searchString: action.searchString,
					canAddNewTag: canAddNewTag(action.searchString, found),
					selected: null,
					edited: null
				}
			);

		case tagsActionTypes.newTag:
			return Object.assign({},
				state, {
					edited: {name: state.searchString},
					selected: null
				}
			);

		case tagsActionTypes.selectTag:
			return Object.assign({}, state, {selected: action.tag}, {edited: action.tag});

		case tagsActionTypes.changeTag:
			return Object.assign({}, state, {
				edited: Object.assign({}, state.edited, action.tag)
			});

		case tagsActionTypes.cancelTagChanges:
			return Object.assign({}, state, {
				selected: null,
				edited: null
			});

		case tagsActionTypes.receiveAddedTag:
			return Object.assign({},
				state, {
					all: [...state.all, action.tag],
					found: [action.tag, ...state.found],
					selected: null,
					edited: Object.assign({}, action.tag, {isNew: true})
				}
			);

		case tagsActionTypes.receiveChangedTag:
			return Object.assign({},
				state, {
					all: state.all.map(tag => tag.id === action.tag.id ? action.tag : tag),
					found: state.found.map(tag => tag.id === action.tag.id ? action.tag : tag),
					selected: null,
					edited: action.tag
				}
			);

		case tagsActionTypes.deleteTag:
			found = state.found.filter(tag => tag.id !== action.id);
			return Object.assign({},
				state, {
					all: state.all.filter(tag => tag.id !== action.id),
					found: found,
					canAddNewTag: canAddNewTag(state.searchString, found),
					selected: null,
					edited: null
				}
			);

		default:
			return Object.assign({}, state);
	}
}