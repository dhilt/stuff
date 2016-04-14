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
			return Object.assign({},
				state, { all: action.tags }
			);
		case actionTypes.receiveFoundTags:
			return Object.assign({},
				state, { 
					found: action.tags,
					newTagName: action.searchString,
					canAddNewTag: action.searchString && !action.tags.find( t => t.name.toLowerCase() === action.searchString.toLowerCase()) 
				}
			);
		case actionTypes.addNewTag:
			return [
		        ...state, {
		        	id: action.id,
		        	name: action.name
		        }
      		];
		default:
			return initialState;
	}
}