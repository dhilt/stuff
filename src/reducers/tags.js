import {tagsActionTypes as actionTypes} from './../actions';

const initialState = {
	all: [],
	found: [],
	newTagName: '',
	canAddNewTag: false
};

export default function tags(state = initialState, action) {
	switch (action.type) {

		case actionTypes.receiveAllTags:
			return Object.assign({}, state, {all: action.tags});

		case actionTypes.changeSearchInput:
			let filteredTags = action.searchString ? state.all.filter(tag => tag.name.toLowerCase().indexOf(action.searchString.toLowerCase()) !== -1) : [];
			return Object.assign({},
				state, {
					found: filteredTags,
					newTagName: action.searchString,
					canAddNewTag: !!action.searchString && !filteredTags.find(t => t.name.toLowerCase() === action.searchString.toLowerCase())
				}
			);

		case actionTypes.addNewTag:
			return Object.assign({},
				state, {
					all: [
						...state.all, {
							id: action.tag.id,
							name: action.tag.name
						}
					],
					newTagName: '',
					canAddNewTag: false
				}
			);

		default:
			return initialState;
	}
}