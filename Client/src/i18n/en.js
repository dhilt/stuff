export default {
	App: {
		mainMenu: {
			index: 'Index',
			items: 'Items',
			tags: 'Tags',
			settings: 'Settings',
			logout: 'Logout'
		},
		authDialog: {
			title: 'Authorization is needed',
			loginPlaceholder: 'login',
			passwordPlaceholder: 'password',
			send: 'Authorize',
			close: 'Close',
			actions: {
				loginSuccess: 'You successfully logged in!',
				loginFail: 'Can\'t login. Bad credentials.',
				loginError: 'Can\'t login. Server error.'
			}
		},
		paging: {
			first: 'First',
			previous: 'Prev',
			next: 'Next',
			last: 'Last',
			delimiter: '/'
		},
		validation: {
			required: 'The value can\'t be empty.',
			illegalSymbols: 'Illegal symbol...',
			numeric: 'The value must be numeric.',
			min: 'The value can\'t be less than {{%1}}.'
		}
	},
	Settings: {
		title: 'Stuff Settings',
		itemsPerPage: 'Items per page'
	},
	Index: {
		title: 'Stuff Welcome Index',
		Tags: {
			searchInputPlaceholder: 'start search items by tags',
			searchTypeCaption: 'Tags search type:',
			searchTypeUnion: 'union',
			searchTypeIntersect: 'intersect',
			searchTypeDelimiter: '/',
			notFound: 'No tags found...'
		},
		Items: {
			searching: 'searching...',
			notFound: 'No items found...'
		}
	},
	Items: {
		title: 'Stuff Items Editor',
		searchInputPlaceholder: 'start search items',
		searching: 'searching items...',
		notFound: 'No items found...',
		actions: {
			selectFail: 'Can\'t select item.'
		}
	},
	Tags: {
		title: 'Stuff Tags Editor',
		searchInputPlaceholder: 'start search tags',
		searching: 'searching tags...',
		notFound: 'No tags found...'
	},
	Item: {
		titleNew: 'Create new Item',
		titleEdit: 'Update Item',
		Tags: {
			title: 'Tags of this item',
			noTags: 'This item has no tags...'
		},
		Controls: {
			accept: 'Accept',
			acceptAndCreate: 'Add+',
			remove: 'Delete',
			cancel: 'Cancel'
		},
		actions: {
			created: 'Item was successfully created',
			updated: 'Item was successfully updated.',
			removed: 'Item was successfully removed.'
		}
	},
	Tag: {
		titleNew: 'Create new Tag',
		titleEdit: 'Update Tag',
		Controls: {
			accept: 'Accept',
			remove: 'Delete',
			cancel: 'Cancel'
		},
		actions: {
			created: 'Tag was successfully created.',
			updated: 'Tag was successfully updated.',
			removed: 'Tag was successfully removed.'
		}
	}
}