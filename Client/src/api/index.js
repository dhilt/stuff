import {myDataFetch, generateApiData} from './utils'

export default {
	getItemsByTags: (tags, success, fail) =>
		myDataFetch('/api/index', generateApiData('POST', tags), success, fail)
}