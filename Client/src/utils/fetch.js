import auth from './auth'

function generateApiData(method, payload) {
	let headers = payload ? {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	} : {};
	headers['Authorization'] = 'Bearer ' + auth.getToken();

	let result = {
		method: method,
		headers: headers
	};
	if (payload)
		result.body = JSON.stringify(payload);
	return result;
}

export function myFetch(url, method = 'GET', payload) {

	let fetchResult = fetch.apply(null, [url, generateApiData(method, payload)]);

	return fetchResult
		.then(result => {
			if (result.status === 302) {
				auth.show();
				return Promise.reject(302);
			}
			if (result.status === 400) {
				return Promise.reject({status: 400, message: result.text()});
			}
			if (!result.ok) {
				return Promise.reject(result.statusText);
			}
			return result.json();
		})
		.then(jsonResult => Promise.resolve(jsonResult), errorResult =>
			(!errorResult.then) ? Promise.reject(errorResult) : errorResult.then((error) => Promise.reject(error))
		)
		;//.catch( e => console.log(e));
}