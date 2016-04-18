import getCommonApi from './common'

export default Object.assign({}, getCommonApi('/api/pushItem', '/api/deleteItem'), {
	search(searchParams, cb) {
		let data = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(searchParams)
		};
		fetch('/api/items', data)
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	}
})