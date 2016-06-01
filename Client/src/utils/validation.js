import popup from './popup'

export function validate(value, options) {
	if(options.number) {
		value = parseInt(value, 10);

		if(isNaN(value)) {
			popup.show({
				messageToken: 'App.validation.numeric',
				level: 'warning'
			});
			value = 0;
		}

		if(options.hasOwnProperty('min') && value < options.min) {
			popup.show({
				messageToken: 'App.validation.min',
				messageTokenParams: [options.min],
				level: 'warning'
			});
			value = options.min;
		}
	}

	return value;
}