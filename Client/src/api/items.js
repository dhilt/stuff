import getCommonApi from './common'

let myFetch = (url, success, fail = () => null) => fetch(url)
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
		jsonResult => success(jsonResult), 
		errorResult => { 
			if(!errorResult.then) {
				fail(errorResult);
				return Promise.reject(errorResult);
			}
			return errorResult.then((error) => {
				fail(error);
				return Promise.reject(error);
			});
	})

export default Object.assign({}, getCommonApi('items'), {

	search: (searchParams, cb) => myFetch('/api/items?searchString=' + searchParams.searchString, cb),

	getById: (id, success, fail) => myFetch('/api/items/' + id, success, fail)

})