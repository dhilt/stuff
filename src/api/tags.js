const TIMEOUT = 100;

export default {
	getTags(cb, timeout) {
		fetch('/api/tags')
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	},

	newTag(payload, cb, timeout) {
		alert(payload);
		fetch('/api/newTag', { name: payload })
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	}
}