import Helper from './_helpers'

export function getCommonInitialState() {
	return {
		searchString: '',
		searching: false,
		found: [],
		canAddNew: false,
		origin: null,
		edited: null,
		justEditedId: null
	}
}

export function getCommonStateChanges(actionTypes, state, action, entityType = 'tags') {

	let stateChanges = {};
	let found;

	switch (action.type) {

		case actionTypes.new:
			stateChanges = {
				edited: action.new,
				origin: action.new
			};
			if (entityType === 'items') {
				stateChanges.edited = Object.assign({}, action.new, {tags: Helper.getItemTags(action.new.tags, action.allTags)});
			}
			break;

		case actionTypes.select:
			stateChanges = {
				origin: action.selected,
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
				origin: null,
				edited: null
			};
			break;

		case actionTypes.receiveAdded:
			found = null;
			if (Helper.satisfySearch(action.result.name, state.searchString)) {
				found = [action.result, ...state.found];
				found.sort((a, b) => a.name.localeCompare(b.name));
			}
			stateChanges = {
				found: found || state.found,
				canAddNew: found ? Helper.canAddNewRecord(state.searchString, found) : state.canAddNew,
				origin: null,
				edited: action.result,
				justEditedId: action.result.id
			};
			stateChanges.edited.isNew = true;
			if (entityType === 'tags') {
				stateChanges.all = [...state.all, action.result];
			}
			else {
				stateChanges.edited = Object.assign({}, action.result, {tags: null});
			}
			break;

		case actionTypes.receiveChanged:
			found = state.found.map(entity => entity.id === action.result.id ? action.result : entity);
			stateChanges = {
				found: found,
				canAddNew: Helper.canAddNewRecord(state.searchString, found),
				origin: null,
				edited: action.result,
				justEditedId: action.result.id
			};
			if (entityType === 'tags') {
				stateChanges.all = state.all.map(entity => entity.id === action.result.id ? action.result : entity);
			}
			break;

		case actionTypes.delete:
			found = state.found.filter(entity => entity.id !== action.id);
			stateChanges = {
				found: found,
				canAddNew: Helper.canAddNewRecord(state.searchString, found),
				origin: null,
				edited: null
			};
			if (entityType === 'tags') {
				stateChanges.all = state.all.filter(entity => entity.id !== action.id);
			}
			break;
	}

	return stateChanges;
}