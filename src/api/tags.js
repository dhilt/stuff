const TIMEOUT = 100;

export default {
	getTags(cb, timeout) {
		fetch('/api/tags')
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	},

	addTag(payload, cb, timeout) {
		setTimeout(() => cb(), timeout || TIMEOUT)
	}
}