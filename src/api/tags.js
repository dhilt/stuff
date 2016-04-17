export default {
	getAll(cb) {
		fetch('/api/tags')
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	},

	push(item, cb) {
		let data = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		};
		fetch('/api/pushTag', data)
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	},

	delete(id, cb) {
		let data = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({id: id})
		};
		fetch('/api/deleteTag', data)
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	}
}