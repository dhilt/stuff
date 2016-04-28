import getCommonApi from './common'

let myFetch = (url, resultCallback) => fetch(url)
	.then(result => {
		if (result.status === 400) {
			return Promise.reject(result.text());
		}
		if(!result.ok) {
			return Promise.reject(result.statusText);
		}
		return result.json();
	})
	.then(
		jsonResult => resultCallback(jsonResult), 
		errorResult => { 
			if(!errorResult.then) {
				return Promise.reject(errorResult);
			}
			return errorResult.then((error) => Promise.reject(error));
	})

export default Object.assign({}, getCommonApi('items'), {

	search: (searchParams, cb) => myFetch('/api/items?searchString=' + searchParams.searchString, cb),

	getById: (id, cb) => myFetch('/api/items/' + id, cb)

})