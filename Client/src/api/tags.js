import getCommonApi from './common'

export default Object.assign({}, getCommonApi('tags'), {
	getAll(cb) {
		fetch('/api/tags')
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	}
})