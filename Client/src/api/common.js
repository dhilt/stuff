import {generateApiData} from './utils'

export default function getCommonApi(entityToken) {

	return {
		create: (item, cb) => {
			fetch('/api/' + entityToken, generateApiData('POST', item))
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		},

		update: (item, cb) => {
			fetch('/api/' + entityToken + '/' + item.id, generateApiData('PUT', item))
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		},

		delete: (id, cb) => {
			fetch('/api/' + entityToken + '/' + id, generateApiData('DELETE', {id: id}))
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		}
	}
}