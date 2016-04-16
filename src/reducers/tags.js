import {tagsActionTypes} from './../actions/_types';

const initialState = {
	all: [],
	found: [],
	newTagName: '',
	canAddNewTag: false,
	selected: null,
	edited: null
};

let canAddNewTag = (nameStr, found) => !!nameStr && !found.find(t => t.name.toLowerCase() === nameStr.toLowerCase());

export default function tags(state = initialState, action) {
	let changedTag = null;
	let found = [];
	
	switch (action.type) {

		case tagsActionTypes.receiveAllTags:
			return Object.assign({}, state, {all: action.tags});

		case tagsActionTypes.searchTags:
			found = action.searchString ? state.all.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1) : [];
			found.sort((a, b) => a.name.localeCompare(b.name));
			return Object.assign({},
				state, {
					found: found,
					newTagName: action.searchString,
					canAddNewTag: canAddNewTag(action.searchString, found)
				}
			);

		case tagsActionTypes.newTag:
			return Object.assign({},
				state, {
					edited: { name: state.newTagName },
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
				edited: null
			});

		case tagsActionTypes.receiveAddedTag:
			changedTag = Object.assign({}, action.tag, { edited: true });
			found = [...state.found, Object.assign({}, action.tag, { edited: true })];
			found.sort((a, b) => a.name.localeCompare(b.name));
			return Object.assign({}, 
				state, {
					all: [...state.all, action.tag],
					found: found,
					selected: null,
					edited: null
				}
			);

		case tagsActionTypes.receiveChangedTag:
			changedTag = Object.assign({}, action.tag, { edited: true });
			return Object.assign({}, 
				state, {
					all: state.all.map(tag => tag.id === action.tag.id ? action.tag : tag),
					found: state.found.map(tag => tag.id === action.tag.id ? changedTag : tag),
					selected: changedTag,
					edited: null
				}
			);

		case tagsActionTypes.deleteTag:
			found = state.found.filter(tag => tag.id !== action.id);
			return Object.assign({},
				state, {
					all: state.all.filter(tag => tag.id !== action.id),
					found: found,
					selected: null,
					edited: null,
					canAddNewTag: canAddNewTag(state.newTagName, found)
				}
			);

		default:
			return Object.assign({}, state);
	}
}