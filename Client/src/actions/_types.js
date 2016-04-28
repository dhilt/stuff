export let tagsActionTypes = {
	receiveAll: 'RECEIVE_ALL_TAGS',
	search: 'SEARCH_TAGS',
	receiveFound: 'RECEIVE_FOUND_TAGS',
	new: 'NEW_TAG',
	select: 'SELECT_TAG',
	change: 'CHANGE_TAG_LOCALLY',
	cancelChanges: 'CANCEL_LOCAL_TAG_CHANGES',
	create: 'CREATE_TAG',
	update: 'UPDATE_TAG',
	receiveAdded: 'RECEIVE_ADDED_TAG',
	receiveChanged: 'RECEIVE_CHANGED_TAG',
	delete: 'DELETE_TAG'
};

export let itemsActionTypes = {
	receiveAll: 'RECEIVE_ALL_ITEMS',
	receiveFound: 'RECEIVE_FOUND_ITEMS',
	search: 'SEARCH_ITEMS',
	new: 'NEW_ITEM',
	select: 'SELECT_ITEM',
	cancelSelect: 'CANCEL_SELECT',
	receiveSelected: 'RECEIVE_SELECTED_ITEM',
	setItemTags: 'SET_ITEM_TAGS',
	change: 'CHANGE_ITEM_LOCALLY',
	cancelChanges: 'CANCEL_LOCAL_ITEM_CHANGES',
	create: 'CREATE_ITEM',
	update: 'UPDATE_ITEM',
	receiveAdded: 'RECEIVE_ADDED_ITEM',
	receiveChanged: 'RECEIVE_CHANGED_ITEM',
	delete: 'DELETE_ITEM',
	searchTags: 'SAERCH_ITEM_TAGS',
	receiveFoundTags: 'RECEIVE_FOUND_ITEM_TAGS',
	addTag: 'ADD_ITEM_TAG',
	removeTag: 'REMOVE_ITEM_TAG'
};