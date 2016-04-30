export function generateApiData(method, payload) {
	return {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	};
}

export function myFetch (url, success, fail = () => null, data = null) {
	let args = data ? [url, data] : [url];

	let fetchResult = fetch.apply(null, args);

	return fetchResult
		.then(result => {
			if (result.status === 400) {
				return Promise.reject(result.text());
			}
			if (!result.ok) {
				return Promise.reject(result.statusText);
			}
			return result.json();
		})
		.then(
			jsonResult => success(jsonResult),
			errorResult => {
				if (!errorResult.then) {
					fail(errorResult);
					return Promise.reject(errorResult);
				}
				return errorResult.then((error) => {
					fail(error);
					return Promise.reject(error);
				});
			});
}

export function myDataFetch (url, data, success, fail) {
	return myFetch(url, success, fail, data);
}