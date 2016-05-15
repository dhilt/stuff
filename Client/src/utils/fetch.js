import auth from './auth'

export function generateApiData(method, payload) {
	let headers = payload ? {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	} : {	};
	headers['Authorization'] = 'Bearer ' + auth.getToken();
	
	return {
		method: method,
		headers: headers,
		body: JSON.stringify(payload)
	};
}

export function myFetch(url, method = 'GET', payload) {
	
	let fetchResult = fetch.apply(null, [url, generateApiData(method, payload)]);

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