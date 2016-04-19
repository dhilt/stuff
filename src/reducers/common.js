export function getCommonInitialState() {
	return {
		searchString: '',
		searching: false,
		found: [],
		canAddNew: false,
		selected: null,
		edited: null
	}
}

let canAddNew = (nameStr, found) => !!nameStr && !found.find(t => t.name.toLowerCase() === nameStr.toLowerCase());

export function getCommonStateChanges(actionTypes, state, action, hasAll = true) {

	let stateChanges = {};
	let found;

	switch (action.type) {

		case actionTypes.search:
			stateChanges = {
				searching: true,
				found: [],
				searchString: action.searchString,
				canAddNew: false,
				selected: null,
				edited: null
			};
			break;

		case actionTypes.receiveFound:
			stateChanges = {
				searching: false,
				found: action.found,
				canAddNew: canAddNew(state.searchString, action.found)
			};
			break;

		case actionTypes.new:
			stateChanges = {
				edited: {name: state.searchString},
				selected: null
			};
			break;

		case actionTypes.select:
			stateChanges = {
				selected: action.selected,
				edited: action.selected
			};
			break;

		case actionTypes.change:
			stateChanges = {
				edited: Object.assign({}, state.edited, action.edited)
			};
			break;

		case actionTypes.cancelChanges:
			stateChanges = {
				selected: null,
				edited: null
			};
			break;

		case actionTypes.receiveAdded:
			stateChanges = {
				found: [action.result, ...state.found],
				selected: null,
				edited: action.result
			};
			stateChanges.edited.isNew = true;
			if (hasAll) {
				stateChanges.all = [...state.all, action.result];
			}
			break;

		case actionTypes.receiveChanged:
			stateChanges = {
				found: state.found.map(entity => entity.id === action.result.id ? action.result : entity),
				selected: null,
				edited: action.result
			};
			if (hasAll) {
				stateChanges.all = state.all.map(entity => entity.id === action.result.id ? action.result : entity);
			}
			break;

		case actionTypes.delete:
			found = state.found.filter(entity => entity.id !== action.id);
			stateChanges = {
				found: found,
				canAddNew: canAddNew(state.searchString, found),
				selected: null,
				edited: null
			};
			if (hasAll) {
				stateChanges.all = state.all.filter(entity => entity.id !== action.id);
			}
			break;
	}

	return stateChanges;
}