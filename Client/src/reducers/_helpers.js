export default {

	findLang(languages, langToken) {
		return languages.find(lang => lang.token === langToken);
	},

	canAddNewRecord(nameStr, found) {
		return !!nameStr && !found.find(t => t.name.toLowerCase() === nameStr.toLowerCase());
	},

	satisfySearch(source, search) {
		return source.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	},

	getItemTags(tagIdList, allTags) {
		let itemTags = tagIdList && tagIdList.length ? allTags.filter(tag => tagIdList.indexOf(tag.id) !== -1) : [];
		itemTags.sort((a, b) => a.name.localeCompare(b.name));
		return itemTags;
	}

}