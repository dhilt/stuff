import {myDataFetch, generateApiData} from './utils'

export default {
	getItemsByTags: (tags, type, success, fail) =>
		myDataFetch('/api/index', generateApiData('POST', {tags: tags, type: type}), success, fail)
}