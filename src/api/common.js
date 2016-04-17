export default function getCommonApi(pushApiToken, deleteApiToken) {
	return {
		push: (item, cb) => {
			let data = {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item)
			};
			fetch(pushApiToken, data)
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