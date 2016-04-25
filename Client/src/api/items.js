import getCommonApi from './common'

export default Object.assign({}, getCommonApi('items', '/api/deleteItem'), {
	search(searchParams, cb) {
		fetch('/api/items?searchString=' + searchParams.searchString)
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	}
})