export default {
	App: {
		mainMenu: {
			index: 'Index',
			items: 'Items',
			tags: 'Tags',
			logout: 'Logout'
		},
		authDialog: {
			title: 'Authorization is needed',
			loginPlaceholder: 'login',
			passwordPlaceholder: 'password',
			send: 'Authorize',
			close: 'Close',
			actions: {
				login: 'You successfully logged in!'
			}
		}
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
		newItemIntro: 'Here you can create a new item',
		editItemIntro: 'Here you can update item',
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
		newTagIntro: 'Here you can create a new tag',
		editTagIntro: 'Here you can update tag',
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