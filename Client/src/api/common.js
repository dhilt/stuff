import {myFetch} from '../utils/fetch'

export default function getCommonApi(entityToken) {
	return {
		create: (item) =>
			myFetch('/api/' + entityToken, 'POST', item),

		update: (item) =>
			myFetch('/api/' + entityToken + '/' + item.id, 'PUT', item),

		delete: (id) =>
			myFetch('/api/' + entityToken + '/' + id, 'DELETE', {id: id})
	}
}