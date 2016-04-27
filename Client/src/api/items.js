import getCommonApi from './common'

export default Object.assign({}, getCommonApi('items'), {
	search: (searchParams, cb) => {
		fetch('/api/items?searchString=' + searchParams.searchString)
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	},

	getById: (id) => {
		fetch('/api/items/' + id)
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));		
	}
})