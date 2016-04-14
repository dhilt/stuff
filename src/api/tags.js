
export default {
	getAllTags(cb) {
		fetch('/api/tags')
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	},

	newTag(payload, cb) {
		alert(payload);
		fetch('/api/newTag', { name: payload })
			.then(res => res.json())
			.then(resJson => cb(resJson))
			.catch(err => console.log(err));
	}
}