export let indexActionTypes = {
	openTagList: 'OPEN_INDEX_TAG_LIST',
	closeTagList: 'CLOSE_INDEX_TAG_LIST',
	searchTags: 'SEARCH_INDEX_TAGS',
	clearTags: 'CLEAR_INDEX_TAGS',
	selectTag: 'SELECT_INDEX_TAG',
	removeTag: 'REMOVE_INDEX_TAG',
	receiveItems: 'RECEIVE_INDEX_ITEMS'
};

export let tagsActionTypes = {
	receiveAll: 'RECEIVE_ALL_TAGS',
	search: 'SEARCH_TAGS',
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
	receiveAddedAndCreateNew: 'RECEIVE_ADDED_AND_CREATE_NEW_ITEM',
	searchTags: 'SEARCH_ITEM_TAGS',
	addTag: 'ADD_ITEM_TAG',
	removeTag: 'REMOVE_ITEM_TAG'
};