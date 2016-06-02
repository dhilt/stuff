class Cookie {
	clear (name) {
		document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	save (name, value, hours) {
		hours = hours || 30 * 24; // month by default
		var date = new Date(new Date().getTime() + hours * 60 * 60 * 1000);
		document.cookie = name + '=' + value + '; path=/; expires=' + date.toUTCString();
	}

	getValue (name) {
		let value = '; ' + document.cookie;
		let parts = value.split('; ' + name + '=');
		if (parts.length == 2)
			return parts.pop().split(';').shift();
		return '';
	}
}

const cookie = new Cookie();

export default cookie