import popup from './popup'

export function validate(_value, options) {
	let value = _value;
	let message = null;

	if(options.required && value === '') {
		message = {
			messageToken: 'App.validation.required',
			level: 'warning'
		}
	}

	if(options.exact && options.exact.length && options.exact.indexOf(value) === -1) {
		message = {
			messageToken: 'App.validation.exact',
			level: 'warning'
		}
		value = options.exact[0];
	}

	if (options.number) {
		value = value.replace(/[^\d]/g, '');
		value = parseInt(value, 10);

		if (value.toString() !== _value.toString()) {
			message = message || {
				messageToken: 'App.validation.illegalSymbols',
				level: 'warning'
			}
		}

		if (isNaN(value)) {
			message = message || {
				messageToken: 'App.validation.numeric',
				level: 'warning'
			}
			value = 0;
		}

		if (options.hasOwnProperty('min') && value < options.min) {
			message = message || {
				messageToken: 'App.validation.min',
				messageTokenParams: [options.min],
				level: 'warning'
			}
			value = options.min;
		}
	}

	if (message) {
		popup.show(message);
	}
	return value;
}