export default function getCommonApi(entityToken) {

	let generateData = (method, payload) => ({
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});

	return {
		create: (item, cb) => {
			fetch('/api/' + entityToken, generateData('POST', item))
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		},

		update: (item, cb) => {
			fetch('/api/' + entityToken + '/' + item.id, generateData('PUT', item))
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		},

		delete: (id, cb) => {
			fetch('/api/' + entityToken + '/' + id, generateData('DELETE', {id: id}))
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		}
	}
}