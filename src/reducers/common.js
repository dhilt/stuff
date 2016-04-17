export function getCommonInitialState() {
	return {
		found: [],
		searchString: '',
		canAddNew: false,
		selected: null,
		edited: null
	}
}

let canAddNew = (nameStr, found) => !!nameStr && !found.find(t => t.name.toLowerCase() === nameStr.toLowerCase());

export function commonReducer(actionTypes, state, action) {

	let found;

	switch (action.type) {

		case actionTypes.receiveAll:
			return Object.assign({}, state, {all: action.all});

		case actionTypes.search:
			return Object.assign({},
				state, {
					searchString: action.searchString,
					canAddNew: false,
					selected: null,
					edited: null
				}
			);
		
		case actionTypes.receiveFound:
			return Object.assign({},
				state, {
					found: action.found,
					canAddNew: canAddNew(state.searchString, action.found)
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
			return Object.assign({}, state, {selected: action.selected}, {edited: action.selected});

		case actionTypes.change:
			return Object.assign({}, state, {
				edited: Object.assign({}, state.edited, action.edited)
			});

		case actionTypes.cancelChanges:
			return Object.assign({}, state, {
				selected: null,
				edited: null
			});

		case actionTypes.receiveAdded:
			return Object.assign({},
				state, {
					all: [...state.all, action.result],
					found: [action.result, ...state.found],
					selected: null,
					edited: Object.assign({}, action.result, {isNew: true})
				}
			);

		case actionTypes.receiveChanged:
			return Object.assign({},
				state, {
					all: state.all.map(tag => tag.id === action.result.id ? action.result : tag),
					found: state.found.map(tag => tag.id === action.result.id ? action.result : tag),
					selected: null,
					edited: action.result
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