import auth from './auth'

export function generateApiData(method, payload) {
	return {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + auth.getToken()
		},
		body: JSON.stringify(payload)
	};
}

export function myFetch(url, data = null) {
	let args = data ? [url, data] : [url, {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + auth.getToken()
		}
	}];

	let fetchResult = fetch.apply(null, args);

	return fetchResult
		.then(result => {
			if (result.status === 302) {
				auth.show();
				return Promise.reject(result.text());
			}
			if (result.status === 400) {
				return Promise.reject(result.text());
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