import {generateApiData, myDataFetch} from './utils'

export default function getCommonApi(entityToken) {

	return {
		create: (item, cb) =>
			myDataFetch('/api/' + entityToken, generateApiData('POST', item), cb),

		update: (item, cb) => 
			myDataFetch('/api/' + entityToken + '/' + item.id, generateApiData('PUT', item), cb),

		delete: (id, cb) => 
			myDataFetch('/api/' + entityToken + '/' + id, generateApiData('DELETE', {id: id}), cb)
	}
}