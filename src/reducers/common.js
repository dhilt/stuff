export const commonStuffInitialState = {
	all: [],
	found: [],
	searchString: '',
	canAddNew: false,
	selected: null,
	edited: null
};

let canAddNew = (nameStr, found) => !!nameStr && !found.find(t => t.name.toLowerCase() === nameStr.toLowerCase());

export function commonStuffReducer(actionTypes, state, action) {
		
	let found;

	switch (action.type) {

		case actionTypes.receiveAll:
			return Object.assign({}, state, {all: action.tags});

		case actionTypes.search:
			found = action.searchString ? state.all.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1) : [];
			found.sort((a, b) => a.name.localeCompare(b.name));
			return Object.assign({},
				state, {
					found: found,
					searchString: action.searchString,
					canAddNew: canAddNew(action.searchString, found),
					selected: null,
					edited: null
				}
			);

		case actionTypes.new:
			return Object.assign({},
				state, {
					edited: {name: state.searchString},
					selected: null
				}
			);

		case actionTypes.select:
			return Object.assign({}, state, {selected: action.tag}, {edited: action.tag});

		case actionTypes.change:
			return Object.assign({}, state, {
				edited: Object.assign({}, state.edited, action.tag)
			});

		case actionTypes.cancelChanges:
			return Object.assign({}, state, {
				selected: null,
				edited: null
			});

		case actionTypes.receiveAdded:
			return Object.assign({},
				state, {
					all: [...state.all, action.tag],
					found: [action.tag, ...state.found],
					selected: null,
					edited: Object.assign({}, action.tag, {isNew: true})
				}
			);

		case actionTypes.receiveChanged:
			return Object.assign({},
				state, {
					all: state.all.map(tag => tag.id === action.tag.id ? action.tag : tag),
					found: state.found.map(tag => tag.id === action.tag.id ? action.tag : tag),
					selected: null,
					edited: action.tag
				}
			);

		case actionTypes.delete:
			found = state.found.filter(tag => tag.id !== action.id);
			return Object.assign({},
				state, {
					all: state.all.filter(tag => tag.id !== action.id),
					found: found,
					canAddNew: canAddNew(state.searchString, found),
					selected: null,
					edited: null
				}
			);

		default:
			return Object.assign({}, state);
	}
}