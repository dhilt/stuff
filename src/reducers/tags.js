import {tagsActionTypes as actionTypes} from './../actions';

const initialState = {
	tags: [],
	found: [],
	newTagName: '',
	canAddNewTag: false
};

export default function tags(state = initialState, action) {
	switch (action.type) {
		case actionTypes.receiveAllTags:
			return Object.assign({},
				state, { tags: action.tags }
			);
		case actionTypes.addNewTag:
			return action.cart;
		default:
			return initialState;
	}
}