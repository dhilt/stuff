import {myFetch} from '../utils/fetch'

export default {
	getItemsByTags: (tags, type) =>
		myFetch('/api/index', 'POST', {tags: tags, type: type})
}