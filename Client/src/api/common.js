export default function getCommonApi(entityToken, deleteApiToken) {
	return {
		create: (item, cb) => {
			let data = {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item)
			};
			fetch('/api/' + entityToken, data)
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		},

		update: (item, cb) => {
			let data = {
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item)
			};
			fetch('/api/' + entityToken + '/' + item.id, data)
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		},

		delete: (id, cb) => {
			let data = {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({id: id})
			};
			fetch(deleteApiToken, data)
				.then(res => res.json())
				.then(resJson => cb(resJson))
				.catch(err => console.log(err));
		}
	}
}